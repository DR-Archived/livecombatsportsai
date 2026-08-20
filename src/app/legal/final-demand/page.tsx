"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";

export default function FinalDemandPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted hover:text-white mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="bg-white/[0.03] border border-white/10 rounded-xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-6 w-6 text-primary" />
            <h1 className="text-2xl md:text-3xl font-extrabold">
              Final Letter of Demand - Open Correspondence
            </h1>
          </div>

          <p className="text-sm text-text-muted mb-8">
            Date: 11 June 2026
          </p>

          <div className="prose prose-invert max-w-none space-y-6 text-sm leading-7">
            <p>
              <strong>To:</strong><br />
              Livecombatsports Pty Ltd<br />
              Adam Wilcock<br />
              Caley Reece
            </p>

            <p>
              <strong>By email/SMS:</strong> Adam Wilcock adam@livecombatsports.com.au and any other
              known contact addresses
            </p>

            <p>
              <strong>From:</strong> Digital Response
            </p>

            <p>
              <strong>Subject:</strong> Final demand for payment before QCAT minor debt application
            </p>

            <hr className="border-white/10" />

            <p>
              Dear Adam, Caley and Livecombatsports Pty Ltd,
            </p>

            <p>
              This is my final request for payment before I file a QCAT minor debt application
              against Livecombatsports Pty Ltd, Adam Wilcock and Caley Reece.
            </p>

            <p>
              I am giving you one final opportunity to resolve this without tribunal proceedings. If
              payment is not received by 5:00 pm AEST on Friday, 12th June 2026, I intend to lodge a
              QCAT application without further notice. I will also seek recovery of the QCAT
              application fee I am about to incur, currently expected to be $158, together with any
              other recoverable filing, service, search, interest or allowable costs.
            </p>

            <h2 className="text-xl font-bold">Amount demanded</h2>

            <p>
              I require payment of the outstanding invoices for IT support, Microsoft 365
              administration, cybersecurity advisory work, email migration, DNS/redirects and
              handover work performed for Live Combat Sports.
            </p>

            <p>The amount demanded is:</p>

            <table className="w-full border-collapse border border-white/10">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-3 border-r border-white/10">Item</th>
                  <th className="text-left p-3 border-r border-white/10">Description</th>
                  <th className="text-left p-3">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-3 border-r border-white/10">Invoice 1139</td>
                  <td className="p-3 border-r border-white/10">
                    Cybersecurity services, Microsoft 365/security clarification and advisory work
                  </td>
                  <td className="p-3">$1,188.00</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-3 border-r border-white/10">Invoice 1141</td>
                  <td className="p-3 border-r border-white/10">
                    Email migration to Webcentral, links/redirects relocation and DNS migration
                  </td>
                  <td className="p-3">$550.00</td>
                </tr>
                <tr className="font-bold">
                  <td className="p-3 border-r border-white/10">Total demanded</td>
                  <td className="p-3 border-r border-white/10"></td>
                  <td className="p-3">$1,738.00</td>
                </tr>
              </tbody>
            </table>

            <p>
              In the alternative, if you dispute the invoice reconciliation above, I will rely on
              the SMS evidence where the two invoice screenshots were expressly described as $990 +
              $708.40 = $1,698.40, and will claim at least that amount as an admitted or
              SMS-referenced outstanding amount.
            </p>

            <h2 className="text-xl font-bold">Payment details</h2>

            <p>Please pay by bank transfer:</p>

            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Account name:</strong> Digital Response</li>
              <li><strong>Bank:</strong> AMP</li>
              <li><strong>BSB:</strong> 939200</li>
              <li><strong>Account number:</strong> 512460058</li>
              <li><strong>Reference:</strong> LCS</li>
            </ul>

            <p className="mt-2">Please send remittance advice immediately after payment.</p>

            <h2 className="text-xl font-bold">Basis of legal claim</h2>

            <p>
              My claim is for a liquidated debt arising from services requested, performed,
              invoiced and not paid. The claim will be pleaded as:
            </p>

            <p>
              <strong>Debt / unpaid invoices:</strong> Livecombatsports Pty Ltd, Adam Wilcock
              and/or Caley Reece requested and received IT support, Microsoft 365 administration,
              cybersecurity advisory services, email migration support, DNS/redirect work,
              troubleshooting, handover and remote assistance.
            </p>

            <p>
              <strong>Contract or agreement by conduct:</strong> The services were requested through
              SMS, WhatsApp, email and telephone/Zoom support channels over an extended commercial
              relationship. Adam Wilcock expressly requested assistance and stated that he would pay
              for my time.
            </p>

            <p>
              <strong>Quantum meruit / reasonable value of services, in the alternative:</strong> If
              you deny a formal contract, I will say the work was requested, performed and accepted,
              and that it would be unjust for you to retain the benefit of that work without paying
              a reasonable amount.
            </p>

            <p>
              <strong>Acknowledgement and payment promises:</strong> The evidence includes express
              statements that payment would be made, including requests for bank details and
              statements that the outstanding amount would be paid.
            </p>

            <p>
              <strong>Completion and handover:</strong> The evidence shows the work was performed,
              documented and handed over, including the email migration/handover pathway to
              Webcentral, Office 365 mailbox guidance, PST/archive guidance, remote support and
              follow-up.
            </p>

            <p>
              <strong>Failure to pay after demand:</strong> Payment has remained outstanding despite
              invoices, SMS payment requests, email follow-ups, settlement proposals and final
              handover correspondence.
            </p>

            <h2 className="text-xl font-bold">Evidence that will be attached to the QCAT application</h2>

            <p>
              If I am forced to lodge, I intend to attach and rely on the following evidence already
              preserved in the evidence pack:
            </p>

            <h3 className="font-semibold">Invoices</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Invoice 1139 - CyberSecurity Services - $1,188.00 including GST.</li>
              <li>Invoice 1141 - Email migration / DNS / redirects relocation - $550.00 including GST.</li>
              <li>SMS invoice screenshot reference stating $990 + $708.40 = $1,698.40.</li>
            </ul>

            <h3 className="font-semibold">SMS evidence</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>6 October 2025: Adam Wilcock requested that I look over the report, respond to Caley and said, "I'll happily pay for your time mate".</li>
              <li>5 December 2025: Adam Wilcock asked, "Which bank details please and I'll pay this outstanding now".</li>
              <li>14 May 2026: I stated that no further work would be performed until invoices were paid because substantial work had already been done.</li>
              <li>19 May 2026: I sent the two-invoice total by SMS and offered to accept 50% that day, with the balance after further assistance with old emails.</li>
              <li>19 May 2026: Adam Wilcock replied that he would be home the next morning to finalise the email issue and "Then settle this whole matter".</li>
              <li>22 May 2026 onward: further support and troubleshooting continued, including assistance despite the ongoing payment dispute.</li>
            </ul>

            <h3 className="font-semibold">Email evidence</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>8 June 2026: "Migration Update & Outstanding Invoice - Final Follow-Up" sent to Adam Wilcock, recording that several emails and SMS messages had not received a response, giving a final opportunity to respond, seeking payment/closure and providing payment details.</li>
              <li>8 June 2026: final handover to Webcentral identifying the domain, mailbox and migration path from Digital Response to Webcentral.</li>
              <li>Webcentral ticket evidence, including ticket WCG-WZD-725-19415.</li>
            </ul>

            <h3 className="font-semibold">Work performed and chronology</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Microsoft 365 and tenant explanation work.</li>
              <li>Cybersecurity clarification/reporting work for Adam and Caley.</li>
              <li>Google Play Store / app status explanations.</li>
              <li>Email migration, DNS/redirects and Webcentral transition work.</li>
              <li>PST/archive guidance and mailbox diagnostic instructions.</li>
              <li>Zoom/telephone remote support on 26 May 2026, with call-log evidence showing connected calls.</li>
            </ul>

            <h3 className="font-semibold">Consolidated evidence files</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Chronologies: SMS, Email, Call Logs, Abuse Log</li>
            </ul>

            <h3 className="font-semibold">Abusive, inflammatory and threatening language evidence</h3>

            <p>
              I do not want this dispute to become personal. However, if QCAT proceedings are
              required, I will rely on the communications history to explain why I stopped
              performing further unfunded work and why I required payment before continuing.
            </p>

            <p>Examples that will form part of the application include:</p>

            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>6 October 2025: Adam Wilcock stated that not having answers made him look like "a fucking idiot".</li>
              <li>13 May 2026: Adam Wilcock wrote: "Why the fuck is digital response in Caley's phone?"</li>
              <li>14 May 2026: After I objected to the language, Adam Wilcock wrote: "Unless you start showing some [respect], then you most definitely will see me again, and very soon."</li>
              <li>14 May 2026: Adam Wilcock alleged that I had been "far from professional", had not shown Caley respect, and said the issue had made life "absolutely horrific".</li>
              <li>19 May 2026: Adam Wilcock wrote: "Let me say this one more time and this time take my words seriously", alleged my conduct was "completely unprofessional and disgusting", and said the situation could have been avoided if I had "the courage to answer basic phone calls".</li>
              <li>19 May 2026: Adam Wilcock refused to pay before further completion steps, despite the work already performed and invoiced, saying he had "no faith" the email issue would be resolved if he paid first.</li>
            </ul>

            <p>
              These examples are relevant to the application because they show the breakdown of the
              relationship, the pressure placed on me to keep working without payment, the reason I
              insisted on payment before further work, and the broader context of the non-payment
              dispute.
            </p>

            <h2 className="text-xl font-bold">Final opportunity to resolve</h2>

            <p>
              I remain willing to resolve this commercially without QCAT if payment is made by the
              deadline above.
            </p>

            <p>
              To avoid QCAT, you must do one of the following by 5:00 pm AEST on Monday, 15 June
              2026:
            </p>

            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Pay $1,738.00 in full; or</li>
              <li>
                Pay $1,698.40 as the SMS-referenced amount, without admissions, in full and final
                settlement; or
              </li>
              <li>
                Provide written proof of payment already made, including date, amount, account paid
                from, transaction receipt and remittance reference.
              </li>
            </ol>

            <p>
              If payment or proof of payment is not received by that deadline, I will file the QCAT
              application and rely on this letter as evidence that I made a final good-faith attempt
              to resolve the matter before incurring the application fee.
            </p>

            <p>
              This letter is written without waiving any rights, claims, remedies, interest, costs
              or evidence.
            </p>

            <p className="mt-8">
              Regards,<br />
              Digital Response
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
