import React from "react";
import "./MemberCard.scss";
import Fade from "react-reveal/Fade";

const MemberCard = ({ member }) => {
  const { name, role, description, imgSrc, fade } = member;
  console.log(parseInt(fade));

  return (
    <Fade bottom>
      <div className="members-container__card">
        <div className="member__img">
          <img src={imgSrc} alt="" />
        </div>
        <div className="member__description">
          <div className="member__name">
            <p>{name}</p>
          </div>
          <div className="member__role">
            <p>{role}</p>
          </div>
          <div className="member__introduce">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default MemberCard;
