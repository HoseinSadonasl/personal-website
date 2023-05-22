import "./skill.css";

const Skill = (props) => {
  const renderSkills = (skills) => {
    return skills?.map((skillGroup) => {
      return skillGroup?.map((skill) => {
        return (
          <div className="skill-detail">
            <a className="skill">{skill.name}</a>
            <a className="detail">{skill.description}</a>
          </div>
        );
      });
    });
  };

  return (
    <div className="container">
      <div className="skill-name">
        <img src={props.logo} />
        <h3 className="skill-platform">{props.platform}</h3>
      </div>
      {renderSkills(props.skills)}
    </div>
  );
};

export default Skill;
