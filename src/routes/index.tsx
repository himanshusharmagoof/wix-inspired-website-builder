import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import heroEditor from "@/assets/wix-recreation/reference-1.webp";
import heroBottle from "@/assets/wix-recreation/reference-2.webp";
import createImage from "@/assets/wix-recreation/reference-3.webp";
import launchImage from "@/assets/wix-recreation/reference-4.webp";
import growImage from "@/assets/wix-recreation/reference-5.webp";
import awardImage from "@/assets/wix-recreation/reference-6.png";
import aiImage from "@/assets/wix-recreation/reference-7.jpg";
import templatesImage from "@/assets/wix-recreation/reference-8.jpg";
import portfolioOne from "@/assets/wix-recreation/reference-9.webp";
import portfolioTwo from "@/assets/wix-recreation/reference-10.jpg";
import portfolioThree from "@/assets/wix-recreation/reference-11.webp";
import portfolioFour from "@/assets/wix-recreation/reference-12.webp";
import portfolioFive from "@/assets/wix-recreation/reference-13.webp";
import portfolioSix from "@/assets/wix-recreation/reference-14.webp";
import portfolioSeven from "@/assets/wix-recreation/reference-15.jpg";
import portfolioEight from "@/assets/wix-recreation/reference-16.webp";
import portfolioNine from "@/assets/wix-recreation/reference-17.webp";
import portfolioTen from "@/assets/wix-recreation/reference-18.webp";

const startUrl = "https://www.wix.com/signup";
const faqItems = [
  {
    question: "What’s the best way to create a website?",
    answer: "Pick a platform that supports your goals, start with AI or a designer-made template, and customize the details to fit your brand. When you’re ready, publish your site and share it with the world.",
  },
  {
    question: "What are the benefits of using a website creator with AI capabilities?",
    answer: "An AI website builder can create a tailored starting point in minutes. Describe your idea, then adjust the pages, design and content to make the result yours.",
  },
  {
    question: "How much does it cost to build a website?",
    answer: "You can start building a website for free. Paid plans are available when you need a custom domain and additional business features.",
  },
  {
    question: "How do I choose the best website builder?",
    answer: "Look for flexible design tools, templates that fit your needs, reliable hosting, business features and support that can grow with your site.",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Wix — It's more than a website. It's your future." },
      { name: "description", content: "Create a website that moves your ideas forward. Start with AI or a template, then make it your own with Wix." },
      { property: "og:title", content: "Wix — It's more than a website. It's your future." },
      { property: "og:description", content: "Create a website that moves your ideas forward. Start with AI or a template, then make it your own with Wix." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" },
    ],
  }),
});

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="wix-page">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Wix home">WiX<span>.</span></a>
        <nav className={menuOpen ? "main-nav nav-open" : "main-nav"} aria-label="Main navigation">
          <a href="#create" onClick={() => setMenuOpen(false)}>Create</a>
          <a href="#design" onClick={() => setMenuOpen(false)}>Design</a>
          <a href="#inspiration" onClick={() => setMenuOpen(false)}>Inspiration</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>Resources</a>
        </nav>
        <a className="header-login" href={startUrl}>Log In</a>
        <a className="header-start" href={startUrl}>Get Started <ArrowRight size={16} /></a>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-glow" />
        <div className="float-panel editor-panel"><img src={heroEditor} alt="A website design in a creative editor" /><span className="play-chip">▶</span></div>
        <div className="float-panel bottle-panel"><img src={heroBottle} alt="A pink product image created for a website" /></div>
        <div className="hero-control theme-control"><span className="control-icon">◉</span><span>Site theme</span><i /><i /><i /><i /></div>
        <div className="hero-control font-control"><span className="control-icon">T</span><span>Font size</span><div className="control-line" /><small>20</small></div>
        <div className="sparkle sparkle-left">✦</div><div className="sparkle sparkle-right">✦</div>
        <div className="hero-content">
          <a className="hero-brand" href="#top">WiX</a>
          <h1>It’s more than a website.<br />It’s your future.</h1>
          <form className="hero-form" action={startUrl}>
            <label className="sr-only" htmlFor="email">Enter your email address</label>
            <input id="email" type="email" name="email" placeholder="Enter your email address" required />
            <button type="submit">Start Now <ArrowRight size={22} /></button>
          </form>
          <p className="hero-note">Yes, it’s free. Upgrade anytime.</p>
        </div>
        <a className="scroll-hint" href="#create" aria-label="Scroll to create your website"><ArrowDown size={18} /></a>
      </section>

      <section className="build-section section-wrap" id="create">
        <div className="section-heading reveal">
          <p className="eyebrow">FROM FIRST IDEA TO BIG NEXT STEP</p>
          <h2>Setting you up for success,<br />from start to scale</h2>
        </div>
        <div className="steps-list">
          <FeatureRow number="01" title="Create your website" body="Start with AI or choose from 1000s of templates. Seamlessly add products, services, a blog and more." image={createImage} imageAlt="An online shop being built in a visual editor" />
          <FeatureRow number="02" title="Launch with confidence" body="Get a custom domain and built-in, reliable hosting so your site runs smoothly—even during traffic spikes." image={launchImage} imageAlt="A live website available around the world" reverse />
          <FeatureRow number="03" title="Grow your presence" body="Reach and engage more people with built-in SEO tools, Google ads, email marketing and social posts." image={growImage} imageAlt="A business analytics dashboard showing growth" />
        </div>
      </section>

      <section className="proof-band">
        <div className="proof-inner"><img src={awardImage} alt="G2 Spring 2025 Easiest to Use award" /><p>Over <strong>15,000</strong> sites go live<br className="mobile-break" /> with Wix every day.</p><a href={startUrl} className="text-link">Make yours next <ArrowUpRight size={18} /></a></div>
      </section>

      <section className="design-section section-wrap" id="design">
        <div className="design-heading reveal"><p className="eyebrow">MADE FOR YOUR KIND OF CREATIVE</p><h2>The freedom to<br />design it your way.</h2><a href={startUrl} className="pill-link">Start Now <ArrowRight size={18} /></a></div>
        <div className="design-options">
          <article className="design-option reveal"><div className="option-image"><img src={aiImage} alt="An AI website builder creating a glowing candle shop" loading="lazy" /><span className="image-index">01 / AI</span></div><div className="option-copy"><h3>Start with AI</h3><p>Generate a site based on your needs and adjust it to match your vision.</p><a href={startUrl} aria-label="Start with AI">Explore AI <ArrowUpRight size={17} /></a></div></article>
          <article className="design-option reveal"><div className="option-image"><img src={templatesImage} alt="Website templates for creative brands and businesses" loading="lazy" /><span className="image-index">02 / TEMPLATES</span></div><div className="option-copy"><h3>Or use our templates</h3><p>Pick a designer-made template and customize it to make it your own.</p><a href={startUrl} aria-label="Browse templates">Browse templates <ArrowUpRight size={17} /></a></div></article>
        </div>
      </section>

      <section className="portfolio-section" id="inspiration">
        <div className="portfolio-heading section-wrap"><div><p className="eyebrow">A LITTLE INSPIRATION GOES A LONG WAY</p><h2>Made with Wix.<br />Made to be remembered.</h2></div><a href={startUrl} className="text-link">Find your starting point <ArrowUpRight size={18} /></a></div>
        <div className="portfolio-marquee" aria-label="Examples of websites made with Wix">
          <div className="portfolio-track">
            {[portfolioOne, portfolioTwo, portfolioThree, portfolioFour, portfolioFive, portfolioSix, portfolioSeven, portfolioEight, portfolioNine, portfolioTen, portfolioOne, portfolioTwo, portfolioThree, portfolioFour, portfolioFive, portfolioSix, portfolioSeven, portfolioEight, portfolioNine, portfolioTen].map((image, index) => <div className={`portfolio-tile portfolio-tile-${index % 10}`} key={`${index}-${image}`}><img src={image} alt={`Wix website inspiration example ${index % 10 + 1}`} loading="lazy" /></div>)}
          </div>
        </div>
        <div className="portfolio-cta"><p>Take the leap like millions before you.</p><a href={startUrl} className="pill-link">Start Now <ArrowRight size={18} /></a></div>
      </section>

      <section className="closing-section"><div className="closing-inner"><p className="eyebrow">YOUR IDEA LOOKS GOOD OUT THERE</p><h2>Stand out<br />online.</h2><a href={startUrl} className="closing-button">Get Started <ArrowRight size={20} /></a><span className="closing-star star-one">✳</span><span className="closing-star star-two">✳</span><span className="closing-star star-three">✳</span></div></section>

      <section className="faq-section section-wrap" id="faq"><div className="faq-title"><p className="eyebrow">GOOD QUESTIONS</p><h2>FAQs</h2></div><div className="faq-list">{faqItems.map((item, index) => <article className={openFaq === index ? "faq-item faq-active" : "faq-item"} key={item.question}><button aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{item.question}</span><ChevronDown size={21} /></button>{openFaq === index && <p className="faq-answer">{item.answer}</p>}</article>)}</div></section>

      <footer className="site-footer"><a className="wordmark footer-wordmark" href="#top">WiX<span>.</span></a><span>Make room for what’s next.</span><a href="#top" className="back-top">Back to top ↑</a><small>© 2006–2026 Wix.com</small></footer>
    </main>
  );
}

function FeatureRow({ number, title, body, image, imageAlt, reverse = false }: { number: string; title: string; body: string; image: string; imageAlt: string; reverse?: boolean }) {
  return <article className={reverse ? "feature-row feature-reverse reveal" : "feature-row reveal"}><div className="feature-copy"><span className="feature-number">{number} <span>—</span> THE JOURNEY</span><h3>{title}</h3><p>{body}</p><a href={startUrl}>Start Now <ArrowRight size={17} /></a></div><div className="feature-image"><img src={image} alt={imageAlt} loading="lazy" /></div></article>;
}