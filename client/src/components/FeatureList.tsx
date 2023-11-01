import FeatureItem from "./FeatureItem";
import { GoGraph } from "react-icons/go";

interface FeatureListProps {}

const FeatureList: React.FC<FeatureListProps> = ({}) => {
  const featuresData = [
    {
      title: "Progress Graphs",
      deatils:
        "These graphs offer a dynamic representation of your fitness journey, and they can be displayed across various timelines, including weekly, monthly, and yearly intervals.",
      icon: <GoGraph />,
    },
  ];

  return (
    <ul id="features-container">
      <FeatureItem />
    </ul>
  );
};

export default FeatureList;
