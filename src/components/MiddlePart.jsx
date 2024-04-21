import { useState } from "react";
import "./MiddlePart.css";

const MiddlePart = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="middlePart">
      <div className="container">
        <div style={{ lineHeight: "35px" }}>
          <div className="fs-1 fw-bold">
            You can find out the weather by selecting the city.
          </div>
          <div className="fs-3">Select your city and teach the weather.</div>
        </div>

        <br />

        <button
          className="btn btn-light"
          onClick={() => {
            setShowModal(!showModal);
          }}
          style={{ width: "10%" }}
        >
          + Add
        </button>
      </div>
    </div>
  );
};

export default MiddlePart;
