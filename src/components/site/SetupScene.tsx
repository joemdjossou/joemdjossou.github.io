import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

/**
 * Background footage for the hero. While this is null the scene runs on
 * setup.jpg alone and makes no video requests at all. Pointing it at a file in
 * `public/` (e.g. "/setup") is the only change needed to switch the hero to
 * video; the scene then loads `<src>.webm` and `<src>.mp4` and cross-fades to
 * whichever the browser can decode.
 */
const VIDEO_SRC: string | null = null;

const SetupScene = ({ children }: { children?: React.ReactNode }) => {
  const video = useRef<HTMLVideoElement>(null);
  // Starts false and flips only once the browser confirms it can decode the
  // file, so a missing/undecodable setup.mp4 simply leaves the still in place.
  const [hasVideo, setHasVideo] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const el = video.current;
    if (!el) return;
    if (el.paused) {
      void el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const el = video.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  };

  return (
    <section
      aria-label="The desk this gets built at"
      /* Pulled up under the transparent header so the scene starts at the very
         top of the page, the way the header's own scroll state expects. */
      className="full-bleed relative isolate -mt-14 overflow-hidden"
    >
      {/* Still frame. Always present, and the only visual until the video is
          confirmed playable. The slow drift keeps it from reading as a dead JPEG. */}
      <img
        src="/setup.jpg"
        alt="Josué's desk setup"
        className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ${
          hasVideo ? "opacity-0" : "animate-kenburns opacity-100"
        }`}
      />

      {VIDEO_SRC && (
        <video
          ref={video}
          poster="/setup.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          tabIndex={-1}
          onCanPlay={() => setHasVideo(true)}
          onError={() => setHasVideo(false)}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ${
            hasVideo ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={`${VIDEO_SRC}.webm`} type="video/webm" />
          <source src={`${VIDEO_SRC}.mp4`} type="video/mp4" />
        </video>
      )}

      {/* Scrim, in three layers. The flat wash guarantees contrast for the hero
          copy at any brightness of footage; the top vignette seats the header;
          the bottom fade is deliberately short so it blends into the page edge
          without bleaching the caption that sits just above it. */}
      <div aria-hidden className="absolute inset-0 bg-black/60" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/60 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent"
      />

      <div className="relative flex min-h-[92vh] flex-col justify-between pb-32 pt-24">
        <div className="container-page">{children}</div>

        <div className="container-page mt-10 flex flex-wrap items-end justify-end gap-4">
          <div className="flex items-center gap-3">
            <p className="max-w-[16rem] text-right text-xs leading-relaxed text-white/70">
              Where the apps, the pipelines and the 2am debugging actually happen.
            </p>
            {hasVideo && (
              <div className="flex gap-1.5">
                <button
                  onClick={togglePlay}
                  aria-label={playing ? "Pause background video" : "Play background video"}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/25"
                >
                  {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
                </button>
                <button
                  onClick={toggleMute}
                  aria-label={muted ? "Unmute background video" : "Mute background video"}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/25"
                >
                  {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetupScene;
