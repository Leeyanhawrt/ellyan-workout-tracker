import BackgroundVideo from "../components/BackgroundVideo";
import FeaturesList from "../components/FeatureList";
import paddling_video from "../assets/videos/ndrc-paddling.mp4";
import "../assets/stylesheets/pages/_p_home.scss";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation("", { keyPrefix: "homePage" });

  return (
    <>
      <BackgroundVideo
        video={paddling_video}
        header={t("headerText")}
        subheader={t("subheaderText")}
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
