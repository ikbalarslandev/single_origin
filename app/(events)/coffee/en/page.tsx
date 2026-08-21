import { Coffee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EnglishCoffeePage = () => {
  return (
    <div className="min-h-screen bg-[#a6836c]/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-[#a6836c]/20 shadow-xl bg-white/90 backdrop-blur-sm">
        <CardContent className="p-8 text-center">
          {/* Coffee Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-[#a6836c]/10">
              <Coffee className="w-12 h-12 text-[#a6836c]" strokeWidth={1.5} />
            </div>
          </div>

          {/* Coming Soon Badge */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#b21b1b] text-white text-sm font-medium mb-4">
            Coming Soon
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-[#590000] mb-2">Coffee</h1>

          {/* Description */}
          <p className="text-[#590000]/60 text-sm leading-relaxed">
            There will be videos soon to learn the history and culture of
            coffee.
          </p>

          {/* Divider */}
          <div className="w-12 h-0.5 bg-[#a6836c]/30 mx-auto my-6 rounded-full" />
        </CardContent>
      </Card>
    </div>
  );
};

export default EnglishCoffeePage;
