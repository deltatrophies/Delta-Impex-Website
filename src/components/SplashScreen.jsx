import { useEffect, useRef, useState } from "react";

const SPLASH_SEEN_KEY = "delta-impex-splash-seen";
const MIN_VISIBLE_MS = 1200;
const ERROR_HIDE_MS = 1200;

export default function SplashScreen() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.sessionStorage.getItem(SPLASH_SEEN_KEY) !== "true";
  });
  const [leaving, setLeaving] = useState(false);
  const shownAt = useRef(Date.now());
  const hideTimer = useRef(null);
  const removeTimer = useRef(null);

  const hide = () => {
    if (leaving || !visible) return;

    const elapsed = Date.now() - shownAt.current;
    const delay = Math.max(MIN_VISIBLE_MS - elapsed, 0);

    window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => {
      window.sessionStorage.setItem(SPLASH_SEEN_KEY, "true");
      setLeaving(true);
      removeTimer.current = window.setTimeout(() => setVisible(false), 520);
    }, delay);
  };

  useEffect(() => {
    if (!visible) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      hideTimer.current = window.setTimeout(hide, 900);
    }

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
      <video
        className="splash-screen__video"
        src="https://res.cloudinary.com/dliriew7z/video/upload/q_auto/v1786004604/delta-impex/videos/splash/delta-impex-splash.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onLoadedMetadata={(event) => {
          event.currentTarget.playbackRate = 1.15;
        }}
        onTimeUpdate={(event) => {
          const video = event.currentTarget;
          if (!video.duration) return;
          video.playbackRate = video.currentTime >= video.duration * 0.68 ? 1.32 : 1.15;
        }}
        onEnded={hide}
        onError={() => {
          window.clearTimeout(hideTimer.current);
          hideTimer.current = window.setTimeout(hide, ERROR_HIDE_MS);
        }}
      />
    </div>
  );
}
