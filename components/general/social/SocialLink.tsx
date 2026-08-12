import { ReactNode } from "react";
import { FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from "react-icons/fa";

type SocialType = "instagram" | "tiktok" | "youtube" | "whatsapp";

interface SocialLinkProps {
  type: SocialType;
  href?: string; // Optional - will use default if not provided
  size?: number;
  className?: string;
}

const socialConfig = {
  instagram: {
    icon: FaInstagram,
    defaultHref: "https://instagram.com/s.o.ist",
    label: "Instagram",
  },
  tiktok: {
    icon: FaTiktok,
    defaultHref: "https://tiktok.com/@s.o.ist",
    label: "TikTok",
  },
  youtube: {
    icon: FaYoutube,
    defaultHref: "https://youtube.com/@s.o.istanbul",
    label: "YouTube",
  },
  whatsapp: {
    icon: FaWhatsapp,
    defaultHref:
      "https://chat.whatsapp.com/IAr6xO2dWGm7S4pDdatse4?s=cl&p=i&ilr=2",
    label: "WhatsApp",
  },
};

export default function SocialLink({
  type,
  href,
  size = 28,
  className = "",
}: SocialLinkProps) {
  const config = socialConfig[type];
  const Icon = config.icon;
  const linkHref = href || config.defaultHref;

  return (
    <a
      href={linkHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-blood-light hover:opacity-70 transition-all duration-300 hover:scale-110 ${className}`}
      aria-label={config.label}
    >
      <Icon size={size} />
    </a>
  );
}
