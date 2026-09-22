import type { NextConfig } from "next";

/**
 * The site is static and has no API surface, so these are the headers that
 * still matter: stop the content type being guessed, keep the referrer off
 * third parties, refuse to be framed by anyone else, and turn off the device
 * permissions nothing here asks for.
 */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
