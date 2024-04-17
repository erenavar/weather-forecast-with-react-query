import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="container">
      <div className="header justify-content-between align-items-center">
        <div>Weather Forecast</div>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
};

export default Header;
