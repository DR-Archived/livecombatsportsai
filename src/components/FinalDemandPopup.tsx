"use client";

import React, { useEffect, useState } from "react";
import { AlertTriangle, Clock, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const INVOICE_DATE = new Date("2026-06-11");

function getDaysUnpaid(): number {
  const today = new Date();
  const diffTime = today.getTime() - INVOICE_DATE.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export function FinalDemandPopup() {
  const [daysUnpaid, setDaysUnpaid] = useState(0);

  useEffect(() => {
    setDaysUnpaid(getDaysUnpaid());
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-labelledby="final-demand-title"
      >
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed inset-0 w-full h-full max-w-full max-h-full bg-bg-primary border-none rounded-none shadow-2xl flex flex-col"
        >
          {/* Header - fixed at top */}
          <div className="flex-shrink-0 p-4 md:p-6 border-b border-white/10 sticky top-0 bg-bg-primary/95 backdrop-blur-sm z-10">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h1 id="final-demand-title" className="text-lg md:text-xl font-extrabold text-white truncate">
                  FINAL LETTER OF DEMAND
                </h1>
                <p className="mt-0.5 text-xs text-text-muted">
                  Open Correspondence &mdash; Digital Response
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-3 rounded-xl bg-red-500/20 border border-red-500/40"
            >
              <div className="flex items-center gap-2 flex-wrap">
                <Clock className="h-4 w-4 text-red-400 flex-shrink-0" />
                <div>
                  <p className="text-xs text-text-muted">INVOICE UNPAID FOR</p>
                  <p className="text-2xl md:text-3xl font-extrabold text-red-400 tracking-tight">
                    {daysUnpaid} DAYS
                  </p>
                </div>
                <span className="ml-auto px-2 py-0.5 text-xs font-bold text-red-300 bg-red-500/30 border border-red-500/40 rounded-full uppercase tracking-wider">
                  Overdue
                </span>
              </div>
            </motion.div>
          </div>

          {/* Scrollable content area */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-5">
            <div className="space-y-3 text-sm leading-7 text-text-secondary border-t border-white/10 pt-4">
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <strong className="text-white">To:</strong> Livecombatsports Pty Ltd, Adam Wilcock, Caley Reece
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                <strong className="text-white">By email/SMS:</strong> Adam Wilcock adam@livecombatsports.com.au and any other known contact addresses
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <strong className="text-white">From:</strong> Digital Response
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
                <strong className="text-white">Subject:</strong> Final demand for payment before QCAT minor debt application
              </motion.p>

              <hr className="border-white/10 my-2" />

              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                Dear Adam, Caley and Livecombatsports Pty Ltd,
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
                This is my final request for payment before I file a QCAT minor debt application against Livecombatsports Pty Ltd, Adam Wilcock and Caley Reece.
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                I am giving you one final opportunity to resolve this without tribunal proceedings. If payment is not received by 5:00 pm AEST on Friday, 12th June 2026, I intend to lodge a QCAT application without further notice. I will also seek recovery of the QCAT application fee I am about to incur, currently expected to be $158, together with any other recoverable filing, service, search, interest or allowable costs.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="space-y-3">
                <h2 className="text-base font-bold text-white">Amount demanded</h2>
                <p>I require payment of the outstanding invoices for IT support, Microsoft 365 administration, cybersecurity advisory work, email migration, DNS/redirects and handover work performed for Live Combat Sports.</p>
                <p>The amount demanded is:</p>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[300px] border-collapse border border-white/10">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-2 border-r border-white/10">Item</th>
                        <th className="text-left p-2 border-r border-white/10">Description</th>
                        <th className="text-left p-2">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/10">
                        <td className="p-2 border-r border-white/10">Invoice 1139</td>
                        <td className="p-2 border-r border-white/10">Cybersecurity services, Microsoft 365/security clarification and advisory work</td>
                        <td className="p-2">$1,188.00</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-2 border-r border-white/10">Invoice 1141</td>
                        <td className="p-2 border-r border-white/10">Email migration to Webcentral, links/redirects relocation and DNS migration</td>
                        <td className="p-2">$550.00</td>
                      </tr>
                      <tr className="font-bold">
                        <td className="p-2 border-r border-white/10">Total demanded</td>
                        <td className="p-2 border-r border-white/10"></td>
                        <td className="p-2 text-primary">$1,738.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-xs">
                  In the alternative, if you dispute the invoice reconciliation above, I will rely on the SMS evidence where the two invoice screenshots were expressly described as $990 + $708.40 = $1,698.40, and will claim at least that amount as an admitted or SMS-referenced outstanding amount.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="space-y-3">
                <h2 className="text-base font-bold text-white">Payment details</h2>
                <p>Please pay by bank transfer:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li><strong>Account name:</strong> Digital Response</li>
                  <li><strong>Bank:</strong> AMP</li>
                  <li><strong>BSB:</strong> 939200</li>
                  <li><strong>Account number:</strong> 512460058</li>
                  <li><strong>Reference:</strong> LCS</li>
                </ul>
                <p className="text-xs">Please send remittance advice immediately after payment.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="space-y-3">
                <h2 className="text-base font-bold text-white">Basis of legal claim</h2>
                <p>My claim is for a liquidated debt arising from services requested, performed, invoiced and not paid. The claim will be pleaded as:</p>
                <div className="space-y-2 ml-4 text-sm">
                  <p><strong>Debt / unpaid invoices:</strong> Livecombatsports Pty Ltd, Adam Wilcock and/or Caley Reece requested and received IT support, Microsoft 365 administration, cybersecurity advisory services, email migration support, DNS/redirect work, troubleshooting, handover and remote assistance.</p>
                  <p><strong>Contract or agreement by conduct:</strong> The services were requested through SMS, WhatsApp, email and telephone/Zoom support channels over an extended commercial relationship. Adam Wilcock expressly requested assistance and stated that he would pay for my time.</p>
                  <p><strong>Quantum meruit / reasonable value of services, in the alternative:</strong> If you deny a formal contract, I will say the work was requested, performed and accepted, and that it would be unjust for you to retain the benefit of that work without paying a reasonable amount.</p>
                  <p><strong>Acknowledgement and payment promises:</strong> The evidence includes express statements that payment would be made, including requests for bank details and statements that the outstanding amount would be paid.</p>
                  <p><strong>Completion and handover:</strong> The evidence shows the work was performed, documented and handed over, including the email migration/handover pathway to Webcentral, Office 365 mailbox guidance, PST/archive guidance, remote support and follow-up.</p>
                  <p><strong>Failure to pay after demand:</strong> Payment has remained outstanding despite invoices, SMS payment requests, email follow-ups, settlement proposals and final handover correspondence.</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="space-y-3">
                <h2 className="text-base font-bold text-white">Evidence for QCAT application</h2>
                <p>If I am forced to lodge, I intend to attach and rely on the following evidence already preserved in the evidence pack:</p>
                <div className="space-y-3 ml-4 text-sm">
                  <div>
                    <h3 className="font-semibold text-white">Invoices</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Invoice 1139 - CyberSecurity Services - $1,188.00 including GST.</li>
                      <li>Invoice 1141 - Email migration / DNS / redirects relocation - $550.00 including GST.</li>
                      <li>SMS invoice screenshot reference stating $990 + $708.40 = $1,698.40.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">SMS evidence</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>6 Oct 2025: Adam Wilcock requested I look over the report, respond to Caley and said, "I'll happily pay for your time mate".</li>
                      <li>5 Dec 2025: Adam Wilcock asked, "Which bank details please and I'll pay this outstanding now".</li>
                      <li>14 May 2026: I stated no further work until invoices paid; substantial work already done.</li>
                      <li>19 May 2026: Sent two-invoice total by SMS, offered 50% that day, balance after old emails help.</li>
                      <li>19 May 2026: Adam Wilcock replied he'd be home next morning to finalise email issue and "Then settle this whole matter".</li>
                      <li>22 May 2026 onward: further support continued despite payment dispute.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">Email evidence</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>8 June 2026: "Migration Update & Outstanding Invoice - Final Follow-Up" sent to Adam Wilcock.</li>
                      <li>8 June 2026: Final handover to Webcentral identifying domain, mailbox and migration path.</li>
                      <li>Webcentral ticket evidence, including ticket WCG-WZD-725-19415.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">Work performed and chronology</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Microsoft 365 and tenant explanation work.</li>
                      <li>Cybersecurity clarification/reporting work for Adam and Caley.</li>
                      <li>Google Play Store / app status explanations.</li>
                      <li>Email migration, DNS/redirects and Webcentral transition work.</li>
                      <li>PST/archive guidance and mailbox diagnostic instructions.</li>
                      <li>Zoom/telephone remote support on 26 May 2026, with call-log evidence showing connected calls.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">Consolidated evidence files</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Chronologies: SMS, Email, Call Logs, Abuse Log</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">Abusive, inflammatory and threatening language evidence</h3>
                    <p className="mt-2">I do not want this dispute to become personal. However, if QCAT proceedings are required, I will rely on the communications history to explain why I stopped performing further unfunded work and why I required payment before continuing.</p>
                    <p className="mt-2">Examples that will form part of the application include:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>6 Oct 2025: Adam Wilcock stated not having answers made him look like "a fucking idiot".</li>
                      <li>13 May 2026: Adam Wilcock wrote: "Why the fuck is digital response in Caley's phone?"</li>
                      <li>14 May 2026: After I objected, Adam Wilcock wrote: "Unless you start showing some [respect], then you most definitely will see me again, and very soon."</li>
                      <li>14 May 2026: Adam Wilcock alleged I had been "far from professional", had not shown Caley respect, and said the issue made life "absolutely horrific".</li>
                      <li>19 May 2026: Adam Wilcock wrote: "Let me say this one more time and this time take my words seriously", alleged my conduct was "completely unprofessional and disgusting", and said the situation could have been avoided if I had "the courage to answer basic phone calls".</li>
                      <li>19 May 2026: Adam Wilcock refused to pay before further completion steps, despite work already performed and invoiced, saying he had "no faith" the email issue would be resolved if he paid first.</li>
                    </ul>
                    <p className="mt-2">These examples are relevant because they show the breakdown of the relationship, the pressure placed on me to keep working without payment, the reason I insisted on payment before further work, and the broader context of the non-payment dispute.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }} className="space-y-3">
                <h2 className="text-base font-bold text-white">Final opportunity to resolve</h2>
                <p>I remain willing to resolve this commercially without QCAT if payment is made by the deadline above.</p>
                <p>To avoid QCAT, you must do one of the following by 5:00 pm AEST on Monday, 15 June 2026:</p>
                <ol className="list-decimal list-inside space-y-1 ml-4 text-sm">
                  <li>Pay $1,738.00 in full; or</li>
                  <li>Pay $1,698.40 as the SMS-referenced amount, without admissions, in full and final settlement; or</li>
                  <li>Provide written proof of payment already made, including date, amount, account paid from, transaction receipt and remittance reference.</li>
                </ol>
                <p>If payment or proof of payment is not received by that deadline, I will file the QCAT application and rely on this letter as evidence that I made a final good-faith attempt to resolve the matter before incurring the application fee.</p>
                <p>This letter is written without waiving any rights, claims, remedies, interest, costs or evidence.</p>
                <p className="mt-6 border-t border-white/10 pt-3">
                  Regards,<br />
                  Digital Response
                </p>
              </motion.div>
            </div>
          </div>

          {/* Footer - fixed at bottom */}
          <div className="flex-shrink-0 p-4 md:p-6 border-t border-white/10 sticky bottom-0 bg-bg-primary/95 backdrop-blur-sm z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="w-full"
            >
              <a
                href="/legal/final-demand"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-[#0D0D0D] font-extrabold text-sm hover:bg-primary-glow transition-colors"
              >
                View Full Letter on Legal Page
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
