import { Rubik_Mono_One } from "next/font/google";

const font = Rubik_Mono_One({ weight: "400", subsets: ["latin"] });

// Text lockup recreating the brand logo: THE GAINT (red) / COMPANY.
// To use the original artwork instead, save it as public/logo.png and swap this for <Image>.
export default function Logo({ size = 15 }: { size?: number }) {
  return (
    <span className={`logo-mark ${font.className}`} style={{ fontSize: size }} aria-label="The Gaint Company">
      <span className="logo-line"><span>THE</span><span className="logo-red">GAINT</span></span>
      <span className="logo-line">COMPANY</span>
    </span>
  );
}
