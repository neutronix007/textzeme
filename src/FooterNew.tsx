const SOCIAL_LINKS = ['Facebook', 'Instagram', 'Twitter / X', 'LinkedIn'];
const SUPPORT_LINKS = ['Contact Us', 'Terms of Service', 'Privacy Policy'];
const SECURITY_LINKS = ['Trust Center'];

export default function FooterNew() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#F2F2F2' }}
    >
      {/* ── Content ──────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-14 pb-6">

        {/* Top row: link columns + app badges */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

          {/* Link columns */}
          <div className="grid grid-cols-2 md:flex md:flex-row gap-10 md:gap-14 xl:gap-20">

            {/* Socials */}
            <div>
              <p className="text-[13px] font-semibold text-neutral-900 mb-4 tracking-tight">
                Socials
              </p>
              <ul className="space-y-3">
                {SOCIAL_LINKS.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <p className="text-[13px] font-semibold text-neutral-900 mb-4 tracking-tight">
                Support
              </p>
              <ul className="space-y-3">
                {SUPPORT_LINKS.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Security */}
            <div>
              <p className="text-[13px] font-semibold text-neutral-900 mb-4 tracking-tight">
                Security
              </p>
              <ul className="space-y-3">
                {SECURITY_LINKS.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* App store badges */}
          <div className="flex flex-row md:flex-col gap-3 shrink-0">
            <a href="#" className="block">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-[42px] w-auto"
                draggable={false}
              />
            </a>
            <a href="#" className="block">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on the App Store"
                className="h-[42px] w-auto"
                draggable={false}
              />
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="flex justify-end mt-8">
          <p className="text-[12px] text-neutral-400">© 2026 Zeme</p>
        </div>

      </div>

      {/* ── Watermark ─────────────────────────────────────────────────── */}
      {/* Lives outside the max-width container so the "Z" hugs the left
          viewport edge; overflow:hidden on <footer> clips the right bleed. */}
      <div
        className="pointer-events-none select-none"
        style={{ marginTop: '-1rem' }}
        aria-hidden
      >
        <span
          className="block font-black leading-none whitespace-nowrap"
          style={{
            fontSize: 'clamp(160px, 32vw, 460px)',
            color: '#DCDCDC',
            letterSpacing: '-0.03em',
            paddingLeft: '1.25rem',
          }}
        >
          Zeme
        </span>
      </div>

    </footer>
  );
}
