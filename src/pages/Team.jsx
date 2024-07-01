import React from "react";

const Team = () => {
  return (
    <div className="team" id="team">
      <h2 className="heading center-text">Our Team</h2>
      <p className="dishes-paragraph center-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis magni
        perferendis cum illum vel, rem voluptates fugit neque facilis impedit?
      </p>
      <div className="team-container">
        <div className="team-members">
          <img src="team_member_1.png" alt="Head Chef" className="team-image" />
          <h2 className="team-title">Johnathan Tyler</h2>
          <p className="team-post">Founder & Head Chef</p>
        </div>
        <div className="team-members">
          <img src="team_member_2.png" alt="Sous Chef" className="team-image" />
          <h2 className="team-title">Wade Warren</h2>
          <p className="team-post">Sous Chef</p>
        </div>
        <div className="team-members">
          <img
            src="team_member_3.png"
            alt="Fast Food Chef"
            className="team-image"
          />
          <h2 className="team-title">John Doe</h2>
          <p className="team-post">Fast Food Chef</p>
        </div>
        <div className="team-members">
          <img
            src="team_member_4.png"
            alt="Senior Chef"
            className="team-image"
          />
          <h2 className="team-title">Alex Coal</h2>
          <p className="team-post">Senior Chef</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
