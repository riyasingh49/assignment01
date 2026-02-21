import Breadcrumb from '../components/BreadCrumb'

const ABOUT_SECTIONS = [
  { icon: "🎯", title: "Our Mission", body: "ByteScribe exists to make complex web development concepts accessible without oversimplifying them. We believe good technical writing respects the reader's intelligence." },
  { icon: "✍️", title: "Our Authors", body: "We're a small collective of working engineers — Aisha Rahman, Dev Kapoor, Sara Malik, Omar Sheikh, and Zara Hussain — who write about what we actually use on the job." },
  { icon: "📚", title: "What We Cover", body: "JavaScript, TypeScript, React, Node.js, CSS, Python, DevOps — the full spectrum of modern web development. Each post is written with real-world use cases in mind." },
  { icon: "🤝", title: "Get In Touch", body: "Have a topic you want covered? Found an error? Want to contribute? Drop us a line at hello@bytescribe.dev" },
];

function AboutPage() {
  return (
    <div>
      <Breadcrumb items={[
        { label: "Home", to: "/" },
        { label: "About" }
      ]} />

      <div>
        <span>✍️</span>
        <h1>About ByteScribe</h1>
        <p>A developer blog for developers who care about the craft.</p>
      </div>

      {ABOUT_SECTIONS.map(({ icon, title, body }) => (
        <div key={title}>
          <span>{icon}</span>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      ))}

    </div>
  );
}

export default AboutPage