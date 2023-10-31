import BackgroundVideo from "../components/BackgroundVideo";
import paddling_video from "../assets/videos/ndrc-paddling.mp4";

const HomePage = () => {
  let headerText = "Ellyan Workout Tracker";
  let subheaderText = "Take Workout Tracking to the Next Level";

  return (
    <section>
      <BackgroundVideo
        video={paddling_video}
        header={headerText}
        subheader={subheaderText}
        muted
        autoPlay
        loop
        flipAnimation
      />
    </section>
  );
};

export default HomePage;
