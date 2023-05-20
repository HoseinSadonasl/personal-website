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
        <h1 className="name">Hosein Sadon Asl</h1>
        <hr />
        <h1 className="bio">
          <span>
            <b>Front-End (ReactJS) and Android Developer, Graphic Designer </b>
          </span>
          <br />I always strive to develop in my work and I always looking to
          know what is new in my field of work to improve my quality and raise
          my standards. I can deal with the team and learn and benefit from
          those who have more experience and share knowledge with my colleagues
        </h1>
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
