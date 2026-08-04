import HeaderSection from "@/components/event/header";
import Image from "next/image";

export default function WhatWeDo() {
  return (
    <div className="min-h-screen bg-nigga-brown flex flex-col pt-2">
      <HeaderSection
        title="What We Do"
        description="Learn more about our concept"
      />

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="relative w-full max-w-2xl h-96 mb-8">
          {/* placeholder image for now */}
          <Image
            src="/founder.jpeg"
            alt="Single Origin Istanbul Event"
            fill
            className="object-cover rounded-lg shadow-xl"
            priority
          />
        </div>

        {/* Concept Card */}
        <div className="max-w-3xl w-full">
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-blood-dark/20">
            <p className="text-black leading-relaxed text-base sm:text-lg">
              First of all, we organize{" "}
              <span className="font-semibold text-blood-dark">
                social events
              </span>
              . So don&rsquo;t misunderstand it as a lesson. We describe it as
              <span className="font-semibold text-blood-dark">
                {" "}
                interactive storytelling
              </span>
              .
            </p>

            <p className="text-black leading-relaxed text-base sm:text-lg mt-4">
              We will learn and discuss everyday items together. And of course,
              we will taste the different types of them.
            </p>
          </div>

          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex-1 max-w-16 h-px bg-blood-dark/30"></div>
            <span className="text-blood-dark/60 text-sm tracking-widest">
              ✦ ✦ ✦
            </span>
            <div className="flex-1 max-w-16 h-px bg-blood-dark/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
