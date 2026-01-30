import { siteConfig } from "@/content/site";

export const analyticsEnabled = false;

export function Analytics() {
  if (!analyticsEnabled) {
    return null;
  }

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: siteConfig.analytics.placeholder
      }}
    />
  );
}
