import "./MiddlePart.css";
import { useContext } from "react";
import { DataContext } from "../App";

const MiddlePart = () => {
  const [showModal, setShowModal] = useContext(DataContext);

  return (
    <div className="middlePart">
      <div className="container justify-content-center">
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
          + Add City
        </button>
      </div>
    </div>
  );
};

export default MiddlePart;
