import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { accessVideoApi } from "../services/allApis";

function Videos({ updatedData }) {
  const [allVideos, setAllVideos] = useState([]);

  const [deleteStatus, setDeleteStatus] = useState(false);
  const getVideos = async () => {
    const result = await accessVideoApi();
    if (result.status >= 200 && result.status < 300) {
      setAllVideos(result.data);
    } else {
      alert("Video access failed");
    }
  };

  useEffect(() => {
    getVideos();
  }, [updatedData, deleteStatus]);
  //console.log(allVideos);
  return (
    <>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {allVideos.map((video) => (
          <VideoCard data={video} status={setDeleteStatus} />
        ))}
      </div>
    </>
  );
}

export default Videos;
