import {
  Code, UsersThree, GlobeHemisphereWest, FlowArrow, RocketLaunch, Robot, EnvelopeSimple, Brain,
  FileText, CreditCard, Megaphone, ChartBar, MoonStars, DeviceMobile, Boat, ChatsCircle, MapPinArea, PhoneCall,
} from "@phosphor-icons/react/dist/ssr";

// Phosphor duotone set (SF Symbols can't be licensed for web use).
type PhosphorIcon = React.ComponentType<{ size?: number; weight?: "duotone"; "aria-hidden"?: boolean | "true" }>;

const icons: Record<string, PhosphorIcon> = {
  code: Code,
  crm: UsersThree,
  globe: GlobeHemisphereWest,
  workflow: FlowArrow,
  rocket: RocketLaunch,
  bot: Robot,
  mail: EnvelopeSimple,
  brain: Brain,
  doc: FileText,
  card: CreditCard,
  megaphone: Megaphone,
  chart: ChartBar,
  moon: MoonStars,
  phone: DeviceMobile,
  ship: Boat,
  chat: ChatsCircle,
  pin: MapPinArea,
  call: PhoneCall,
};

export default function Icon({ name, size = 28 }: { name: string; size?: number }) {
  const Cmp = icons[name] ?? Code;
  return <Cmp size={size} weight="duotone" aria-hidden="true" />;
}
