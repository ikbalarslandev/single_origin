// components/GetDirectionsButton.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { MapPin, ExternalLink, Info } from "lucide-react";
import Image from "next/image";

interface GetDirectionsButtonProps {
  className?: string;
}

const GetDirectionsButton = ({ className = "" }: GetDirectionsButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        variant="event"
        onClick={() => setIsModalOpen(true)}
        className={`bg-blood-dark/40 text-black border-black ${className}`}
      >
        <MapPin className="w-4 h-4" />
        Get Directions
      </Button>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md sm:max-w-lg bg-white rounded-lg p-0 overflow-hidden">
          {/* Image */}
          <div className="relative w-full h-48 bg-gray-200">
            <Image
              src="/meetingPoint.png"
              alt="İstiklal Mall Terrace Floor - Meeting Point"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white font-bold text-xl">İstiklal Mall</h3>
              <p className="text-white/80 text-sm">Terrace Floor</p>
            </div>
          </div>

          <div className="p-6">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-black">
                Location Details
              </DialogTitle>
              <DialogDescription className="text-black/70">
                Find us at the Terrace Floor of İstiklal Mall
              </DialogDescription>
            </DialogHeader>

            {/* Description */}
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3 bg-blood-light/10 p-3 rounded-lg">
                <Info className="w-5 h-5 text-blood-dark shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-black text-sm">
                    How to find us:
                  </p>
                  <p className="text-sm text-black/70">
                    Take the elevator to the 4th floor. Once you reach there,
                    start walking left for 10 meters and you'll see our event
                    space.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-black text-sm">Address:</p>
                  <p className="text-sm text-black/70">
                    İstiklal Mall, Terrace Floor (4th Floor) <br />
                    İstiklal Caddesi Beyoğlu/İstanbul
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Link */}
            <a
              href="https://maps.app.goo.gl/Ewb246GgozigjkaA6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full flex items-center justify-center gap-2 bg-blood-dark text-white py-3 px-4 rounded-lg hover:bg-blood-dark/90 transition-colors font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Open in Google Maps
            </a>

            <p className="text-xs text-center text-black/40 mt-3">
              Click the button above to open the exact location in Google Maps
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GetDirectionsButton;
