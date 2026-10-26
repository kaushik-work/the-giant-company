// Accent colour per blog topic, used for cover art, pills and tabs.
export const clusterAccent: Record<string, string> = {
  "AI chatbots": "#ff4d4d",
  WhatsApp: "#25d366",
  "Lead generation": "#ffb020",
  "Website development": "#3b82f6",
  "No-code": "#8b5cf6",
  "AI coding": "#06b6d4",
  CRM: "#ec4899",
  "Workflow automation": "#f97316",
  "Search Console": "#14b8a6",
};
export const accentFor = (cluster: string) => clusterAccent[cluster] ?? "#ff4d4d";
