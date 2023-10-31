import classnames from "classnames";

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  children?: string;
}

const Button: React.FC<ButtonProps> = ({
  primary,
  secondary,
  tertiary,
  children,
  ...events
}) => {
  return (
    <button {...events} className={classes}>
      {loading ? <GoSync className="animate-spin" /> : children}
    </button>
  );
};

export default Button;
