import { useState } from "react";

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
  const [testimonialImage, setTestimonialImage] = useState<string>(" ");

  const importTestimonialImage = async () => {
    try {
      const module = await import(profile_image_path);
      setTestimonialImage(module.default);
    } catch (err) {
      console.error(err);
    }
  };

  importTestimonialImage();

  return (
    <>
      <div className="testimonial-image">
        <img
          src={testimonialImage}
          alt={`Testimonial ${first_name} ${last_name}`}
        />
      </div>
      // {first_name}
      // {last_name}
      // {title}
      // {review_description}
      // {profile_image_path}
      <div className="testimonial-text"></div>
    </>
  );
};

export default TestimonialItem;
