import { programs } from "@/lib/content/programs";

/**
 * What a family types into the tour form. Every field except name and email
 * is optional, because the form says so on the labels and a request that asks
 * for six answers is a request nobody finishes.
 */
export type TourRequest = {
  name: string;
  email: string;
  phone: string;
  childAge: string;
  program: string;
  tourDate: string;
  message: string;
};

export type TourRequestErrors = Partial<Record<"name" | "email" | "form", string>>;

const MAX = { name: 120, email: 200, phone: 40, childAge: 60, tourDate: 40, message: 2000 };

/** Deliberately loose. Address validation belongs to the mail server. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, limit: number) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

/**
 * Parses whatever arrived over the wire into a request we are willing to put
 * in an email. The form validates in the browser too, but the browser is not
 * the only thing that can POST here.
 */
export function parseTourRequest(input: unknown): {
  request: TourRequest;
  errors: TourRequestErrors;
} {
  const raw = (input ?? {}) as Record<string, unknown>;
  const programId = clean(raw.program, 60);

  const request: TourRequest = {
    name: clean(raw.name, MAX.name),
    email: clean(raw.email, MAX.email),
    phone: clean(raw.phone, MAX.phone),
    childAge: clean(raw.childAge, MAX.childAge),
    // Only ids we publish, so the email can never quote a programme we do not run.
    program: programs.some((p) => p.id === programId) ? programId : "",
    tourDate: clean(raw.tourDate, MAX.tourDate),
    message: clean(raw.message, MAX.message),
  };

  const errors: TourRequestErrors = {};
  if (!request.name) errors.name = "Please tell us your name.";
  if (!request.email) errors.email = "Please give us an email address.";
  else if (!EMAIL.test(request.email)) errors.email = "That email address looks incomplete.";

  return { request, errors };
}

export function programName(id: string) {
  return programs.find((p) => p.id === id)?.name ?? "Not sure yet";
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/**
 * The notification the school reads. It is deliberately plain: whoever opens
 * this is usually on a phone between classes and wants the name, the number,
 * and a way to reply.
 */
export function tourRequestEmail(request: TourRequest) {
  const rows: [string, string][] = [
    ["Name", request.name],
    ["Email", request.email],
    ["Phone", request.phone || "Not given"],
    ["Child's age", request.childAge || "Not given"],
    ["Programme", programName(request.program)],
    ["Preferred date", request.tourDate || "No preference"],
  ];

  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    request.message ? `Message:\n${request.message}` : "No message.",
  ].join("\n");

  const html = `
<div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;color:#2f2b26;line-height:1.5">
  <h2 style="font-size:18px;margin:0 0 4px">New tour request</h2>
  <p style="margin:0 0 16px;color:#6b635a;font-size:14px">From the website tour form.</p>
  <table style="border-collapse:collapse;font-size:14px">
    ${rows
      .map(
        ([label, value]) =>
          `<tr><td style="padding:4px 16px 4px 0;color:#6b635a">${label}</td><td style="padding:4px 0"><strong>${escapeHtml(
            value,
          )}</strong></td></tr>`,
      )
      .join("")}
  </table>
  ${
    request.message
      ? `<p style="margin:16px 0 4px;color:#6b635a;font-size:14px">Message</p><p style="margin:0;white-space:pre-wrap;font-size:14px">${escapeHtml(
          request.message,
        )}</p>`
      : ""
  }
</div>`.trim();

  return {
    subject: `Tour request: ${request.name}`,
    text,
    html,
  };
}
