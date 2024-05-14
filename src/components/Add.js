import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Add.css";
import { addVideoApi } from "../services/allApis";

import { Link } from "react-router-dom";

function Add({ update }) {
  const [videoInputs, setVideoInputs] = useState({
    title: "",
    coverImg: "",
    videoUrl: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setDatas = (e) => {
    let { value, name } = e.target;
    setVideoInputs({ ...videoInputs, [name]: value });
  };

  const setVideoUrl = (e) => {
    let { value, name } = e.target;
    // https://www.youtube.com/watch?v=HBb2Ej4Lnuk
    //https://www.youtube.com/embed/HBb2Ej4Lnuk
    var newValue = `https://www.youtube.com/embed/${value.slice(-11)}`;
    setVideoInputs({ ...videoInputs, [name]: newValue });
  };

  const addVideo = async () => {
    const { title, coverImg, videoUrl } = videoInputs;
    if (title === "" || coverImg === "" || videoUrl === "") {
      alert("Please Fill All Details");
    } else {
      const out = await addVideoApi(videoInputs);
      console.log(out);
      if (out.status >= 200 && out.status < 300) {
        alert("Video Addedd Successfully");
        handleClose();
        update(true); //to refresh while add successful
      } else {
        alert("Video Upload failed");
      }
    }
  };
  return (
    <div>
      <div
        className="add-sec   btn border-0"
        variant="primary"
        onClick={handleShow}
      ></div>

      <div className="d-flex justify-content-center mt-3">
        <Link className="historytxt" to={"/home/history"}>
          <i class="fa-solid fa-clock-rotate-left me-2"></i>View Watch History
        </Link>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="form-control mb-4 "
            placeholder="Video-Caption"
            onChange={(e) => {
              setDatas(e);
            }}
            name="title"
          />
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Cover Image URL"
            onChange={(e) => {
              setDatas(e);
            }}
            name="coverImg"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Youtube Video URL"
            onChange={(e) => {
              setVideoUrl(e);
            }}
            name="videoUrl"
          />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="success" onClick={addVideo}>
            Upload
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Add;
