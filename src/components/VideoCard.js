import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { addHistoryApi, deleteVideoApi } from "../services/allApis";
import { format } from "date-fns";
import "./VideoCard.css";

function VideoCard({ data, status }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    let title = data.title;
    let url = data.videoUrl;
    let date = format(new Date(), "yyyy/MM/dd hh:mm:ss a");
    let bodyData = {
      date_time: date,
      title: title,
      videoUrl: url,
    };

    await addHistoryApi(bodyData);
  };

  const deleteVideo = async (id) => {
    const out = await deleteVideoApi(id);
    if (out.status >= 200 && out.status < 300) {
      alert("Delete Success");
      status(true);
    } else {
      alert("Delete Failed");
    }
  };

  const dragStart = (e, id) => {
    console.log(id);
    //to store/share dragged data e.dataTransfer("key",value)
    e.dataTransfer.setData("cardId", id);
  };

  return (
    <div>
      <Card
        draggable
        style={{ width: "19rem" }}
        className="border-0"
        onDragStart={(e) => dragStart(e, data.id)}
      >
        <Card.Img
          draggable={false}
          className="cardimgsec"
          variant="top"
          onClick={handleShow}
          src={data.coverImg}
          style={{ height: "170px" }}
        />
        <Card.Body className="cardbodysec">
          <Card.Title className="text-center text-white">
            {data.title}
          </Card.Title>

          <div className="d-flex justify-content-evenly">
            <Button
              className=" btn-success"
              variant="primary"
              onClick={handleShow}
              style={{ width: "100px" }}
            >
              <i class="fa-solid fa-play me-2 fa-beat"></i>Play
            </Button>
            <Button
              className="bg-danger border-0"
              style={{ width: "100px", backgroundColor: "#1e56a0" }}
              onClick={() => deleteVideo(data.id)}
            >
              <i class="fa-solid fa-trash me-2"></i>Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="rounded"
      >
        <Modal.Header
          closeButton
          className="bg-black border-0 text-white p-0 ps-3 pt-2"
        >
          <Modal.Title id="contained-modal-title-vcenter">
            {data.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-black">
          <iframe
            width="100%"
            height="350"
            src={`${data.videoUrl}/?autoplay=1`}
            className="rounded"
            title="കഴിഞ്ഞോ?  ജോലി ഒന്നും ആയില്ലേ? ഈ ചോദ്യങ്ങൾ കേട്ട് മടുത്തോ?"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer className="bg-black border-0 d-flex justify-content-center p-0 pb-2">
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default VideoCard;
