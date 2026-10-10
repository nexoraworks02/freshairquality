// Real customer video testimonials (all customers gave permission to post).
// Files live in /public/videos/feedback — compressed copies of the originals
// kept (git-ignored) in /_feedback_originals. Each clip has a .webp poster.
//
// To add a video: compress it the same way (H.264, ≤720px tall, faststart),
// drop `feedback-NN.mp4` + `feedback-NN.webp` in that folder and add a line.

export type FeedbackVideo = {
  src: string;
  poster: string;
  seconds: number; // shown as a duration badge
};

const clip = (n: number, seconds: number): FeedbackVideo => {
  const id = String(n).padStart(2, "0");
  return {
    src: `/videos/feedback/feedback-${id}.mp4`,
    poster: `/videos/feedback/feedback-${id}.webp`,
    seconds,
  };
};

// Professionally edited video (customer + before/after footage, burned-in
// captions) — plays muted on a loop as the section's centrepiece.
export const featuredVideo: FeedbackVideo = {
  src: "/videos/feedback/featured.mp4",
  poster: "/videos/feedback/featured.webp",
  seconds: 33,
};

export const customerVideos: FeedbackVideo[] = [
  clip(1, 24),
  clip(2, 23),
  clip(3, 9),
  clip(4, 13),
  clip(5, 14),
  clip(6, 25),
  clip(7, 15),
  clip(8, 6),
  clip(9, 33),
  clip(10, 19),
  clip(11, 31),
  clip(12, 18),
  clip(13, 14),
];
