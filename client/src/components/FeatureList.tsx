import FeatureItem from "./FeatureItem";
import { useTranslation } from "react-i18next";
import { GoCalendar, GoGraph, GoRepo } from "react-icons/go";
import "../assets/stylesheets/components/_FeatureList.scss";

interface FeatureListProps {}

const FeatureList: React.FC<FeatureListProps> = ({}) => {
  const { t } = useTranslation("", { keyPrefix: "components.featureList" });
  const featuresData = [
    {
      title: t("featureOneTitle"),
      details: t("featureOneDetails"),
      icon: <GoGraph />,
    },
    {
      title: t("featureTwoTitle"),
      details: t("featureTwoDetails"),
      icon: <GoCalendar />,
    },
    {
      title: t("featureThreeTitle"),
      details: t("featureThreeDetails"),
      icon: <GoRepo />,
    },
  ];

  const featureItems = featuresData.map((feature) => {
    return (
      <FeatureItem
        key={feature.title}
        title={feature.title}
        details={feature.details}
        icon={feature.icon}
      />
    );
  });

  return <ul id="features-container">{featureItems}</ul>;
};

export default FeatureList;
