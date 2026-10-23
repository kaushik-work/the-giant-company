// Brand logo (public/logo.png, cropped with transparent background). `height` is in px.
export default function Logo({ height = 34 }: { height?: number }) {
  return <img src="/logo.png" alt="The Gaint Company" height={height} style={{ height, width: "auto", display: "block" }} />;
}
