"use client";

import React, { useEffect, useState } from "react";
import { X, AlertTriangle, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const INVOICE_DATE = new Date("2026-06-11");

function getDaysUnpaid(): number {
  const today = new Date();
  const diffTime = today.getTime() - INVOICE_DATE.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export function FinalDemandPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [daysUnpaid, setDaysUnpaid] = useState(0);

  useEffect(() => {
    setDaysUnpaid(getDaysUnpaid());
    const dismissed = localStorage.getItem("finalDemandDismissed");
    if (dismissed) {
      const dismissedTime = parseInt(dismissed, 10);
      const hoursSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60);
      if (hoursSinceDismissed < 24) {
        setIsOpen(false);
      }
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("finalDemandDismissed", Date.now().toString());
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={handleDismiss}
        role="dialog"
        aria-modal="true"
        aria-labelledby="final-demand-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-bg-primary border border-primary/40 rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/5 border border-white/10 text-text-muted hover:bg-white/10 hover:text-white transition-colors"
            aria-label="Dismiss notice"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 id="final-demand-title" className="text-xl md:text-2xl font-extrabold text-white">
                  FINAL LETTER OF DEMAND
                </h1>
                <p className="mt-1 text-sm text-text-muted">
                  Open Correspondence &mdash; Digital Response
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500/40"
            >
              <div className="flex items-center gap-3 flex-wrap">
                <Clock className="h-5 w-5 text-red-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-text-muted">INVOICE UNPAID FOR</p>
                  <p className="text-3xl md:text-4xl font-extrabold text-red-400 tracking-tight">
                    {daysUnpaid} DAYS
                  </p>
                </div>
                <span className="ml-auto px-3 py-1 text-xs font-bold text-red-300 bg-red-500/30 border border-red-500/40 rounded-full uppercase tracking-wider">
                  Overdue
                </span>
              </div>
            </motion.div>

            <div className="space-y-4 text-sm leading-7 text-text-secondary border-t border-white/10 pt-6">
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <strong className="text-white">To:</strong> Livecombatsports Pty Ltd, Adam Wilcock, Caley Reece
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                <strong className="text-white">Amount Demanded:</strong> <span className="text-primary font-bold">$1,738.00</span> (Invoices 1139 & 1141)
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <strong className="text-white">Status:</strong> QCAT minor debt application will be filed if payment not received.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-xs text-text-muted">
                Payment details: Digital Response · AMP · BSB 939200 · Account 512460058 · Ref: LCS
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="/legal/final-demand"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-[#0D0D0D] font-extrabold text-sm hover:bg-primary-glow transition-colors"
              >
                View Full Letter
              </a>
              <button
                onClick={handleDismiss}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-text-secondary font-semibold text-sm hover:bg-white/10 hover:text-white transition-colors"
              >
                Dismiss for 24h
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
