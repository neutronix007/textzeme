/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { lazy, Suspense, useState } from 'react';
import HeroV1 from './HeroV1';

// Non-default layouts and below-fold sections are lazy-loaded so they don't
// bloat the initial bundle.
const HeroV2  = lazy(() => import('./HeroV2'));
const HeroV3  = lazy(() => import('./HeroV3'));
const HeroV4  = lazy(() => import('./HeroV4'));
const HeroV5  = lazy(() => import('./HeroV5'));
const HeroV6      = lazy(() => import('./HeroV6'));
const AgentsPage  = lazy(() => import('./AgentsPage'));
const FooterOld   = lazy(() => import('./Footer'));     // Layout 1
const FooterNew   = lazy(() => import('./FooterNew'));   // Layout 1 v2 + Layout 3 v2

type Layout = 'v1' | 'v2' | 'v3' | 'v4' | 'v5' | 'v6' | 'agents';

const layouts: { id: Layout; label: string; sub: string }[] = [
  { id: 'v1', label: 'Layout 1', sub: 'Side-by-side' },
  { id: 'v2', label: 'Layout 2', sub: 'Centered + Carousel' },
  { id: 'v3', label: 'Layout 3', sub: 'Blue hero + Clouds' },
  { id: 'v4', label: 'Layout 4', sub: 'Split + Phone' },
  { id: 'v5', label: 'Layout 1 v2', sub: 'Layout 1 + Clouds' },
  { id: 'v6', label: 'Layout 3 v2', sub: 'Blue box + Text below' },
];

export default function App() {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [active, setActive]           = useState<Layout>('v1');

  const select = (id: Layout) => {
    setActive(id);
    setDropdownOpen(false);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-zeme-blue/10">

      {/* ── Nav ─────────────────────────────────────────────── */}
      <nav className="max-w-[1400px] mx-auto px-6 py-8 flex items-center justify-between relative z-50">
        <a href="/" className="flex items-center">
          <img
            src="https://textzeme.com/_next/image?url=%2Fzeme-colored-logo.webp&w=256&q=75"
            alt="Zeme Logo"
            className="h-5 md:h-6 w-auto"
          />
        </a>

        {/* Desktop nav — swaps to "For Renters" pill when on the agents page */}
        <div className="hidden md:block relative">
          {active === 'agents' ? (
            <button
              onClick={() => select('v1')}
              className="bg-zeme-gray px-5 py-2.5 rounded-full text-sm font-semibold text-neutral-900 hover:bg-neutral-200 transition-colors"
            >
              For Renters and Tenants
            </button>
          ) : (
            <>
              <button
                onClick={() => setDropdownOpen(o => !o)}
                className="bg-zeme-gray px-5 py-2.5 rounded-full text-sm font-semibold text-neutral-900 hover:bg-neutral-200 transition-colors flex items-center gap-2"
              >
                For Agents &amp; Landlords
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0,  scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 min-w-[220px]"
                  >
                    <p className="px-4 pt-1 pb-2 text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
                      Hero Layouts
                    </p>
                    {layouts.map(l => (
                      <button
                        key={l.id}
                        onClick={() => select(l.id)}
                        className={`w-full text-left px-4 py-2.5 flex items-center justify-between transition-colors rounded-lg hover:bg-neutral-50 ${
                          active === l.id ? 'text-zeme-blue' : 'text-neutral-700'
                        }`}
                      >
                        <span className="font-semibold text-sm">{l.label}</span>
                        <span className="text-xs text-neutral-400">{l.sub}</span>
                      </button>
                    ))}
                    {/* Pages divider */}
                    <div className="border-t border-neutral-100 mt-1 pt-1">
                      <p className="px-4 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
                        Pages
                      </p>
                      <button
                        onClick={() => select('agents')}
                        className="w-full text-left px-4 py-2.5 flex items-center justify-between transition-colors rounded-lg hover:bg-neutral-50 text-neutral-700"
                      >
                        <span className="font-semibold text-sm">Agents Page</span>
                        <span className="text-xs text-neutral-400">For Agents &amp; Landlords</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="md:hidden p-2 hover:bg-neutral-100 rounded-lg transition-colors"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Backdrop to close dropdown */}
      {dropdownOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setDropdownOpen(false)} />
      )}

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="md:hidden border-t border-neutral-100 bg-white px-6 py-4 space-y-2"
          >
            <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 px-2 pb-1">
              Hero Layouts
            </p>
            {layouts.map(l => (
              <button
                key={l.id}
                onClick={() => select(l.id)}
                className={`flex w-full items-center justify-between px-5 py-3 rounded-full text-sm font-semibold transition-colors ${
                  active === l.id
                    ? 'bg-zeme-blue text-white'
                    : 'bg-zeme-gray text-neutral-900 hover:bg-neutral-200'
                }`}
              >
                <span>{l.label}</span>
                <span className={`text-xs font-normal ${active === l.id ? 'text-white/70' : 'text-neutral-400'}`}>
                  {l.sub}
                </span>
              </button>
            ))}
            <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 px-2 pt-3 pb-1">
              Pages
            </p>
            <button
              onClick={() => select('agents')}
              className={`flex w-full items-center justify-between px-5 py-3 rounded-full text-sm font-semibold transition-colors ${
                active === 'agents'
                  ? 'bg-zeme-blue text-white'
                  : 'bg-zeme-gray text-neutral-900 hover:bg-neutral-200'
              }`}
            >
              <span>Agents Page</span>
              <span className={`text-xs font-normal ${active === 'agents' ? 'text-white/70' : 'text-neutral-400'}`}>
                For Agents &amp; Landlords
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Page content ────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {active === 'v1' ? (
          <motion.div
            key="v1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <HeroV1 />
          </motion.div>
        ) : active === 'v2' ? (
          <motion.div
            key="v2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
              <HeroV2 />
            </Suspense>
          </motion.div>
        ) : active === 'v3' ? (
          <motion.div
            key="v3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
              <HeroV3 />
            </Suspense>
          </motion.div>
        ) : active === 'v4' ? (
          <motion.div
            key="v4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
              <HeroV4 />
            </Suspense>
          </motion.div>
        ) : active === 'v5' ? (
          <motion.div
            key="v5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
              <HeroV5 />
            </Suspense>
          </motion.div>
        ) : active === 'v6' ? (
          <motion.div
            key="v6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
              <HeroV6 />
            </Suspense>
          </motion.div>
        ) : (
          <motion.div
            key="agents"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
              <AgentsPage />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Layout 1 uses the original footer */}
      {active === 'v1' && (
        <Suspense fallback={null}>
          <FooterOld />
        </Suspense>
      )}

      {/* Layout 1 v2 and Layout 3 v2 use the new footer */}
      {(active === 'v5' || active === 'v6') && (
        <Suspense fallback={null}>
          <FooterNew />
        </Suspense>
      )}

    </div>
  );
}
