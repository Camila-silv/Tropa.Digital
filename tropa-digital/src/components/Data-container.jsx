import PropTypes from "prop-types";

export default function DataContainer({src, children}) {
  return (
    <div className="data-container">
      <header className="data-block-header">

        {children}
        

        <span className="data-block-header__icon">
          <img src="./public/Group-2275.png" alt="" />
        </span>
      </header>

      <div className="data-container-container">
        <img src={src} alt="" />
      </div>
    </div>
  );
}

DataContainer.propTypes = {
  src: PropTypes.string,
  children: PropTypes.element
}
