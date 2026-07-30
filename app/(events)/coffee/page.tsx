"use client";

import Step from "@/components/event/stepCard";
import { HISTORY_DATA, CHOOSE_DATA } from "@/data/coffee";
import HeaderSection from "@/components/event/header";
import CallendyBanner from "@/components/general/calendyBanner";

export default function CoffeeEventsPage() {
  return (
    <div>
      <HeaderSection
        title="Coffee"
        description="From Ethiopia to your cup history an tasting"
      />
      <div className="flex flex-col gap-3 mx-2">
        <Step
          stepNumber={1}
          title="History of Coffee"
          data={HISTORY_DATA}
          duration="20 minutes"
        />
        <Step
          stepNumber={2}
          title="How to Choose "
          data={CHOOSE_DATA}
          duration="20 minutes"
        />
        <CallendyBanner type="coffee" />
      </div>
    </div>
  );
}
