import Nav from "./components/navComponent/Nav";
import Intro from "./components/introComponent/Intro";
import ItemComponent from "./components/itemComponent/ItemComponent";
import "./app.css";
import Navigation from "./components/navComponent/Navigation";

const App = () => {
  return (
    <div>
      <Navigation className="nav" />
      <Intro />
      {/*<ItemComponent
        image="https://picsum.photos/200"
        name="NAME"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis"
        isLink={true}
        link="google.com"
        text="Lorem ipsum"
      /> */}
    </div>
  );
};

export default App;
