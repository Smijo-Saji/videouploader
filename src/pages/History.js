import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Trash2 } from "react-feather";
import { Link } from "react-router-dom";
import { accessHistoryApi, deleteHistoryApi } from "../services/allApis";

function History() {
  const [historydata, setHistoryData] = useState([]);

  const accessHistory = async () => {
    const out = await accessHistoryApi();
    setHistoryData(out.data);
  };
  useEffect(() => {
    accessHistory();
  }, []);

  const deleteHistory = async (id) => {
    await deleteHistoryApi(id);
    accessHistory();
  };

  const sortedHistory = () => {
    // setHistoryData((prevhistorydata) => [...prevhistorydata].reverse());
    const sortedData = [...historydata];
    sortedData.sort((a, b) => new Date(b.date_time) - new Date(a.date_time));
    setHistoryData(sortedData);
  };
  return (
    <div className="mt-3">
      <Container>
        <div className="d-flex justify-content-between my-3">
          <h2>Watch History </h2>
          <div>
            {historydata?.length > 0 && (
              <button className="btn border me-2" onClick={sortedHistory}>
                <i class="fa-solid fa-clock-rotate-left me-2"></i>Recentlty
                Watched
              </button>
            )}
            <Link to={"/home"}>
              <button className="btn border">
                <i class="fa-solid fa-arrow-right fa-rotate-180"></i>
              </button>
            </Link>
          </div>
        </div>

        <Table striped bordered hover scroll>
          <thead className="text-center">
            <tr>
              <th style={{ width: "10px" }}>SI.No</th>
              <th>Date & Time</th>
              <th>Title</th>
              <th>Video URL</th>
              <th style={{ width: "0px" }}></th>
            </tr>
          </thead>
          <tbody>
            {historydata?.length > 0 ? (
              historydata.map((i, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{i.date_time}</td>
                  <td>{i.title}</td>
                  <td>{i.videoUrl}</td>
                  <td>
                    <Trash2 onClick={() => deleteHistory(i.id)} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center">
                  No Videos Watched Yet
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default History;
