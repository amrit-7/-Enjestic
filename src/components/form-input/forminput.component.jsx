import "./forminput.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...otherProps} />
    </div>
  );
};
export default FormInput;
