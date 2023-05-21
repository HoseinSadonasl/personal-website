import myimage from "../../images/myimage.jpg";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro-container">
      <img className="image" src={myimage}></img>
      <div className="info-container">
        <h1 className="name">Hosein Sadon Asl</h1>
        <h1 className="role-text">
          <b>Front-End (ReactJS), Android Developer and Graphic Designer </b>
        </h1>
        <h1 className="bio">
          I always strive to develop in my work and I always looking to know
          what is new in my field of work to improve my quality and raise my
          standards. I can deal with the team and learn and benefit from those
          who have more experience and share knowledge with my colleagues
        </h1>
      </div>
    </div>
  );
};

export default Intro;
