/* global React, ReactDOM */
const { useState, useEffect, useRef } = React;

/* ---------- Reusable bits ---------- */

function Topbar({ stock }) {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <a className="brandmark" href="#">
          <img className="brand-logo" src="assets/logo-orange.png" alt="Caressence" />
        </a>
        <div className="right">
          {stock ? <span className="pill-stock">In stock &middot; Ships nationwide</span> : null}
        </div>
      </div>
    </div>
  );
}

function CtaButton({ label, onClick, hue }) {
  const style = hue ? {
    background: `linear-gradient(180deg, ${hue} 0%, ${shade(hue, -0.18)} 100%)`,
    boxShadow: `0 1px 0 rgba(255,255,255,.18) inset, 0 -2px 0 rgba(0,0,0,.18) inset, 0 14px 30px -8px ${hueAlpha(hue, .45)}, 0 4px 12px -2px ${hueAlpha(shade(hue, -0.18), .35)}`,
  } : {};
  return (
    <button className="cta" onClick={onClick} style={style}>{label || "I want to get this product"}</button>
  );
}

function hexToRgb(h) {
  const m = h.replace('#', '');
  const v = m.length === 3 ? m.split('').map(c => c + c).join('') : m;
  return [parseInt(v.slice(0, 2), 16), parseInt(v.slice(2, 4), 16), parseInt(v.slice(4, 6), 16)];
}
function shade(hex, t) {
  const [r, g, b] = hexToRgb(hex);
  const m = (c) => Math.round(t < 0 ? c * (1 + t) : c + (255 - c) * t);
  const toHex = (c) => Math.max(0, Math.min(255, m(c))).toString(16).padStart(2, '0');
  return '#' + toHex(r) + toHex(g) + toHex(b);
}
function hueAlpha(hex, a) {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r},${g},${b},${a})`;
}

/* ---------- Sections ---------- */

function Hero() {
  return (
    <section className="hero" data-screen-label="Hero">
      <div className="col hero-inner">
        <span className="eyebrow">Caressence &middot; Anti-Itch Body Oil</span>
        <h1 className="headline">
          That crazy <span className="strike">itch</span> right after your shower,
          <br/>
          <span className="accent">we made this oil to stop that!</span>
        </h1>
        <p className="hero-sub">Apply on damp skin, right after the shower. Feel the itch calm down within 3 minutes &mdash; not hours.</p>

        <div className="hero-stage">
          <img src="assets/product-50ml.webp" width="1080" height="1935" alt="Caressence Anti-Itch Body Oil 50ml" />
          <div className="badges">
            <span className="badge-foil">Fast Soothing</span>
            <span className="badge-foil alt">All Skin Types</span>
          </div>
        </div>

        <div className="hero-meta">
          <div><b>3 min</b>Itch calms down</div>
          <div><b>0%</b>Sticky residue</div>
          <div><b>21 day</b>Money-back</div>
        </div>
      </div>
    </section>
  );
}

function Story({ ctaLabel, ctaColor }) {
  return (
    <section className="story tight" data-screen-label="Story">
      <div className="col">
        <span className="kicker">The 3-minute moment</span>
        <h2>You step out clean. Then the <em>itch</em> begins.</h2>
        <p>The moment you step out of the shower feeling clean &mdash; and then the annoying, relentless itch starts from your legs to all over your skin, <strong>and nothing seems to stop it fast enough.</strong></p>
        <p>We made <span className="accent">Caressence Anti-Itch Body Oil</span> specifically for that moment. Apply it right after your shower on damp skin and feel the itch calm down within <strong>3 minutes &mdash; not hours.</strong></p>
        <div className="pullquote">
          "The reduction of itching within 5 mins."
          <span className="min">&mdash; Product tester</span>
        </div>

        <div style={{ marginTop: 28 }}>
          <CtaButton label={ctaLabel} hue={ctaColor} onClick={() => scrollTo("#sizes")} />
          <div className="cta-note">
            <span>Nationwide shipping</span>
            
          </div>
        </div>
      </div>
    </section>
  );
}

const REVIEWS_TOP = [
  { num: 1, name: "Isaac", quote: "The itch calmed in less than 5 minutes. I'm shocked.", duration: "0:38", tone: "warm", video: "videos/review-1.mp4", poster: "videos/review-1-poster.jpg" },
  { num: 2, name: "Juwon", quote: "Not sticky. Absorbs fast. I cream every morning now.", duration: "0:52", tone: "sage", video: "videos/review-2.mp4", poster: "videos/review-2-poster.jpg" },
  { num: 3, name: "Josephine", quote: "After the shower, the burn-itch is gone. Honestly worth it.", duration: "0:44", tone: "deep", video: "videos/review-3.mp4", poster: "videos/review-3-poster.jpg" },
];

const REVIEWS_BOTTOM = [
  { num: 4, name: "Healer", quote: "My skin used to itch so bad after bathing. Not anymore.", duration: "1:02", tone: "warm", video: "videos/review-4.mp4", poster: "videos/review-4-poster.jpg" },
];

function VideoCard({ num, name, quote, duration, tone, video, poster }) {
  const [playing, setPlaying] = useState(false);
  const vidRef = useRef(null);

  const playVideo = (el) => {
    vidRef.current = el;
    if (el) el.play().catch(() => {});
  };

  const handleClick = () => {
    if (vidRef.current) {
      vidRef.current.paused ? vidRef.current.play() : vidRef.current.pause();
    } else {
      setPlaying(true);
    }
  };

  const tones = {
    warm: 'linear-gradient(135deg, rgba(13,34,18,.55), rgba(173,102,48,.65)), repeating-linear-gradient(45deg, rgba(214,194,159,.06) 0 14px, transparent 14px 28px), #1F3217',
    sage: 'linear-gradient(135deg, rgba(53,76,48,.6), rgba(214,194,159,.25)), repeating-linear-gradient(45deg, rgba(214,194,159,.06) 0 14px, transparent 14px 28px), #354C30',
    deep: 'linear-gradient(135deg, rgba(13,34,18,.85), rgba(91,71,26,.45)), repeating-linear-gradient(45deg, rgba(214,194,159,.06) 0 14px, transparent 14px 28px), #0D2212',
  };

  const cls = "video" + (playing ? " playing" : "");

  return (
    <div className={cls} onClick={handleClick}>
      {playing && video ? (
        <video ref={playVideo} className="vid" src={video} poster={poster} preload="none" playsInline controls={false} />
      ) : poster ? (
        <div className="thumb" style={{ backgroundImage: `url(${poster})` }}></div>
      ) : (
        <div className="thumb" style={{ background: tones[tone] || tones.warm }}></div>
      )}
      <div className="duration">▶ {duration}</div>
      {num ? <div className="reviewnum">Review {num}</div> : null}
      <div className="quote">"{quote}"</div>
      <div className="play" role="button" aria-label={playing ? "Pause video" : "Play video"}>
        <svg viewBox="0 0 12 14" fill="currentColor"><path d="M0 0v14l12-7z"/></svg>
      </div>
      <div className="meta">
        <div className="name">{name}</div>
        <div className="stars">★★★★★</div>
      </div>
    </div>
  );
}

function ReviewsTop() {
  return (
    <section className="reviews tight" data-screen-label="Top Reviews">
      <div className="reviews-head col">
        <span className="kicker">Product testers</span>
        <h2>They felt it in <em>minutes</em>.</h2>
        <div className="review-stats">
          <span className="stars">★★★★★</span>
          <span>From our tester panel</span>
        </div>
      </div>
      <div className="reviews-track">
        {REVIEWS_TOP.map((r, i) => <VideoCard key={i} {...r} />)}
      </div>
      <div className="col" style={{ marginTop: 18 }}>
        <CtaButton label="I want to get this product" onClick={() => scrollTo("#sizes")} />
      </div>
    </section>
  );
}

function HowItWorks() {
  const benefits = [
    {
      title: "Fast-acting relief from post-bath itch",
      timing: "Within 3 minutes",
      body: "These ingredients calm irritation quickly and comfort dry, itchy skin the moment you step out of the shower.",
      ingredients: ["Hemp Seed Oil", "Bisabolol", "Jojoba Oil"],
    },
    {
      title: "Deeply nourishes to restore the skin's protective barrier",
      timing: "Day after day",
      body: "Replenishes moisture and helps strengthen the skin barrier so dryness doesn't keep coming back.",
      ingredients: ["Squalane", "Jojoba Oil", "Caprylic / Capric Triglyceride"],
    },
    {
      title: "Smooths and improves skin texture with regular use",
      timing: "Over weeks",
      body: "Vitamin-rich emollients work over time to soften, even, and refine the surface of the skin.",
      ingredients: ["Squalane", "Vitamin E", "Caprylic / Capric Triglyceride"],
    },
  ];

  return (
    <section className="how" data-screen-label="How it works">
      <div className="col">
        <span className="kicker">How it works</span>
        <h2>Three things, one bottle. <em>No drama.</em></h2>
        <p className="lede" style={{ maxWidth: '34ch' }}>Caressence is a simple, ingredient-led oil. Here's exactly what it does &mdash; and what it does it with.</p>

        {benefits.map((b, i) => (
          <div className="benefit" key={i}>
            <div className="num">{String(i + 1).padStart(2, "0")}</div>
            <div>
              <div className="timing">{b.timing}</div>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
              <div className="powered-by">Powered by</div>
              <ul className="ingredients">
                {b.ingredients.map((ing, j) => <li key={j}>{ing}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowToUse() {
  return (
    <section className="howuse" data-screen-label="How to use">
      <div className="col">
        <span className="kicker">How to use</span>
        <h2>Damp skin, three pumps, <em>done.</em></h2>

        <div className="steps">
          <div className="step">
            <div className="dot"></div>
            <div className="text">
              <b>Step out of the shower</b>
              Don't dry off completely. Skin should still be damp.
            </div>
          </div>
          <div className="step">
            <div className="dot"></div>
            <div className="text">
              <b>Apply generously, all over</b>
              Warm a few drops between palms. Massage in until absorbed.
            </div>
          </div>
          <div className="step">
            <div className="dot"></div>
            <div className="text">
              <b>Pat dry, get dressed</b>
              No towel-rub needed. The itch calms within minutes.
            </div>
          </div>
        </div>

        <div className="application-meter">
          <div className="label">
            <span>Time to relief</span>
            <span>~3 min</span>
          </div>
          <div className="timeline-bar"></div>
          <div className="timeline-ticks">
            <span>0:00</span>
            <span>1:00</span>
            <span>2:00</span>
            <span><b>3:00 &mdash; calm</b></span>
            <span>5:00</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sizes({ ctaLabel, ctaColor }) {
  const [sel, setSel] = useState("100");
  return (
    <section className="sizes" id="sizes" data-screen-label="Choose size">
      <div className="col">
        <span className="kicker">Choose your size</span>
        <h2>Try it, or <em>commit</em> to it.</h2>

        <label className="size-card" onClick={() => setSel("50")} style={sel === "50" ? { borderColor: 'var(--c-copper)', boxShadow: '0 18px 40px -16px rgba(173,102,48,.25)' } : {}}>
          <div className="img">
            <img src="assets/product-50ml.webp" width="1080" height="1935" alt="50ml Caressence" />
          </div>
          <div className="body">
            <div className="vol">50<em>ML</em></div>
            <div className="tag">Perfect for trial</div>
            <div className="price">
              <span className="currency">₦</span>
              <span className="amount">9,800</span>
            </div>
            <div className="perml">196 / ml &middot; ~30 applications</div>
          </div>
        </label>

        <label className="size-card featured" onClick={() => setSel("100")} style={sel !== "100" ? { borderColor: 'rgba(53,76,48,.16)', boxShadow: 'none' } : {}}>
          <div className="ribbon">Best Value</div>
          <div className="img">
            <img src="assets/product-100ml.webp" width="941" height="1672" alt="100ml Caressence" />
          </div>
          <div className="body">
            <div className="vol">100<em>ML</em></div>
            <div className="tag">Save ₦1,601 &middot; best value</div>
            <div className="price">
              <span className="currency">₦</span>
              <span className="amount">17,999</span>
            </div>
            <div className="perml">180 / ml &middot; ~60 applications</div>
          </div>
        </label>

        <div style={{ marginTop: 28 }}>
          <CtaButton label={ctaLabel} hue={ctaColor} onClick={() => alert(`Selected ${sel}ml \u2014 checkout flow`)} />
          <div className="cta-note">
            <span>Ships in 24h</span>
            <span>Nationwide</span>
            
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsBottom() {
  return (
    <section className="reviews tight" data-screen-label="More Reviews">
      <div className="reviews-head col">
        <span className="kicker">One more</span>
        <h2>From the same skin you have.</h2>
      </div>
      <div className="reviews-track" style={{ gridAutoColumns: '88%' }}>
        {REVIEWS_BOTTOM.map((r, i) => <VideoCard key={i} {...r} />)}
      </div>
    </section>
  );
}

function ChatBand() {
  return (
    <section className="chat-band tight" data-screen-label="Chat">
      <div className="col">
        <span className="kicker" style={{ display: 'block', textAlign: 'center', marginBottom: 8 }}>Need help?</span>
        <h2 style={{ textAlign: 'center' }}>Have questions?</h2>
        <p>Chat with a real human. We answer within minutes.</p>
        <a className="chat-btn" href="https://wa.me/+2349037232316" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A10 10 0 0 0 4.18 17.96L3 21l3.09-1.16a10 10 0 0 0 4.91 1.27h.01a10 10 0 0 0 9.99-9.97 9.93 9.93 0 0 0-2.95-7.23ZM12 19.36h-.01a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-1.83.69.69-1.78-.2-.31a8.3 8.3 0 1 1 5.88 2.74Zm4.55-6.21c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.65.81-.8.98-.15.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23a7.5 7.5 0 0 1-1.39-1.73c-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.78 2.71 4.31 3.8.6.26 1.07.42 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3Z"/></svg>
          Chat with us on WhatsApp
        </a>
        <div className="cta-note" style={{ justifyContent: 'center' }}>
          <span>Mon&ndash;Sat &middot; 9am&ndash;8pm WAT</span>
        </div>
      </div>
    </section>
  );
}

function Guarantee({ showSeal }) {
  return (
    <section className="guarantee" data-screen-label="Guarantee">
      <div className="col">
        {showSeal !== false && (
          <div className="seal">
            <div className="seal-inner">
              <div>
                <div className="big">21</div>
                <div className="small">Day Promise</div>
              </div>
            </div>
          </div>
        )}
        <span className="kicker" style={{ color: 'var(--c-sand)', justifyContent: 'center' }}>Our promise to you</span>
        <h2>If it doesn't soothe, <em>we refund.</em></h2>
        <p>If Caressence doesn't soothe your post-bath itch within 21 days, we'll refund you. <strong style={{ color: 'var(--c-sand)' }}>No questions asked.</strong></p>
        <div className="signoff">&mdash; With care, the Caressence team</div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="row" style={{ marginBottom: 10 }}>
        <a href="https://www.instagram.com/_caressence" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.tiktok.com/@_caressence" target="_blank" rel="noopener noreferrer">TikTok</a>
        <a href="https://wa.me/+2349037232316" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
      <div className="copy">&copy; 2026 Caressence Personal Care &amp; Cosmetics</div>
    </footer>
  );
}

/* ---------- App ---------- */

function scrollTo(sel) {
  const el = document.querySelector(sel);
  if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
}

const DEFAULTS = {
  ctaColor: "#9B2614",
  ctaLabel: "I want to get this product",
  headlineFont: "Cormorant Garamond",
  showSeal: false,
  showStock: true,
};

function App() {
  const { ctaColor, ctaLabel, headlineFont, showSeal, showStock } = DEFAULTS;

  useEffect(() => {
    document.documentElement.style.setProperty('--display', `"${headlineFont}", Georgia, serif`);
  }, [headlineFont]);

  return (
    <>
      <Topbar stock={showStock} />
      <Hero />
      <Story ctaLabel={ctaLabel} ctaColor={ctaColor} />
      <ReviewsTop />
      <HowItWorks />
      <HowToUse />
      <Sizes ctaLabel={ctaLabel} ctaColor={ctaColor} />
      <ReviewsBottom />
      <ChatBand />
      <Guarantee showSeal={showSeal} />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
