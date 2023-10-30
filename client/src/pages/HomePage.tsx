import BackgroundVideo from "../components/BackgroundVideo";
import paddling_video from "../assets/videos/ndrc-paddling.mp4";

const HomePage = () => {
  let headerText = "Ellyan Workout Tracker";
  let subheaderText = "Tracking to the Next Level";

  return (
    <section>
      <BackgroundVideo
        video={paddling_video}
        header={headerText}
        subheader={subheaderText}
        muted
        autoPlay
        loop
      />
    </section>
  );
};

export default HomePage;
