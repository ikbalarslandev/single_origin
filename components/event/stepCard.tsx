import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ListItem from "@/components/event/listItem";

interface StepProps {
  stepNumber: number;
  title: string;
  duration?: string;
  data: { label: string; description: string }[];
}

const Step = ({ stepNumber, title, duration, data }: StepProps) => {
  return (
    <Card className="border-blood-dark border bg-white/50">
      <CardHeader className="border-b-2 pb-2 border-gray-500/40">
        <CardTitle className="text-lg font-bold ">
          Step {stepNumber}: {title}
        </CardTitle>
        {duration && <p className="text-sm text-black">Duration: {duration}</p>}
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-2">
          {data.map((item, index) => (
            <ListItem
              key={index}
              label={item.label}
              description={item.description}
              isLast={index === data.length - 1}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Step;
