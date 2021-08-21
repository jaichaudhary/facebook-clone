import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://wallpaperaccess.com/full/4962535.jpg"
        title="Harsh Rawat"
        profileSrc="../Images/Harsh_Rawat.jpg"
      />
      <Story
        image="https://electronicsdesk.com/wp-content/uploads/2020/04/practical-yagi-uda-antenna.jpg"
        title="Dr. Ankit Gaur"
        profileSrc="../Images/Ankit_Gaur.jpg"
      />
      <Story
        image="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        title="Pajji"
        profileSrc="../Images/Gurry.jpg"
      />
      <Story
        image="https://i.pinimg.com/736x/30/fb/0d/30fb0d66a77e4e019f518e2f4c897b5d.jpg"
        title="Dr. Kaur"
        profileSrc="../Images/Simar.jpg"
      />
      <Story
        image="https://swall.teahub.io/photos/small/60-607062_bikes-travel-hills-fog-4k-ultra-hd-mobile.jpg"
        title="Akash Katwal"
        profileSrc="../Images/Akash.jpg"
      />
    </div>
  );
}

export default StoryReel;
