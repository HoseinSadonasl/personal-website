import Nav from "./components/navComponent/Nav";
import Intro from "./components/introComponent/Intro";
import ItemComponent from "./components/itemComponent/ItemComponent";
import "./app.css";
import Navigation from "./components/navComponent/Navigation";
import simpleImg from "./images/soundcloud.png";
import IconBtn from "./components//iconBtnComponent/IconBtn";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const App = () => {
  return (
    <div>
      <Navigation className="nav" />
      <Intro />
      <div className="contact-me">
        <IconBtn icon={<AiOutlineLinkedin />} text={"Linkedin"} />
        <IconBtn icon={<AiOutlineGithub />} text={"Github"} />
        <IconBtn icon={<AiOutlineMail />} text={"Mail"} />
        <IconBtn icon={<AiOutlineWhatsApp />} text={"WhatsApp"} />
      </div>

      <ItemComponent
        image={simpleImg}
        name="NAME"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis"
        isLink={true}
        link="https://www.google.com"
        text="Lorem ipsum Link"
      />

      <ItemComponent
        image={simpleImg}
        name="NAME"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis"
        isLink={true}
        link="https://www.google.com"
        text="Lorem ipsum Link"
      />

      <ItemComponent
        image={simpleImg}
        name="NAME"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis"
        isLink={true}
        link="https://www.google.com"
        text="Lorem ipsum Link"
      />
    </div>
  );
};

export default App;
