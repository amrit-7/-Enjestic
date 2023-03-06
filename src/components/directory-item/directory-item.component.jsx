import "./directory-item.styles.scss";
import { Link } from "react-router-dom";
const Directory = ({ category: { id, title, imageUrl } }) => {
  return (
    <div key={id} className="directory-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "100%",
        }}
      />
      <Link to={`/shop/${title}`} className="directory-body">
        <h2>{title}</h2>
        <p> Shop Now </p>
      </Link>
    </div>
  );
};
export default Directory;
