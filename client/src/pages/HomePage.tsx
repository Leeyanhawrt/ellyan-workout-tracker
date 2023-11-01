import BackgroundVideo from "../components/BackgroundVideo";
import FeaturesList from "../components/FeatureList";
import paddling_video from "../assets/videos/ndrc-paddling.mp4";
import "../assets/stylesheets/pages/_p_home.scss";

const HomePage = () => {
  let headerText = "Ellyan Workout Tracker";
  let subheaderText = "Take Workout Tracking to the Next Level";

  return (
    <>
      <BackgroundVideo
        video={paddling_video}
        header={headerText}
        subheader={subheaderText}
        muted
        autoPlay
        loop
        flipAnimation
        cta_buttons
      />
      <div>
        <h2 className="app-features">
          <span className="caveat-700 caveat u-margin-top-medium">
            Application Features
          </span>
        </h2>
      </div>
      <FeaturesList />
    </>
  );
};

export default HomePage;
