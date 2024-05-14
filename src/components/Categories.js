import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import {
  accessCategoryApi,
  accessSingleVideoApi,
  addCategoryApi,
  deleteCategoryApi,
  updateCategoryApi,
} from "../services/allApis";
import { Trash2 } from "react-feather";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Categories.css";

function Categories() {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [allCategory, setAllcategory] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addCategory = async () => {
    if (categoryName === "") {
      toast.error("😏 Add Category Name!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    } else {
      var bodyData = { categoryName, videos: [] };
      const result = await addCategoryApi(bodyData);
      if (result.status >= 200 && result.status < 300) {
        toast.success("🤗 Category Added Succcesfully", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
        setCategoryName("");
        getCategory();
        handleClose();
      }
    }
  };

  const getCategory = async () => {
    const catresult = await accessCategoryApi();
    if (catresult.status >= 200 && catresult.status < 300) {
      setAllcategory(catresult.data);
    } else {
      alert("Category access failed");
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const deleteCategory = async (id) => {
    await deleteCategoryApi(id);
    getCategory();
  };

  const dargOver = (e, id) => {
    e.preventDefault(); //to prevent repeated events
    console.log("over thru", id);
  };

  const dropped = async (e, id) => {
    console.log("dropwd id", id);
    var cat_Id = id;
    //acces vedio id
    var ved_Id = e.dataTransfer.getData("cardId");
    console.log(ved_Id);
    var category = allCategory.find((i) => i.id === cat_Id);
    var video = (await accessSingleVideoApi(ved_Id)).data;
    console.log(category);
    console.log(video);
    category.videos.push(video);
    console.log(category);
    await updateCategoryApi(cat_Id, category);
    getCategory();
  };

  return (
    <div>
      <Button
        variant="black"
        className="btn w-100 addbtn border"
        onClick={handleShow}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-2 h-2 me-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        Add Category
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Category Name"
            className="form-control"
            onChange={(e) => {
              setCategoryName(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={addCategory}>
            Add Category
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
        {allCategory?.length > 0 ? (
          allCategory.map((i) => (
            <div
              className="border m-3 p-2 rounded"
              droppable
              onDragOver={(e) => dargOver(e, i.id)}
              onDrop={(e) => dropped(e, i.id)}
            >
              <div className=" d-flex justify-content-between">
                <h4>{i.categoryName}</h4>

                <Trash2 onClick={() => deleteCategory(i.id)} />
              </div>
              <marquee>
                <div className="d-flex">
                  {i.videos.length > 0 &&
                    i.videos.map((video) => (
                      <img
                        src={video.coverImg}
                        alt=""
                        style={{ width: "200px", height: "150px" }}
                        className="me-2"
                      />
                    ))}
                </div>
              </marquee>
            </div>
          ))
        ) : (
          <p>Category Empty</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Categories;
