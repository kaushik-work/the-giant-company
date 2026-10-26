/** @type {import("next").NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/projects/moonlight-ai", destination: "/moonlight", permanent: true }];
  },
  async rewrites() {
    // Markdown copy of every blog post at /blog/<slug>.md, for AI tools.
    return [{ source: "/blog/:slug.md", destination: "/md/blog/:slug" }];
  },
};
export default nextConfig;
