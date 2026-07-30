"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Socials from "@/components/general/social/Socials";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-nigga-brown flex flex-col">
      {/* Logo */}
      <div className="flex justify-center pt-8">
        <Image
          src="/long_logo.png"
          alt="Single Origin Istanbul"
          width={1000}
          height={1000}
          className="object-contain"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-start px-4">
        {/* description */}
        <p className="text-center text-black mb-6 mx-5">
          Experience the story behind everyday ingredients
        </p>

        <Socials />

        {/* Divider */}
        <div className="relative w-full max-w-md my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-blood-dark"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 border border-blood-dark bg-nigga-brown  text-blood-dark rounded-full py-1 font-semibold">
              Events
            </span>
          </div>
        </div>

        {/* Event Buttons */}
        <div className="flex flex-col items-center gap-3 w-full max-w-md px-4">
          <Button variant="event" onClick={() => router.push("/coffee")}>
            Coffee
          </Button>
          <Button variant="event" onClick={() => router.push("/sugar")}>
            Sugar
          </Button>
          <Button variant="comingsoon">Cacao</Button>
          <Button
            variant="comingsoon"
            onClick={() => console.log("Coffee event clicked")}
          >
            Beer
          </Button>
          <Button
            variant="comingsoon"
            onClick={() => console.log("Coffee event clicked")}
          >
            Rubber
          </Button>
          <Button
            variant="comingsoon"
            onClick={() => console.log("Coffee event clicked")}
          >
            Rice
          </Button>

          {/* Add more event buttons here */}
        </div>
      </div>

      {/* Footer */}
      <p className="text-center text-black text-xs py-4">
        © {new Date().getFullYear()} Single Origin Istanbul
      </p>
    </div>
  );
}
