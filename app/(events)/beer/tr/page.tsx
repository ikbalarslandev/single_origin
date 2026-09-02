import { Card, CardContent } from "@/components/ui/card";

const TurkishCoffeePage = () => {
  return (
    <div className="min-h-screen bg-[#a6836c]/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-[#a6836c]/20 shadow-xl bg-white/90 backdrop-blur-sm">
        <CardContent className="p-8 text-center">
          {/* Coming Soon Badge */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#b21b1b] text-white text-sm font-medium mb-4">
            Yakında
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-[#590000] mb-2">Bira</h1>

          {/* Description */}
          <p className="text-[#590000]/60 text-sm leading-relaxed">
            Biranin tarihini ve kültürünü öğrenmek için yakında videolar
            yayınlanacak.
          </p>

          {/* Divider */}
          <div className="w-12 h-0.5 bg-nigga-brown/30 mx-auto my-6 rounded-full" />
        </CardContent>
      </Card>
    </div>
  );
};

export default TurkishCoffeePage;
