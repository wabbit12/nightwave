"use client";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-black via-slate-950 to-slate-950 text-slate-100">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 border-b border-slate-800/80 bg-black/90 backdrop-blur-lg"
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          {/* Brand */}
          <motion.a
            href="#hero"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-500/20 ring-1 ring-sky-400/60">
              <span className="text-sm font-semibold text-sky-200">NW</span>
            </div>
            <div className="hidden leading-tight sm:block">
              <p className="text-sm font-semibold tracking-tight text-slate-50">
                Nightwave Studio
              </p>
              <p className="text-[11px] text-slate-400">
                Brand, product, and motion for ambitious teams.
              </p>
            </div>
          </motion.a>

          {/* Navigation links */}
          <div className="flex items-center gap-2 text-[11px] font-medium text-slate-300 lg:gap-3">
            <motion.a
              href="#hero"
              className="hidden rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1.5 transition hover:border-sky-400 hover:text-sky-200 sm:block"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Intro
            </motion.a>
            <motion.a
              href="#work"
              className="rounded-full border border-slate-800 bg-slate-900/40 px-3 py-1.5 transition hover:border-sky-400 hover:text-sky-200"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Work
            </motion.a>
            <motion.a
              href="#services"
              className="rounded-full border border-slate-800 bg-slate-900/40 px-3 py-1.5 transition hover:border-sky-400 hover:text-sky-200"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Services
            </motion.a>
            <motion.a
              href="#approach"
              className="hidden rounded-full border border-slate-800 bg-slate-900/40 px-3 py-1.5 transition hover:border-sky-400 hover:text-sky-200 md:block"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Approach
            </motion.a>
            <motion.a
              href="#contact"
              className="rounded-full border border-sky-400/60 bg-sky-500/10 px-3 py-1.5 text-sky-100 shadow-sm shadow-sky-500/30 transition hover:bg-sky-400/20 hover:text-white"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Book a session
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Shell */}
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-10 pt-6 sm:px-6 lg:px-8 lg:pt-10">
          {/* Main content */}
        <main className="flex-1 space-y-16 lg:space-y-20">
            {/* HERO */}
            <motion.section
              id="hero"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid gap-10 rounded-3xl border border-slate-800/80 bg-slate-950/60 p-5 shadow-[0_40px_120px_rgba(2,6,23,0.95)] backdrop-blur sm:p-7 lg:grid-cols-[1.15fr,0.85fr]"
            >
              {/* Hero text block */}
              <div className="space-y-6">
                <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-200 shadow-sm shadow-sky-500/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Design partner for night-owl product teams.
                </p>

                <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
                  Dark, cinematic web
                  <span className="block bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                    that feels like your product.
                  </span>
                </h1>

                <p className="text-pretty text-sm leading-relaxed text-slate-300 sm:text-base">
                  Nightwave is a small studio that helps SaaS, fintech, and
                  creative platforms ship dark, modern marketing sites that look
                  as sharp as their product. We handle product shots, motion, and
                  the tiny UI details that make your launch feel intentional.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    Plan a launch call
                  </motion.a>
                  <motion.button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 px-5 py-2.5 text-xs font-semibold text-slate-100 shadow-sm shadow-black/60 transition hover:border-slate-500 hover:bg-slate-900"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    View 3 case studies
                  </motion.button>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/15 text-[10px] font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-400/50">
                      ✓
                    </span>
                    <span>Strategy + design + build in one team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/15 text-[10px] font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-400/50">
                      ✓
                    </span>
                    <span>Ideal for launches and rebrands</span>
                  </div>
                </div>
              </div>

              {/* Hero “launch board” */}
              <div className="space-y-3">
                <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-slate-50">
                        Launch overview
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Conversion-focused, dark UI marketing layout
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-400/60">
                      Live
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2 text-[11px]">
                    <div className="rounded-xl bg-slate-900/80 p-2.5">
                      <p className="text-[10px] text-slate-400">Signup rate</p>
                      <p className="mt-1 text-sm font-semibold text-slate-50">
                        +38%
                      </p>
                      <div className="mt-2 h-1.5 rounded-full bg-slate-800">
                        <div className="h-1.5 w-3/4 rounded-full bg-sky-400" />
                      </div>
                    </div>
                    <div className="rounded-xl bg-slate-900/80 p-2.5">
                      <p className="text-[10px] text-slate-400">Time on page</p>
                      <p className="mt-1 text-sm font-semibold text-slate-50">
                        3:27
                      </p>
                      <div className="mt-2 h-1.5 rounded-full bg-slate-800">
                        <div className="h-1.5 w-2/3 rounded-full bg-violet-400" />
                      </div>
                    </div>
                    <div className="rounded-xl bg-slate-900/80 p-2.5">
                      <p className="text-[10px] text-slate-400">Launch sprint</p>
                      <p className="mt-1 text-sm font-semibold text-slate-50">
                        3 weeks
                      </p>
                      <div className="mt-2 flex gap-1">
                        <span className="h-1.5 flex-1 rounded-full bg-emerald-400/80" />
                        <span className="h-1.5 flex-1 rounded-full bg-emerald-400/40" />
                        <span className="h-1.5 flex-1 rounded-full bg-slate-700" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-[11px]">
                  <p className="text-xs font-semibold text-slate-50">
                    Recent launches
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-xl bg-slate-900/70 px-3 py-2">
                      <div>
                        <p className="font-medium text-slate-50">
                          LumenPay · fintech
                        </p>
                        <p className="text-[10px] text-slate-400">
                          Dark card UI, motion scroll, product stories
                        </p>
                      </div>
                      <span className="rounded-full bg-sky-500/20 px-2 py-0.5 text-[10px] font-semibold text-sky-200">
                        View
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-slate-900/70 px-3 py-2">
                      <div>
                        <p className="font-medium text-slate-50">
                          Arcadia · creative OS
                        </p>
                        <p className="text-[10px] text-slate-400">
                          Immersive hero, product-led storytelling
                        </p>
                      </div>
                      <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-slate-200">
                        Coming soon
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Stats / meta */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="grid gap-4 sm:grid-cols-2 md:grid-cols-4"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
              >
                <p className="text-[10px] text-slate-400">Ideal timeline</p>
                <p className="text-xl font-semibold text-slate-50">3–4 weeks</p>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
              >
                <p className="text-[10px] text-slate-400">Typical scope</p>
                <p className="text-xl font-semibold text-slate-50">Site + visuals</p>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
              >
                <p className="text-[10px] text-slate-400">Focus</p>
                <p className="text-xl font-semibold text-slate-50">Dark UI & motion</p>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
              >
                <p className="text-[10px] text-slate-400">Fit</p>
                <p className="text-xl font-semibold text-emerald-300">
                  SaaS, fintech, creative
                </p>
              </motion.div>
            </motion.div>

            {/* WORK */}
            <motion.section
              id="work"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-950/60 p-5 sm:p-7"
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                    Selected work
                  </p>
                  <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
                    Three ways Nightwave helps your product stand out in the
                    dark.
                  </h2>
                </div>
                <p className="max-w-md text-xs text-slate-300 sm:text-sm">
                  We specialize in high-contrast, detail-obsessed interfaces
                  that still feel calm. No generic gradients, no off-brand
                  templates.
                </p>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
                className="grid gap-4 md:grid-cols-3"
              >
                <motion.article
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-[11px] text-slate-200"
                >
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-sky-200">
                      01 · Launch-ready narratives
                    </p>
                    <p className="text-sm text-slate-100">
                      We start by mapping your story: who you serve, what you
                      actually do for them, and what makes your product feel
                      different.
                    </p>
                    <p className="text-slate-400">
                      We turn that into a page outline that balances
                      storytelling, product UI, and social proof. Every section
                      has a job.
                    </p>
                  </div>
                </motion.article>

                <motion.article
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-[11px] text-slate-200"
                >
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-sky-200">
                      02 · Product-led visuals
                    </p>
                    <p className="text-sm text-slate-100">
                      We design dark UI frames that feel like your product, not
                      stock dashboards. Think custom empty states, states, and
                      microcopy.
                    </p>
                    <p className="text-slate-400">
                      These frames become reusable assets for future campaigns
                      and investor decks.
                    </p>
                  </div>
                </motion.article>

                <motion.article
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-[11px] text-slate-200"
                >
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-sky-200">
                      03 · Motion that guides, not distracts
                    </p>
                    <p className="text-sm text-slate-100">
                      We add subtle motion only where it helps: section
                      reveals, button hover states, and scroll-linked details
                      that highlight what matters.
                    </p>
                    <p className="text-slate-400">
                      The result feels alive but still performant and
                      accessible.
                    </p>
                  </div>
                </motion.article>
              </motion.div>
            </motion.section>

            {/* SERVICES */}
            <motion.section
              id="services"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-950/60 p-5 sm:p-7"
            >
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                  Services
                </p>
                <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
                  A tiny team focused on one thing: your next launch.
                </h2>
                <p className="max-w-md text-sm text-slate-300">
                  We work with 1–2 teams at a time on fixed-scope,
                  fixed-timeline engagements.
                </p>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
                className="grid gap-4 md:grid-cols-2"
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-4"
                >
                  <h3 className="text-sm font-semibold text-slate-50">
                    Launch sprint · 3 weeks
                  </h3>
                  <p className="text-sm text-slate-300">
                    Ideal for new products or major feature drops that need a
                    dark, cinematic marketing site.
                  </p>
                  <ul className="mt-2 space-y-1.5 text-[11px] text-slate-300">
                    <li>• Narrative and page architecture</li>
                    <li>• Visual direction + UI frames</li>
                    <li>• Responsive build in Next.js</li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-4"
                >
                  <h3 className="text-sm font-semibold text-slate-50">
                    Retainer · ongoing
                  </h3>
                  <p className="text-sm text-slate-300">
                    For teams that ship frequently and want a design/dev partner
                    who knows the product.
                  </p>
                  <ul className="mt-2 space-y-1.5 text-[11px] text-slate-300">
                    <li>• Landing pages & experiments</li>
                    <li>• Changelog & launch visuals</li>
                    <li>• Product marketing support</li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.section>

            {/* APPROACH */}
            <motion.section
              id="approach"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-950/60 p-5 sm:p-7"
            >
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                  Approach
                </p>
                <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
                  Clear communication, no big agency theatre.
                </h2>
                <p className="max-w-md text-sm text-slate-300">
                  You talk directly with the people designing and building your
                  site. No endless handoffs, no surprise scope.
                </p>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
                className="grid gap-4 md:grid-cols-3"
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-[11px] text-slate-200"
                >
                  <p className="text-xs font-semibold text-sky-200">
                    Weekly rhythm
                  </p>
                  <p className="mt-1 text-sm text-slate-100">
                    We run your project in calm, weekly cycles: check-ins, async
                    updates, and a single source of truth for decisions.
                  </p>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-[11px] text-slate-200"
                >
                  <p className="text-xs font-semibold text-sky-200">
                    Built for distributed teams
                  </p>
                  <p className="mt-1 text-sm text-slate-100">
                    Most of our clients work across time zones. We lean on Loom,
                    Figma, and Notion to keep everyone aligned without more
                    meetings.
                  </p>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-[11px] text-slate-200"
                >
                  <p className="text-xs font-semibold text-sky-200">
                    Handoffs that don&apos;t hurt
                  </p>
                  <p className="mt-1 text-sm text-slate-100">
                    We document components, tokens, and flows so your in-house
                    team or future vendors can build on the work easily.
                  </p>
                </motion.div>
              </motion.div>
            </motion.section>

            {/* CONTACT */}
            <motion.section
              id="contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-950/60 p-5 sm:p-7"
            >
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                  Let&apos;s talk
                </p>
                <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
                  Have a launch coming up in the next 4–8 weeks?
                </h2>
                <p className="max-w-md text-sm text-slate-300">
                  Tell us a bit about your product, your timeline, and what a
                  good outcome looks like. We&apos;ll reply within two business
                  days.
                </p>
              </div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-sm"
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-200">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                      placeholder="Alex from LumenPay"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-200">
                      Work email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-200">
                    What are you planning?
                  </label>
                  <textarea
                    rows={3}
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                    placeholder="Short description of your product, launch date, and any links we should know about."
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-200">
                    Rough budget
                  </label>
                  <select className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-50 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400">
                    <option value="">Select a range</option>
                    <option value="$8k–$12k">$8k–$12k</option>
                    <option value="$12k–$18k">$12k–$18k</option>
                    <option value="$18k–$25k">$18k–$25k</option>
                    <option value="$25k+">$25k+</option>
                  </select>
                </div>

                <motion.button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Send inquiry
                </motion.button>

                <p className="text-[11px] text-slate-500">
                  We use your details only to respond to this message. No
                  newsletters, no automated sequences.
                </p>
              </motion.form>
            </motion.section>
          </main>
      </div>

      <Footer />
    </div>
  );
}

