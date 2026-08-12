import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";
import GetDirectionsButton from "./DirectionsButton";

interface EventDetailsBannerProps {
  type: "coffee" | "sugar";
  title?: string;
  description?: string;
  className?: string;
}

const EventDetailsBanner = ({
  type,
  title = "Wanna Join For Free?",
  description = "Join us every day for a great time with amazing people!",
  className = "",
}: EventDetailsBannerProps) => {
  return (
    <Card className={`border-2 border-blood-dark bg-white/30 ${className}`}>
      <CardContent className="p-6">
        <h3 className="font-bold text-2xl text-black mb-4 text-center">
          {title}
        </h3>

        <div className="space-y-4">
          {/* Time */}
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-blood-dark shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-black">Every Day</p>
              <p className="text-sm text-black/80">8:00 PM - 9:30 PM</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blood-dark shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-black">İstiklal Mall</p>
              <p className="text-sm text-black/80">Terrace Floor</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <GetDirectionsButton />

          <Button
            variant="event"
            onClick={() => {
              window.open(
                "https://www.meetup.com/single-origin-istanbul/events/",
                "_blank",
              );
            }}
          >
            Register Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventDetailsBanner;
