import { Card, CardHeader, CardTitle } from "@/components/ui/card";

interface MeetStepProps {
  stepNumber?: number;
  title?: string;
  duration?: string;
}

const MeetStep = ({
  stepNumber = 1,
  title = "Getting to Know Each Other",
  duration = "10 minutes",
}: MeetStepProps) => {
  return (
    <Card className="border-blood-dark border bg-white/50">
      <CardHeader className="border-b-2 pb-2 border-gray-500/40">
        <CardTitle className="text-lg font-bold">
          Step {stepNumber}: {title}
        </CardTitle>
        <p className="text-sm text-black">Duration: {duration}</p>
      </CardHeader>
    </Card>
  );
};

export default MeetStep;
