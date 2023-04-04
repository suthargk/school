const date = typeof window !== "undefined" ? new Date().toISOString() : "";

export const newsData = [
  {
    title: "Next.js gets a mini makeover before v13 drops",
    category: "Product News",
    description:
      "The popular open-source web development framework Next.js is coming up on its sixth anniversary — and a much-anticipated version 13...",
    created_at: date,
  },
  {
    title: "The best new features in Next.js 13",
    category: "Award",
    description:
      "Next.js 13 brings a slew of new features, including the new Turbopack bundler, support for React Server Components, and more. Let's get started with Next.js 13..",
    created_at: date,
  },
  {
    title: "Vercel makes it easier to collaborate on preview deployments",
    category: "Patnership",
    description:
      "Vercel, the popular front-end development platform, now allows you to comment directly on preview deployments, using a highly visual commenting system that is...",
    created_at: date,
  },
];
