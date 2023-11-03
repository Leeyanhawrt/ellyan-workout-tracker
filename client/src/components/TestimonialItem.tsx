interface TestimonialItemProps {
  first_name: string;
  last_name: string;
  title: string;
  review_description: string;
  profile_image_path: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({
  first_name,
  last_name,
  title,
  review_description,
  profile_image_path,
}) => {
  return (
    <div>
      {first_name}
      {last_name}
      {title}
      {review_description}
      {profile_image_path}
    </div>
  );
};

export default TestimonialItem;
