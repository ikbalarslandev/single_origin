interface HeaderSectionProps {
  title: string;
  description?: string;
  className?: string;
}

const HeaderSection = ({
  title,
  description,
  className = "",
}: HeaderSectionProps) => {
  return (
    <div className={`text-center mb-5 ${className}`}>
      <h1 className="text-2xl font-bold text-blood-light mt-5">{title}</h1>
      {description && <p className="text-blood-dark mt-2">{description}</p>}
    </div>
  );
};

export default HeaderSection;
