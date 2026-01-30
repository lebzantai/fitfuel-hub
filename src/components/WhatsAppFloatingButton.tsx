import { siteConfig } from "@/content/site";
import { generateWhatsAppLink } from "@/lib/utils";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={generateWhatsAppLink(
        siteConfig.whatsapp.defaultMessage,
        siteConfig.whatsapp.phone
      )}
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-black shadow-lg hover:bg-emerald-400"
      aria-label={siteConfig.labels.whatsappAria}
    >
      <span className="text-lg">{siteConfig.labels.whatsappShort}</span>
    </a>
  );
}
