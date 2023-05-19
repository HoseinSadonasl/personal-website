import myimage from "../../images/myimage.jpg";
import "./intro.css";
import IconBtn from "./../iconBtnComponent/IconBtn";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Intro = () => {
  return (
    <div className="intro-container">
      <img className="image" src={myimage}></img>
      <div className="info-container">
        <h1 className="name">Hosein Sadonasl</h1>
        <hr />
        <h1 className="bio">Android, ReactJs Developer and Graphic Desiger</h1>
        <div className="contact-me">
          <IconBtn icon={<AiOutlineLinkedin />} text={"Linkedin"} />
          <IconBtn icon={<AiOutlineGithub />} text={"Github"} />
          <IconBtn icon={<AiOutlineMail />} text={"Mail"} />
          <IconBtn icon={<AiOutlineWhatsApp />} text={"WhatsApp"} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
