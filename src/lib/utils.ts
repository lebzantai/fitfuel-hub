import clsx from "clsx";

export function cn(...inputs: Array<string | undefined | null | false>) {
  return clsx(inputs);
}

export function generateWhatsAppLink(message: string, phone: string) {
  const trimmed = phone.replace(/\s+/g, "");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${trimmed.replace(/\+/g, "")}?text=${encoded}`;
}
