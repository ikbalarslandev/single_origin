import HeaderSection from "@/components/event/header";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-nigga-brown flex flex-col pt-2">
      <HeaderSection
        title="About Us"
        description="Learn more about our story and mission"
      />

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="relative w-full max-w-2xl h-96 mb-8">
          <Image
            src="/founder.jpeg"
            alt="Founder of Single Origin Istanbul"
            fill
            className="object-cover rounded-lg shadow-xl"
            priority
          />
        </div>

        {/* Quote/Story Section */}
        <div className="max-w-3xl w-full">
          <div className="relative">
            {/* Decorative quote marks */}

            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-blood-dark/20">
              <p className="text-black leading-relaxed text-base sm:text-lg italic">
                &ldquo;Hey, I&rsquo;m İkbal. I&rsquo;m the founder of this
                organisation. Everything started with simple curiosity. One day,
                I realized I can&rsquo;t consume anything without adding sugar
                to it such as desserts, drinks etc. The absence of it was
                actually significant for me, so I became curious about how life
                would be without it.
              </p>
              <p className="text-black leading-relaxed text-base sm:text-lg italic mt-4">
                I realized that sugar is a relatively new product in our lives.
                The more I dug, the more I saw the big picture. For some reason,
                the most common items consumed in our daily lives are always
                linked with colonialism and slavery.
              </p>
              <p className="text-black leading-relaxed text-base sm:text-lg italic mt-4">
                To point it out, our logo became bloody. I hope you enjoy
                stopping and actually thinking about simple daily items and the
                stories behind them.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
