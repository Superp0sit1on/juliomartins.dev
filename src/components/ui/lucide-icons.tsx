import { icons, LucideProps } from "lucide-react";

export interface LucideIconProps extends LucideProps {
  name: keyof typeof icons;
  size: number;
}

const LucideIcon = ({ name, size, ...props }: LucideIconProps) => {
  const LucideIcon = icons[name];

  return <LucideIcon width={size} height={size} {...props} />;
};

export default LucideIcon;
