"use client";

import Step from "@/components/event/steps/generalStep/stepCard";
import {
  HISTORY_DATA,
  CHOOSE_DATA,
  CULTURE_DATA,
  COFFEE_TASTING_DATA,
  ESPRESSO_DATA,
} from "@/data/coffee";
import HeaderSection from "@/components/event/header";
import TastingBanner from "@/components/event/tasting";
import MeetStep from "@/components/event/steps/meet";
import DiscussStep from "@/components/event/steps/discuss";

export default function CoffeeEventsPage() {
  return (
    <div>
      <HeaderSection
        title="Coffee"
        description="From Ethiopia to your cup history an tasting"
      />
      <div className="flex flex-col gap-3 mx-2">
        <MeetStep />
        <Step
          stepNumber={2}
          title="History of Coffee"
          data={HISTORY_DATA}
          duration="20 minutes"
        />
        <Step
          stepNumber={3}
          title="How to Choose"
          data={CHOOSE_DATA}
          duration="15 minutes"
        />
        <Step
          stepNumber={4}
          title="Different Cultures Preparation"
          data={CULTURE_DATA}
          duration="10 minutes"
        />
        <Step
          stepNumber={5}
          title="Espresso"
          data={ESPRESSO_DATA}
          duration="5 minutes"
        />
        <TastingBanner stepNumber={6} tastingData={COFFEE_TASTING_DATA} />
        <DiscussStep stepNumber={7} />
      </div>
    </div>
  );
}
