import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { COFFEE_TASTING_DATA } from "@/data/coffee";
import { useEffect, useState } from "react";
import { GoDot } from "react-icons/go";

const FLAVOR_DATA = [
  { emoji: "🍫", name: "Chocolate" },
  { emoji: "🍓", name: "Berry" },
  { emoji: "🌰", name: "Nutty" },
  { emoji: "🌸", name: "Floral" },
  { emoji: "🍊", name: "Citrus" },
  { emoji: "🍯", name: "Caramel" },
  { emoji: "🌿", name: "Herbal" },
  { emoji: "🍷", name: "Winey" },
];

interface TastingBannerProps {
  stepNumber: number;
  duration?: string;
  tastingTitle?: string;
  tastingData: { name: string; notes: string }[];
}

const TastingBanner = ({
  stepNumber = 4,
  duration = "30 minutes",
  tastingTitle = "Different Varieties to Taste",
  tastingData = COFFEE_TASTING_DATA,
}: TastingBannerProps) => {
  const [wheelSize, setWheelSize] = useState(280);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 400) {
        setWheelSize(240);
      } else if (width < 640) {
        setWheelSize(280);
      } else {
        setWheelSize(320);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const totalItems = FLAVOR_DATA.length;
  const radius = wheelSize * 0.4;
  const center = wheelSize / 2;

  return (
    <Card className={`border-blood-dark border bg-white/50 `}>
      <CardHeader className="border-b-2 pb-2 border-gray-500/40">
        <CardTitle className="text-lg font-bold">
          Step {stepNumber}: Tasting Session
        </CardTitle>
        {duration && <p className="text-sm text-black">Duration: {duration}</p>}
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Flavor Wheel */}
        <div>
          <p className="font-semibold text-black mb-3">Flavor Map</p>
          <div
            className="relative mx-auto"
            style={{
              width: `${wheelSize}px`,
              height: `${wheelSize}px`,
            }}
          >
            {FLAVOR_DATA.map((item, index) => {
              const angle = (index / totalItems) * 360 - 90;
              const radian = (angle * Math.PI) / 180;
              const x = center + radius * Math.cos(radian);
              const y = center + radius * Math.sin(radian);

              return (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                  }}
                >
                  <Badge
                    variant="outline"
                    className="border-blood-dark bg-gray-100/30 hover:bg-gray-100/50 transition-colors whitespace-nowrap  sm:text-xs p-2 py-6 sm:px-3"
                  >
                    <span className="text-4xl sm:text-lg mr-0.5 sm:mr-1">
                      {item.emoji}
                    </span>
                    <span className="hidden xs:inline">{item.name}</span>
                  </Badge>
                </div>
              );
            })}
            {/* Center circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-16 sm:h-16 rounded-full border-2 border-blood-dark bg-nigga-brown flex items-center justify-center">
              <span className="text-lg sm:text-xs font-bold text-black text-center leading-tight">
                Flavors
              </span>
            </div>
          </div>
        </div>

        {/* 6 Coffee Tastings */}
        <div>
          <p className="font-semibold text-sm text-black mb-3">
            {tastingData.length} {tastingTitle}
          </p>
          <div className="space-y-2">
            {tastingData.map((item, index) => (
              <div key={index} className={`flex items-center gap-3 `}>
                <GoDot className="text-blood-dark" size={12} />
                <span className="font-semibold text-sm min-w-25">
                  {item.name}
                </span>

                <span className="text-sm text-gray-700">{item.notes}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TastingBanner;
