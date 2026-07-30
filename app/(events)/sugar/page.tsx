"use client";

import Step from "@/components/event/stepCard";
import {
  HISTORY_DATA,
  CHOOSE_DATA,
  CULTURE_DATA,
  SUGAR_TASTING_DATA,
} from "@/data/sugar";

import HeaderSection from "@/components/event/header";
import CallendyBanner from "@/components/general/calendyBanner";
import TastingBanner from "@/components/event/tasting";

export default function SugarEventsPage() {
  return (
    <div>
      <HeaderSection
        title="Sugar"
        description="Explore the rich history of Sugar while tasting it"
      />
      <div className="flex flex-col gap-3 mx-2">
        <Step
          stepNumber={1}
          title="History of Coffee"
          data={HISTORY_DATA}
          duration="1 hour"
        />

        <TastingBanner
          stepNumber={4}
          tastingData={SUGAR_TASTING_DATA}
          duration="20 minutes"
        />
        <CallendyBanner type="sugar" />
      </div>
    </div>
  );
}
