import { useContext } from "react";
import { DataContext } from "../App";
import "./SideBar.css";

const SideBar = () => {
  const [showModal, setShowModal] = useContext(DataContext);
  return (
    <div
      className={showModal ? "modal-dialog show" : "modal-dialog"}
      role="document"
    >
      <div className="sideBar">
        <div className="sideBarHeader">
          <h5>Add City</h5>
          <button
            className="btn btn-light"
            type="button"
            style={{ width: "8%" }}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
