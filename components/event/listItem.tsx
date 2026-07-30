import { GoDot } from "react-icons/go";

interface ListItemProps {
  label: string;
  description: string;
  isLast?: boolean;
}

const ListItem = ({ label, description, isLast = false }: ListItemProps) => {
  return (
    <div className={`flex items-center gap-3 ${!isLast ? "pb-2" : ""}`}>
      <GoDot className="text-blood-dark" size={12} />
      <span className="font-semibold text-sm min-w-25">{label}</span>

      <span className="text-sm text-gray-700">{description}</span>
    </div>
  );
};

export default ListItem;
