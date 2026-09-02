"use client";

import Step from "@/components/event/steps/generalStep/stepCard";
import { HISTORY_DATA, CULTURE_DATA, CACAO_TASTING_DATA } from "@/data/cacao";
import HeaderSection from "@/components/event/header";
import TastingBanner from "@/components/event/tasting";
import MeetStep from "@/components/event/steps/meet";
import DiscussStep from "@/components/event/steps/discuss";
import EventDetailsBanner from "@/components/general/eventdetailsbutton/EventDetails";

export default function CacaoEventsPage() {
  return (
    <div>
      <HeaderSection
        title="Cacao"
        description="From Aztecs to your cup history and tasting"
      />
      <div className="flex flex-col gap-3 mx-2">
        <MeetStep />
        <MeetStep stepNumber={2} title="The Cacao Tree" duration="5 minutes" />
        <Step
          stepNumber={3}
          title="History of Cacao"
          data={HISTORY_DATA}
          duration="30 minutes"
        />

        <Step
          stepNumber={4}
          title="Different Cultures Preparation"
          data={CULTURE_DATA}
          duration="30 minutes"
        />

        <TastingBanner stepNumber={5} tastingData={CACAO_TASTING_DATA} />
        <DiscussStep stepNumber={6} />
        <EventDetailsBanner />
      </div>
    </div>
  );
}
