import "../assets/stylesheets/components/_FeatureItem.scss";

interface FeatureItemProps {
  title: string;
  details: string;
  icon: React.ReactNode;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, details, icon }) => {
  return (
    <li className="feature-item">
      <h4>{title}</h4>
      <p>{details}</p>
      <div className="icon-container">{icon}</div>
    </li>
  );
};

export default FeatureItem;
