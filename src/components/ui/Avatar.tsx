type AvatarProps = {
  initials: string;
  variant?: "olive" | "gold" | "ink";
  size?: "sm" | "md";
};

const variantStyles = {
  olive: "bg-primary text-background",
  gold: "bg-accent text-primary",
  ink: "bg-foreground text-background",
};

const sizeStyles = {
  sm: "w-8 h-8 text-[11px]",
  md: "w-10 h-10 text-xs",
};

export default function Avatar({
  initials,
  variant = "olive",
  size = "md",
}: AvatarProps) {
  return (
    <div
      className={`${sizeStyles[size]} ${variantStyles[variant]} rounded-full flex items-center justify-center font-medium`}
    >
      {initials}
    </div>
  );
}