import { useEffect, useRef, useState } from "react";

const SPLASH_SEEN_KEY = "delta-impex-splash-seen";
const SPLASH_DURATION_MS = 3600;

export default function SplashScreen() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.sessionStorage.getItem(SPLASH_SEEN_KEY) !== "true";
  });
  const [leaving, setLeaving] = useState(false);
  const hideTimer = useRef(null);
  const removeTimer = useRef(null);

  const hide = () => {
    if (leaving || !visible) return;

    window.clearTimeout(hideTimer.current);
    window.sessionStorage.setItem(SPLASH_SEEN_KEY, "true");
    setLeaving(true);
    removeTimer.current = window.setTimeout(() => setVisible(false), 720);
  };

  useEffect(() => {
    if (!visible) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    hideTimer.current = window.setTimeout(hide, reduceMotion ? 900 : SPLASH_DURATION_MS);

    return () => {
      window.clearTimeout(hideTimer.current);
      window.clearTimeout(removeTimer.current);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`splash-screen ${leaving ? "splash-screen--leaving" : ""}`}
      role="status"
      aria-label="Loading Delta Impex Inc."
    >
      <div className="splash-screen__content">
        <div className="splash-screen__logo-wrap">
          <img
            className="splash-screen__logo"
            src="https://res.cloudinary.com/dliriew7z/image/upload/f_auto,q_auto/v1785933005/delta-impex/Logo/delta-impex-logo-transparent.png"
            alt="Delta Impex Inc."
          />
        </div>
        <div className="splash-screen__name" aria-hidden="true">
          <span>Delta</span>
          <strong>Impex</strong>
          <span>Incorporation</span>
        </div>
        <div className="splash-screen__line" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
}
