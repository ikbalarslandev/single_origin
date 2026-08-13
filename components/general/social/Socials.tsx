import SocialLink from "./SocialLink";

interface SocialsProps {
  size?: number;
  className?: string;
  iconClassName?: string;
}

export default function Socials({
  size = 36,
  className = "",
  iconClassName = "",
}: SocialsProps) {
  return (
    <div className={`flex justify-center gap-12 ${className}`}>
      <SocialLink type="instagram" size={size} className={iconClassName} />
      <SocialLink type="tiktok" size={size} className={iconClassName} />
      {/* <SocialLink type="youtube" size={size} className={iconClassName} /> */}
      <SocialLink type="meetup" size={size} className={iconClassName} />
      <SocialLink type="whatsapp" size={size} className={iconClassName} />
    </div>
  );
}
