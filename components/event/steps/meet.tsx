import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const MeetStep = () => {
  return (
    <Card className="border-blood-dark border bg-white/50">
      <CardHeader className="border-b-2 pb-2 border-gray-500/40">
        <CardTitle className="text-lg font-bold">
          Step 1: Getting to Know Each Other
        </CardTitle>
        <p className="text-sm text-black">Duration: 10 minutes</p>
      </CardHeader>
    </Card>
  );
};

export default MeetStep;
