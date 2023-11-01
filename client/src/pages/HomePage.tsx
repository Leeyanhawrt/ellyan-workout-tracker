import BackgroundVideo from "../components/BackgroundVideo";
import FeaturesList from "../components/FeatureList";
import paddling_video from "../assets/videos/ndrc-paddling.mp4";
import "../assets/stylesheets/pages/_p_home.scss";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation("", { keyPrefix: "pages.home" });

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
      <div className="app-features u-margin-top-medium">
        <h2>
          <span className="caveat-700 caveat ">{t("appFeatures")}</span>
        </h2>
        <p>{t("appFeatureP")}</p>
      </div>
      <FeaturesList />
    </>
  );
};

export default HomePage;
