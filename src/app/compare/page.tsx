"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Circle, AlertTriangle, MinusCircle, TrendingUp, TrendingDown, ExternalLink, Shield, Zap, Globe, Smartphone, Search, Code, Server, Database, Users, Eye, Lock, BarChart3, GitBranch, Layers, Crown } from "lucide-react";
import { motion } from "framer-motion";

const auditData = {
  metrics: [
    { id: 1, name: "HTTPS / TLS", old: 9, new: 10, winner: "new", category: "Hosting & Infrastructure" },
    { id: 2, name: "HTTP→HTTPS enforcement", old: 8, new: 10, winner: "new", category: "Hosting & Infrastructure", note: "*" },
    { id: 3, name: "Modern hosting architecture", old: 5, new: 10, winner: "new", category: "Hosting & Infrastructure" },
    { id: 4, name: "CDN / edge delivery", old: 5, new: 10, winner: "new", category: "Hosting & Infrastructure" },
    { id: 5, name: "Deployment / CI-CD potential", old: 5, new: 10, winner: "new", category: "Hosting & Infrastructure" },
    { id: 6, name: "Horizontal scalability", old: 5, new: 9, winner: "new", category: "Hosting & Infrastructure" },
    { id: 7, name: "Origin exposure", old: 4, new: 9, winner: "new", category: "Hosting & Infrastructure" },
    { id: 8, name: "Caching architecture", old: 5, new: 9, winner: "new", category: "Hosting & Infrastructure" },
    { id: 9, name: "Static asset optimisation", old: 5, new: 9, winner: "new", category: "Hosting & Infrastructure" },
    { id: 10, name: "Image optimisation", old: 5, new: 9, winner: "new", category: "Hosting & Infrastructure" },
    { id: 11, name: "JavaScript architecture", old: 5, new: 9, winner: "new", category: "Code Architecture", note: "*" },
    { id: 12, name: "CSS architecture", old: 5, new: 9, winner: "new", category: "Code Architecture", note: "*" },
    { id: 13, name: "Component architecture", old: 4, new: 9, winner: "new", category: "Code Architecture", note: "*" },
    { id: 14, name: "Code maintainability", old: 4, new: 9, winner: "new", category: "Code Architecture", note: "*" },
    { id: 15, name: "Type safety potential", old: 4, new: 9, winner: "new", category: "Code Architecture", note: "*" },
    { id: 16, name: "API architecture", old: 5, new: 8, winner: "new", category: "Code Architecture", note: "*" },
    { id: 17, name: "Authentication UX", old: 6, new: 8, winner: "new", category: "Auth & Identity" },
    { id: 18, name: "Account architecture", old: 5, new: 8, winner: "new", category: "Auth & Identity" },
    { id: 19, name: "Payment architecture", old: 7, new: 7, winner: "tie", category: "Commerce", note: "*" },
    { id: 20, name: "PPV integration", old: 9, new: 7, winner: "old", category: "Streaming", note: "*" },
    { id: 21, name: "Video delivery maturity", old: 9, new: 7, winner: "old", category: "Streaming", note: "*" },
    { id: 22, name: "VOD architecture", old: 9, new: 7, winner: "old", category: "Streaming", note: "*" },
    { id: 23, name: "Live-event infrastructure", old: 9, new: 7, winner: "old", category: "Streaming", note: "*" },
    { id: 24, name: "Mobile responsiveness", old: 5, new: 9, winner: "new", category: "Mobile" },
    { id: 25, name: "Mobile navigation", old: 5, new: 9, winner: "new", category: "Mobile" },
    { id: 26, name: "Mobile conversion funnel", old: 5, new: 9, winner: "new", category: "Mobile" },
    { id: 27, name: "Information architecture", old: 6, new: 9, winner: "new", category: "UX & IA" },
    { id: 28, name: "Semantic HTML", old: 5, new: 8, winner: "new", category: "UX & IA", note: "*" },
    { id: 29, name: "Accessibility", old: 5, new: 8, winner: "new", category: "UX & IA", note: "*" },
    { id: 30, name: "Keyboard accessibility", old: 5, new: 8, winner: "new", category: "UX & IA", note: "*" },
    { id: 31, name: "SEO architecture", old: 6, new: 9, winner: "new", category: "SEO" },
    { id: 32, name: "Metadata / social sharing", old: 5, new: 9, winner: "new", category: "SEO" },
    { id: 33, name: "Structured data", old: 4, new: 8, winner: "new", category: "SEO", note: "*" },
    { id: 34, name: "Canonical URL strategy", old: 5, new: 8, winner: "new", category: "SEO", note: "*" },
    { id: 35, name: "Sitemap / robots architecture", old: 5, new: 9, winner: "new", category: "SEO", note: "*" },
    { id: 36, name: "Content freshness", old: 7, new: 9, winner: "new", category: "SEO" },
    { id: 37, name: "Security headers", old: 5, new: 8, winner: "new", category: "Security", note: "*" },
    { id: 38, name: "CSP potential", old: 5, new: 8, winner: "new", category: "Security", note: "*" },
    { id: 39, name: "XSS defence", old: 5, new: 8, winner: "new", category: "Security", note: "*" },
    { id: 40, name: "Clickjacking protection", old: 5, new: 8, winner: "new", category: "Security", note: "*" },
    { id: 41, name: "Dependency/security management", old: 4, new: 9, winner: "new", category: "Security", note: "*" },
    { id: 42, name: "Observability / monitoring", old: 5, new: 9, winner: "new", category: "Observability", note: "*" },
    { id: 43, name: "Error handling", old: 5, new: 8, winner: "new", category: "Observability" },
    { id: 44, name: "Disaster recovery potential", old: 5, new: 8, winner: "new", category: "Observability" },
    { id: 45, name: "Performance potential", old: 5, new: 9, winner: "new", category: "Performance" },
    { id: 46, name: "Core Web Vitals potential", old: 5, new: 9, winner: "new", category: "Performance" },
    { id: 47, name: "Progressive enhancement", old: 5, new: 8, winner: "new", category: "Performance" },
    { id: 48, name: "Modern web standards", old: 5, new: 9, winner: "new", category: "Performance" },
    { id: 49, name: "Developer velocity", old: 4, new: 10, winner: "new", category: "Developer Experience" },
    { id: 50, name: "Long-term platform potential", old: 5, new: 9, winner: "new", category: "Developer Experience" },
  ],
  summaryScores: {
    old: {
      overall: 54,
      frontend: 52,
      ux: 55,
      architecture: 48,
      infrastructure: 55,
      security: 55,
      seo: 58,
      scalability: 50,
      streaming: 90,
      productPlatform: 62,
    },
    new: {
      overall: 88,
      frontend: 92,
      ux: 93,
      architecture: 90,
      infrastructure: 92,
      security: 82,
      seo: 88,
      scalability: 91,
      streaming: 70,
      productPlatform: 91,
    }
  },
  categories: [
    "Hosting & Infrastructure",
    "Code Architecture",
    "Auth & Identity",
    "Commerce",
    "Streaming",
    "Mobile",
    "UX & IA",
    "SEO",
    "Security",
    "Observability",
    "Performance",
    "Developer Experience"
  ]
};

function ScoreBadge({ score, winner, note }: { score: number; winner: "old" | "new" | "tie"; note?: string }) {
  const isNew = winner === "new";
  const isOld = winner === "old";
  const isTie = winner === "tie";
  
  return (
    <div className="flex items-center gap-2">
      <span className={`font-mono font-bold text-lg ${isNew ? "text-green-400" : isOld ? "text-amber-400" : "text-blue-400"}`}>
        {score}/10
      </span>
      {note && <span className="text-xs text-text-muted">*</span>}
      {isNew && <CheckCircle className="h-4 w-4 text-green-400" />}
      {isOld && <CheckCircle className="h-4 w-4 text-amber-400" />}
      {isTie && <MinusCircle className="h-4 w-4 text-blue-400" />}
    </div>
  );
}

function WinnerIcon({ winner }: { winner: "old" | "new" | "tie" }) {
  if (winner === "new") return <TrendingUp className="h-5 w-5 text-green-400" />;
  if (winner === "old") return <TrendingDown className="h-5 w-5 text-amber-400" />;
  return <MinusCircle className="h-5 w-5 text-blue-400" />;
}

export default function ComparePage() {
  const categories = auditData.categories;
  
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted hover:text-white mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center">
              <Crown className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">
                Technical Architecture Comparison
              </h1>
              <p className="mt-2 text-lg text-text-muted max-w-2xl">
                50-point audit comparing LiveCombatSports.com.au (legacy) vs LiveCombatSports.ai (new Vercel deployment)
              </p>
              <p className="mt-3 text-sm text-text-muted">
                <span className="font-semibold">Limitation:</span> Items marked * require live browser/source verification. Scores are provisional where noted.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Overall Score Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid gap-6 md:grid-cols-2 mb-12"
        >
          {/* Old Site Card */}
          <div className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="absolute -top-3 left-6 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-text-muted uppercase tracking-wider">
              Existing Platform
            </div>
            <div className="pt-4">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl md:text-6xl font-extrabold text-amber-400">{auditData.summaryScores.old.overall}</span>
                <span className="text-text-muted">/100</span>
              </div>
              <p className="text-text-secondary mb-6">Overall Technical Score: <span className="font-bold text-amber-400">5.4 / 10</span></p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Frontend", score: auditData.summaryScores.old.frontend, icon: Globe },
                  { label: "UX", score: auditData.summaryScores.old.ux, icon: Users },
                  { label: "Architecture", score: auditData.summaryScores.old.architecture, icon: Code },
                  { label: "Infrastructure", score: auditData.summaryScores.old.infrastructure, icon: Server },
                  { label: "Security", score: auditData.summaryScores.old.security, icon: Shield },
                  { label: "SEO", score: auditData.summaryScores.old.seo, icon: Search },
                  { label: "Scalability", score: auditData.summaryScores.old.scalability, icon: TrendingUp },
                  { label: "Streaming", score: auditData.summaryScores.old.streaming, icon: Zap },
                  { label: "Product Platform", score: auditData.summaryScores.old.productPlatform, icon: Layers },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-3 bg-white/[0.02] rounded-lg border border-white/5">
                    <div className="flex items-center gap-2 text-sm">
                      <item.icon className="h-4 w-4 text-text-muted" />
                      <span className="text-text-secondary">{item.label}</span>
                    </div>
                    <span className="font-mono font-bold text-amber-400">{item.score}/100</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* New Site Card */}
          <div className="relative p-6 rounded-2xl bg-white/[0.03] border border-green-500/30">
            <div className="absolute -top-3 left-6 px-3 py-1 bg-green-500/20 border border-green-500/40 rounded-full text-xs font-semibold text-green-400 uppercase tracking-wider">
              New AI Platform
            </div>
            <div className="pt-4">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl md:text-6xl font-extrabold text-green-400">{auditData.summaryScores.new.overall}</span>
                <span className="text-text-muted">/100</span>
              </div>
              <p className="text-text-secondary mb-6">Overall Technical Score: <span className="font-bold text-green-400">8.8 / 10</span></p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Frontend", score: auditData.summaryScores.new.frontend, icon: Globe },
                  { label: "UX", score: auditData.summaryScores.new.ux, icon: Users },
                  { label: "Architecture", score: auditData.summaryScores.new.architecture, icon: Code },
                  { label: "Infrastructure", score: auditData.summaryScores.new.infrastructure, icon: Server },
                  { label: "Security", score: auditData.summaryScores.new.security, icon: Shield },
                  { label: "SEO", score: auditData.summaryScores.new.seo, icon: Search },
                  { label: "Scalability", score: auditData.summaryScores.new.scalability, icon: TrendingUp },
                  { label: "Streaming", score: auditData.summaryScores.new.streaming, icon: Zap },
                  { label: "Product Platform", score: auditData.summaryScores.new.productPlatform, icon: Layers },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-3 bg-white/[0.02] rounded-lg border border-white/5">
                    <div className="flex items-center gap-2 text-sm">
                      <item.icon className="h-4 w-4 text-text-muted" />
                      <span className="text-text-secondary">{item.label}</span>
                    </div>
                    <span className="font-mono font-bold text-green-400">{item.score}/100</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 p-6 rounded-2xl bg-primary/10 border border-primary/30"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-bold text-primary mb-2">Key Engineering Verdict</h3>
              <p className="text-text-secondary leading-7">
                <strong>Don't think of livecombatsportsai.vercel.app as a replacement website.</strong> Think of it as the new LCS application layer sitting above the existing streaming infrastructure.
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4" /> Existing LCS Strengths
                  </h4>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>Production streaming capability: <strong>9/10</strong></li>
                    <li>LIVE/VOD/PPV/WBC programming</li>
                    <li>Functioning checkout & entitlement</li>
                    <li>Proven live-event infrastructure</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" /> New AI Strengths
                  </h4>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>Modern web architecture: <strong>9–10/10</strong></li>
                    <li>Vercel edge deployment & CI/CD</li>
                    <li>Component architecture & type safety</li>
                    <li>Developer velocity: <strong>10/10</strong></li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm text-text-muted">
                Recommended: Keep existing PPV streaming backend; layer new Vercel frontend + API/BFF on top.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Detailed Metrics Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/10">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-text-muted w-8">#</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-text-muted">Technical Metric</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-text-muted w-24">Existing<br/>.com.au</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-text-muted w-24">New AI<br/>.vercel.app</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-text-muted w-20">Winner</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => {
                  const categoryMetrics = auditData.metrics.filter(m => m.category === category);
                  return (
                    <React.Fragment key={category}>
                      <tr className="bg-primary/10 border-b border-primary/20">
                        <td colSpan={5} className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
                          {category}
                        </td>
                      </tr>
                      {categoryMetrics.map((metric, idx) => (
                        <tr
                          key={metric.id}
                          className={`border-b border-white/5 hover:bg-white/[0.02] transition-colors ${idx === categoryMetrics.length - 1 ? "border-b border-white/10" : ""}`}
                        >
                          <td className="px-4 py-3 text-sm font-mono text-text-muted">{metric.id}</td>
                          <td className="px-4 py-3 text-sm text-text-secondary">
                            <span className="font-medium">{metric.name}</span>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span className={`font-mono font-bold ${metric.winner === "old" ? "text-amber-400" : "text-text-secondary"}`}>
                              {metric.old}/10
                            </span>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span className={`font-mono font-bold ${metric.winner === "new" ? "text-green-400" : "text-text-secondary"}`}>
                              {metric.new}/10
                            </span>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <WinnerIcon winner={metric.winner as "new" | "tie" | "old"} />
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-text-muted">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>New AI wins</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-amber-400" />
              <span>Existing wins</span>
            </div>
            <div className="flex items-center gap-2">
              <MinusCircle className="h-4 w-4 text-blue-400" />
              <span>Tie</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs">*</span>
              <span>Requires live verification</span>
            </div>
          </div>
        </motion.div>

        {/* Recommendation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-6 rounded-2xl bg-white/[0.03] border border-white/10"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-primary" />
            Recommended Architecture: Hybrid Approach
          </h3>
          <pre className="text-sm text-text-secondary font-mono leading-relaxed overflow-x-auto">
{`NEW LCS FRONTEND
       |
   livecombatsports.com.au
       |
   |---|---|
Marketing  Events
       |
   LCS API/BFF
       |
|------|------|
Identity Commerce Content
  |      Stripe  CMS/DB
  |--------------|
                 |
        Existing PPV Platform
                 |
           Video/CDN
              |
          Live/VOD`}
          </pre>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 p-6 rounded-2xl bg-primary/10 border border-primary/30"
        >
          <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Next Steps: Turn Provisional to Defensible
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm text-text-secondary">
            {[
              "Lighthouse Mobile + Core Web Vitals",
              "HTTP Response Headers Audit",
              "DNS + TLS Configuration Review",
              "Dependency Fingerprinting",
              "Exposed Endpoints Enumeration",
              "Robots/Sitemap Validation",
              "JS Bundle Analysis",
              "OWASP Attack Surface Scan",
              "Vercel Configuration Review",
            ].map((step, i) => (
              <li key={i} className="flex items-center gap-2 p-3 bg-white/[0.03] rounded-lg border border-white/5">
                <span className="font-mono text-primary">{i + 1}.</span>
                {step}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
