import "../assets/stylesheets/components/_BackgroundVideo.scss";

interface BackgroundVideoProps {
  video: string;
  muted?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  controls?: boolean;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  video,
  ...configs
}) => {
  return (
    <div id="video-container">
      <video {...configs} id="bg-video">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
