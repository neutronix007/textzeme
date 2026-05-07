const SOCIAL_LINKS  = ['Facebook', 'Instagram', 'Twitter / X', 'LinkedIn'];
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

          {/* Link columns — same text-sm as site body copy */}
          <div className="grid grid-cols-2 md:flex md:flex-row gap-10 md:gap-14 xl:gap-20">

            {/* Socials */}
            <div>
              <p className="text-sm font-semibold text-neutral-900 mb-4 tracking-tight">
                Socials
              </p>
              <ul className="space-y-3">
                {SOCIAL_LINKS.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-normal text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <p className="text-sm font-semibold text-neutral-900 mb-4 tracking-tight">
                Support
              </p>
              <ul className="space-y-3">
                {SUPPORT_LINKS.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-normal text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Security */}
            <div>
              <p className="text-sm font-semibold text-neutral-900 mb-4 tracking-tight">
                Security
              </p>
              <ul className="space-y-3">
                {SECURITY_LINKS.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-normal text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* App store badges — slightly larger */}
          <div className="flex flex-row md:flex-col gap-3 shrink-0">
            <a href="#" className="block">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-[52px] w-auto"
                draggable={false}
              />
            </a>
            <a href="#" className="block">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on the App Store"
                className="h-[52px] w-auto"
                draggable={false}
              />
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="flex justify-end mt-8">
          <p className="text-sm text-neutral-400">© 2026 Zeme</p>
        </div>

      </div>

      {/* ── Watermark ─────────────────────────────────────────────────── */}
      {/* SVG is 1278×387 (3.3:1). Setting width:130vw means it always
          exceeds the viewport, bleeding off the right edge. The footer's
          overflow:hidden clips it cleanly on both sides.                 */}
      <div
        className="pointer-events-none select-none"
        style={{ marginTop: '-0.25rem', paddingLeft: '1.5rem' }}
        aria-hidden
      >
        <img
          src="/Zeme.svg"
          alt=""
          draggable={false}
          style={{
            width: '130vw',
            display: 'block',
          }}
        />
      </div>

    </footer>
  );
}
