import BackgroundVideo from "../components/BackgroundVideo";
import paddling_video from "../assets/videos/ndrc-paddling.mp4";

const HomePage = () => {
  return (
    <section>
      <BackgroundVideo video={paddling_video} muted autoPlay loop />
    </section>
  );
};

export default HomePage;
