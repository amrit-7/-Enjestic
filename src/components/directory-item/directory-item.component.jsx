import "./directory-item.styles.scss";
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
      <div className="directory-body">
        <h2>{title}</h2>
        <p> Shop Now </p>
      </div>
    </div>
  );
};
export default Directory;
