import CallendyButton from "@/components/services/calendy";
import { Card, CardContent } from "@/components/ui/card";

interface CallendyBannerProps {
  type: "coffee" | "sugar";
  title?: string;
  description?: string;
  className?: string;
}

const CallendyBanner = ({
  type,
  title = "Wanna Join For Free?",
  description = "Attendence to our events is free, but you need to book your spot in advance. unfortunately we don't accept walk-ins.",
  className = "",
}: CallendyBannerProps) => {
  return (
    <Card className={`border-2 border-blood-dark bg-white/30 ${className}`}>
      <CardContent className="p-6 text-center">
        <h3 className="font-bold text-2xl text-black mb-3">{title}</h3>
        <p className="text-sm text-black mb-4">{description}</p>
        <CallendyButton type={type} />
      </CardContent>
    </Card>
  );
};

export default CallendyBanner;
