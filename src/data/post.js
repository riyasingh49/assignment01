export const POSTS = [
  {
    id: 1,
    slug: "javascript-closures-explained",
    title: "JavaScript Closures Explained Simply",
    excerpt:
      "Closures are one of JS's most misunderstood concepts. Let's demystify them with practical examples you'll actually use.",
    category: "JavaScript",
    author: "Aisha Rahman",
    date: "2025-01-15",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&q=80",
    tags: ["js", "closures", "fundamentals"],
  },
  {
    id: 2,
    slug: "react-performance-tips",
    title: "10 React Performance Tips You Need",
    excerpt:
      "Stop your React app from being sluggish. These proven techniques will dramatically improve your render performance.",
    category: "React",
    author: "Dev Kapoor",
    date: "2025-01-20",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&q=80",
    tags: ["react", "performance", "optimization"],
  },
  {
    id: 3,
    slug: "css-grid-mastery",
    title: "CSS Grid: From Zero to Mastery",
    excerpt:
      "Grid changed the way we build layouts forever. This comprehensive guide covers everything from basics to advanced techniques.",
    category: "CSS",
    author: "Sara Malik",
    date: "2025-01-25",
    readTime: "12 min",
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&q=80",
    tags: ["css", "grid", "layout"],
  },
  {
    id: 4,
    slug: "typescript-generics-guide",
    title: "TypeScript Generics: A Complete Guide",
    excerpt:
      "Generics make your TypeScript code truly reusable. Learn how to write flexible, type-safe functions and classes.",
    category: "TypeScript",
    author: "Aisha Rahman",
    date: "2025-01-28",
    readTime: "11 min",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&q=80",
    tags: ["typescript", "generics", "types"],
  },
  {
    id: 5,
    slug: "nodejs-async-patterns",
    title: "Node.js Async Patterns That Actually Work",
    excerpt:
      "Promises, async/await, streams — learn which async pattern fits your use case and how to avoid common pitfalls.",
    category: "Node.js",
    author: "Omar Sheikh",
    date: "2025-02-01",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    tags: ["nodejs", "async", "promises"],
  },
  {
    id: 6,
    slug: "tailwind-dark-mode",
    title: "Tailwind Dark Mode Done Right",
    excerpt:
      "Implementing dark mode with Tailwind is easy once you understand the system. Here's the definitive approach.",
    category: "CSS",
    author: "Sara Malik",
    date: "2025-02-05",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    tags: ["tailwind", "dark-mode", "css"],
  },
  {
    id: 7,
    slug: "react-hooks-deep-dive",
    title: "React Hooks: A Deep Dive Into useEffect",
    excerpt:
      "useEffect is powerful but often misused. Understand the dependency array, cleanup functions, and mental model.",
    category: "React",
    author: "Dev Kapoor",
    date: "2025-02-08",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&q=80",
    tags: ["react", "hooks", "useEffect"],
  },
  {
    id: 8,
    slug: "python-dataclasses",
    title: "Python Dataclasses Are Underrated",
    excerpt:
      "Dataclasses remove boilerplate and make your data models clean and Pythonic. Here's why you should use them more.",
    category: "Python",
    author: "Zara Hussain",
    date: "2025-02-10",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&q=80",
    tags: ["python", "dataclasses", "oop"],
  },
  {
    id: 9,
    slug: "git-rebase-workflow",
    title: "Git Rebase: Stop Being Afraid of It",
    excerpt:
      "Rebase doesn't have to be scary. Learn when to use it, how it works, and the golden rules to follow.",
    category: "DevOps",
    author: "Omar Sheikh",
    date: "2025-02-12",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&q=80",
    tags: ["git", "rebase", "workflow"],
  },
  {
    id: 10,
    slug: "web-accessibility-basics",
    title: "Web Accessibility Is Not Optional",
    excerpt:
      "Building accessible web apps benefits everyone. Learn the WCAG basics and quick wins you can implement today.",
    category: "JavaScript",
    author: "Aisha Rahman",
    date: "2025-02-14",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    tags: ["a11y", "accessibility", "html"],
  },
  {
    id: 11,
    slug: "docker-for-developers",
    title: "Docker for Frontend Developers",
    excerpt:
      "You don't need to be a DevOps engineer to use Docker. This practical guide gets you containerized in an afternoon.",
    category: "DevOps",
    author: "Dev Kapoor",
    date: "2025-02-16",
    readTime: "11 min",
    image:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&q=80",
    tags: ["docker", "containers", "devops"],
  },
  {
    id: 12,
    slug: "svelte-vs-react",
    title: "Svelte vs React in 2025: Honest Comparison",
    excerpt:
      "Both frameworks have matured. Here's an honest side-by-side comparison to help you pick the right tool.",
    category: "React",
    author: "Sara Malik",
    date: "2025-02-18",
    readTime: "13 min",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
    tags: ["svelte", "react", "comparison"],
  },
  {
    id: 13,
    slug: "rest-api-design",
    title: "REST API Design Best Practices",
    excerpt:
      "Good API design is an art. Learn the conventions and decisions that make your REST APIs a joy to work with.",
    category: "Node.js",
    author: "Zara Hussain",
    date: "2025-02-19",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&q=80",
    tags: ["api", "rest", "backend"],
  },
  {
    id: 14,
    slug: "css-variables-power",
    title: "The Hidden Power of CSS Custom Properties",
    excerpt:
      "CSS variables are more than theming. Use them for responsive design, animations, and component APIs.",
    category: "CSS",
    author: "Omar Sheikh",
    date: "2025-02-20",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&q=80",
    tags: ["css", "variables", "theming"],
  },
  {
    id: 15,
    slug: "nextjs-app-router",
    title: "Next.js App Router: Everything You Need",
    excerpt:
      "The App Router changed Next.js fundamentally. Server components, layouts, loading states — all explained clearly.",
    category: "React",
    author: "Aisha Rahman",
    date: "2025-02-20",
    readTime: "15 min",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80",
    tags: ["nextjs", "app-router", "react"],
  },
];

export const CATEGORIES = [...new Set(POSTS.map((p) => p.category))];
