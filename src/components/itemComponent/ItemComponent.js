import React from "react";
const ItemComponent = (props) => {
  const textOrLink = (props) => {
    if (props.isLink) {
      return <a href={props.link}>{props.text}</a>;
    } else {
      return <a>{props.text}</a>;
    }
  };

  return (
    <div className="item-container">
      <div className="image-container">
        <img className="image-item" src={props.image}></img>
      </div>
      {/* <div className="description-container">
        <h2>{props.name}</h2>
        <h2>{props.description}</h2>
      </div> */}
      {/* {textOrLink(
          (isLink = props.isLink),
          (text = props.text),
          (link = props.link)
        )} */}
    </div>
  );
};
export default ItemComponent;
