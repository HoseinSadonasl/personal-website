import React from "react";
import "./itemComponent.css";

const ItemComponent = (props) => {
  const textOrLink = (isLink, link, text) => {
    if (isLink) {
      return (
        <a className="link" href={link}>
          {text}
        </a>
      );
    } else {
      return <a className="link">{text}</a>;
    }
  };

  return (
    <div className="item-container">
      <img className="image-item" src={props.image}></img>
      <div className="description-container">
        <h1 className="name">{props.name}</h1>
        <h2 className="description">{props.description}</h2>
        {textOrLink(props.isLink, props.link, props.text)}
      </div>
    </div>
  );
};
export default ItemComponent;
