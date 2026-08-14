"use client";

import Step from "@/components/event/steps/generalStep/stepCard";
import { HISTORY_DATA, SUGAR_TASTING_DATA, CULTURE_DATA } from "@/data/sugar";

import HeaderSection from "@/components/event/header";
import CallendyBanner from "@/components/general/calendyBanner";
import TastingBanner from "@/components/event/tasting";
import MeetStep from "@/components/event/steps/meet";

export default function SugarEventsPage() {
  return (
    <div>
      <HeaderSection
        title="Sugar"
        description="Explore the rich history of Sugar while tasting it"
      />
      <div className="flex flex-col gap-3 mx-2">
        <MeetStep />
        <MeetStep
          stepNumber={2}
          title="Why We Love Sugar?"
          duration="10 minutes"
        />
        <Step
          stepNumber={3}
          title="History of Sugar"
          data={HISTORY_DATA}
          duration="1 hour"
        />
        <Step
          stepNumber={4}
          title="Different Cultures Consumption"
          data={CULTURE_DATA}
          duration="20 minutes"
        />

        <TastingBanner
          stepNumber={5}
          tastingData={SUGAR_TASTING_DATA}
          duration="10 minutes"
        />
        <CallendyBanner type="sugar" />
      </div>
    </div>
  );
}
