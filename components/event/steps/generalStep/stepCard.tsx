import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ListItem from "@/components/event/steps/generalStep/listItem";

interface SubStep {
  label: string;
  description: string;
}

interface StepData {
  label: string;
  description: string;
  substeps?: SubStep[]; // Optional substeps
}

interface StepProps {
  stepNumber: number;
  title: string;
  duration?: string;
  data: StepData[];
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
            <div key={index}>
              {/* Main ListItem */}
              <ListItem
                label={item.label}
                description={item.description}
                isLast={index === data.length - 1 && !item.substeps?.length}
              />

              {/* Render substeps if they exist */}
              {item.substeps && item.substeps.length > 0 && (
                <div className="ml-6 mt-1 space-y-1 border-l-2 border-gray-300 pl-4">
                  {item.substeps.map((sub, subIndex) => (
                    <ListItem
                      key={subIndex}
                      label={sub.label}
                      description={sub.description}
                      isLast={subIndex === item.substeps!.length - 1}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Step;
