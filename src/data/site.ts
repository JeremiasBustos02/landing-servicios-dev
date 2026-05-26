export const EASE = [0.21, 0.47, 0.32, 0.98] as const

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
} as const

export const SITE = {
  brandName: 'milogo.',
  videoBackground:
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4',
  socialProofInitials: ['MS', 'LG', 'FM'] as const,
  carouselInterval: 4000,
}
