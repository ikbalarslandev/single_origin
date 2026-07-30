"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

declare global {
  interface Window {
    Calendly: any;
  }
}

type EventType = "coffee" | "sugar";

interface CalendlyButtonProps {
  type: EventType;
  className?: string;
  children?: React.ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
  prefill?: {
    name?: string;
    email?: string;
    location?: string;
  };
}

const eventConfig = {
  coffee: {
    url: "https://calendly.com/singleoriginistanbul/coffee",
    label: "Book a Coffee Event",
  },
  sugar: {
    url: "https://calendly.com/singleoriginistanbul/sugar",
    label: "Book a Sugar Event",
  },
};

export default function CalendlyButton({
  type,
  children,
  onOpen,
  onClose,
  prefill = {},
}: CalendlyButtonProps) {
  const [isCalendlyReady, setIsCalendlyReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const config = eventConfig[type];

  // Load Calendly script when component mounts
  useEffect(() => {
    // Check if Calendly is already loaded
    if (window.Calendly) {
      setIsCalendlyReady(true);
      return;
    }

    // Load CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);

    // Load script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      setIsCalendlyReady(true);
    };
    document.body.appendChild(script);

    return () => {
      if (link.parentNode) link.parentNode.removeChild(link);
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  const handleClick = () => {
    if (!window.Calendly) {
      console.error("Calendly not loaded yet");
      return;
    }

    setIsLoading(true);
    onOpen?.();

    try {
      window.Calendly.initPopupWidget({
        url: `https://calendly.com/singleoriginistanbul/${type}?background_color=590000&text_color=ffffff&primary_color=ffffff`,
        prefill: {
          name: prefill.name || "",
          email: prefill.email || "",
          location: prefill.location || "",
        },
      });

      // Reset loading state after popup opens
      setTimeout(() => {
        setIsLoading(false);
        onClose?.();
      }, 1500);
    } catch (error) {
      console.error("Error opening Calendly:", error);
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleClick}
      disabled={!isCalendlyReady || isLoading}
      variant="event"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Loading...
        </>
      ) : (
        children || <>Book Now</>
      )}
    </Button>
  );
}
