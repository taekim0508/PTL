import { Resend } from "resend";
import { contactInfo } from "@/lib/content/site";
import { parseTourRequest, tourRequestEmail } from "@/lib/tour-request";

/**
 * Where tour requests go. Until the site had this, the form congratulated the
 * family and dropped what they typed, so treat a failure here as lost custom,
 * not a failed request: the reply tells them to phone instead.
 */

/**
 * Sending address. Resend will only send as a domain it has verified, so this
 * has to stay on send.ptltreehouse.com. Replies go to the school's real inbox
 * rather than the sending subdomain, which nobody reads.
 */
const FROM = process.env.TOUR_FROM_EMAIL ?? "PTL Treehouse <tours@send.ptltreehouse.com>";
const TO = process.env.TOUR_TO_EMAIL ?? contactInfo.email;

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Malformed request." }, { status: 400 });
  }

  const { request: tour, errors } = parseTourRequest(payload);
  if (Object.keys(errors).length > 0) {
    return Response.json({ errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // A missing key is our problem, not the family's. Say so in the log and
    // give them the phone number rather than a silent success.
    console.error("[tour] RESEND_API_KEY is not set; tour request not delivered");
    return Response.json({ error: "unconfigured" }, { status: 500 });
  }

  const { subject, text, html } = tourRequestEmail(tour);

  try {
    const { data, error } = await new Resend(apiKey).emails.send({
      from: FROM,
      to: [TO],
      // The school replies to the family, not to the sending subdomain.
      replyTo: tour.email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("[tour] Resend rejected the send", error);
      return Response.json({ error: "send-failed" }, { status: 502 });
    }

    console.log("[tour] sent", data?.id);
    return Response.json({ ok: true });
  } catch (cause) {
    console.error("[tour] Unexpected failure sending tour request", cause);
    return Response.json({ error: "send-failed" }, { status: 502 });
  }
}
