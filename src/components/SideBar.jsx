import { useContext } from "react";
import { DataContext } from "../App";
import "./MiddlePart.css";

const SideBar = () => {
  const [showModal, setShowModal] = useContext(DataContext);
  return (
    <div
      className={showModal ? "modal-dialog show" : "modal-dialog"}
      role="document"
    >
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => {}}
          >
            <span aria-hidden="true">X</span>
          </button>
          <h4 className="modal-title" id="myModalLabel">
            Right Sidebar
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
