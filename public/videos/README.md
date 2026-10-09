# Hero video — optional drop-in slot

The homepage hero (`src/components/three/AirJourney.tsx`) ships with a
**self-contained animated background** — no video file is required, and nothing
looks broken without one.

When the client's cinematic hero video is ready:

1. Drop the file here, e.g. `public/videos/hero.mp4` (landscape, muted, ~3–4 MB).
2. Open `src/components/three/AirJourney.tsx` and set:
   ```ts
   const HERO_VIDEO_SRC = "/videos/hero.mp4";
   ```
3. The hero then autoplays the video (muted / loop / playsInline) on all screen
   sizes, falling back to the animated background for `prefers-reduced-motion`.

Encode tips: ~1920×1080, 6–12s seamless loop, H.264 high profile, target
< 4 MB so it starts fast.
