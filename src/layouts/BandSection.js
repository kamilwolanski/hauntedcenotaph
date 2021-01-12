import React from "react";
import MemberCard from "../components/MemberCard";
import vocalImg from "../img/vocal.jpg";
import guitarImg from "../img/guitar.jpg";
import guitarBassImg from "../img/guitar-bass.jpg";
import drummerImg from "../img/drummer.jpg";
import "./BandSection.scss";

const MEMBERS = [
  {
    name: "coffin crawler",
    role: "vocal",
    imgSrc: vocalImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium quibusdam facilis qui dicta porro, nulla dolorum necessitatibus dolor obcaecati quis repellat asperiores velit quod eum corrupti iste omnis voluptates.",
    fade: 'left'
  },
  {
    name: "golem",
    role: "guitar",
    imgSrc: guitarImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium quibusdam facilis qui dicta porro, nulla dolorum necessitatibus dolor obcaecati quis repellat asperiores velit quod eum corrupti iste omnis voluptates.",
    fade: 'right'
  },
  {
    name: "brewhammer",
    role: "guitar bass",
    imgSrc: guitarBassImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium quibusdam facilis qui dicta porro, nulla dolorum necessitatibus dolor obcaecati quis repellat asperiores velit quod eum corrupti iste omnis voluptates.",
    fade: 'left'
  },
  {
    name: "Abyssal Conqueror",
    role: "drummer",
    imgSrc: drummerImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium quibusdam facilis qui dicta porro, nulla dolorum necessitatibus dolor obcaecati quis repellat asperiores velit quod eum corrupti iste omnis voluptates.",
    fade: 'right'
  },
];

const BandSection = () => {
  return (
    <>
      <div className="overlay"></div>

      <section className="section-padding">
        <div className="wrapper">
          <div className="members__container margin-top">
            <div className="heading-container subpages-heading">
              <h2 className="section-heading">band</h2>
            </div>
            <div className="members-box">
              {MEMBERS.map((member, idx) => (
                <MemberCard key={idx} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BandSection;
