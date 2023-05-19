import "./iconBtn.css";

const IconBtn = (props) => {
  return (
    <div className="button">
      <div className="icon">{props.icon} </div>
      <span className="text">{props.text}</span>
    </div>
  );
};
export default IconBtn;
