import "../../styles/Header.scss";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const Header: React.FC = () => {
  const moveToCardHandler = () => {
    window.scrollTo(0, 490);
  };
  return (
    <div className="header">
      <div className="arrow__icon" onClick={moveToCardHandler}>
        <DoubleArrowIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
