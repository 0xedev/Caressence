function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React, ReactDOM */
const {
  useState,
  useEffect,
  useRef
} = React;
const WA_NUMBER = "+2349037232316";
function orderWhatsApp(size) {
  if (size === "50") {
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi Caressence! I'd like to order the 50ml Anti-Itch Body Oil (₦9,800).")}`, '_blank');
  } else if (size === "100") {
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi Caressence! I'd like to order the 100ml Anti-Itch Body Oil (₦17,999).")}`, '_blank');
  } else {
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi Caressence! I'm interested in the Anti-Itch Body Oil.")}`, '_blank');
  }
}

/* ---------- Reusable bits ---------- */

function Topbar({
  stock
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "topbar-inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "brandmark",
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    className: "brand-logo",
    src: "assets/logo-orange.png",
    alt: "Caressence"
  })), /*#__PURE__*/React.createElement("div", {
    className: "right"
  }, stock ? /*#__PURE__*/React.createElement("span", {
    className: "pill-stock"
  }, "In stock \xB7 Ships nationwide") : null)));
}
function CtaButton({
  label,
  onClick,
  hue
}) {
  const style = hue ? {
    background: `linear-gradient(180deg, ${hue} 0%, ${shade(hue, -0.18)} 100%)`,
    boxShadow: `0 1px 0 rgba(255,255,255,.18) inset, 0 -2px 0 rgba(0,0,0,.18) inset, 0 14px 30px -8px ${hueAlpha(hue, .45)}, 0 4px 12px -2px ${hueAlpha(shade(hue, -0.18), .35)}`
  } : {};
  return /*#__PURE__*/React.createElement("button", {
    className: "cta",
    onClick: onClick,
    style: style
  }, label || "I want to get this product");
}
function hexToRgb(h) {
  const m = h.replace('#', '');
  const v = m.length === 3 ? m.split('').map(c => c + c).join('') : m;
  return [parseInt(v.slice(0, 2), 16), parseInt(v.slice(2, 4), 16), parseInt(v.slice(4, 6), 16)];
}
function shade(hex, t) {
  const [r, g, b] = hexToRgb(hex);
  const m = c => Math.round(t < 0 ? c * (1 + t) : c + (255 - c) * t);
  const toHex = c => Math.max(0, Math.min(255, m(c))).toString(16).padStart(2, '0');
  return '#' + toHex(r) + toHex(g) + toHex(b);
}
function hueAlpha(hex, a) {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r},${g},${b},${a})`;
}

/* ---------- Sections ---------- */

function Hero({
  ctaColor
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    "data-screen-label": "Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col hero-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Caressence \xB7 Anti-Itch Body Oil"), /*#__PURE__*/React.createElement("h1", {
    className: "headline"
  }, "That crazy ", /*#__PURE__*/React.createElement("span", {
    className: "strike"
  }, "itch"), " right after your shower?", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "We made this oil to stop it!")), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "Apply on damp skin right after shower and feel the itch disappear within 3 minutes."), /*#__PURE__*/React.createElement("div", {
    className: "hero-stage"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/product-50ml.webp",
    width: "1080",
    height: "1935",
    alt: "Caressence Anti-Itch Body Oil 50ml"
  }), /*#__PURE__*/React.createElement("div", {
    className: "badges"
  }, /*#__PURE__*/React.createElement("span", {
    className: "badge-foil"
  }, "Fast Soothing"), /*#__PURE__*/React.createElement("span", {
    className: "badge-foil alt"
  }, "All Skin Types"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "3 mins"), "Itch disappears"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "0%"), "Sticky residue"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "21 days"), "Money-back")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(CtaButton, {
    label: "I want to get this product",
    hue: ctaColor,
    onClick: () => orderWhatsApp()
  }), /*#__PURE__*/React.createElement("div", {
    className: "cta-note"
  }, /*#__PURE__*/React.createElement("span", null, "Nationwide shipping"), /*#__PURE__*/React.createElement("span", null, "21-day refund")))));
}
function Story({
  ctaLabel,
  ctaColor
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "story tight",
    "data-screen-label": "Story"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker"
  }, "The 3-minute moment"), /*#__PURE__*/React.createElement("p", null, "The moment you step out of the shower feeling clean \u2014 and then the annoying, relentless itch starts from your legs to all over your skin, ", /*#__PURE__*/React.createElement("strong", null, "and nothing seems to stop it fast enough.")), /*#__PURE__*/React.createElement("p", null, "We made ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "Caressence Anti-Itch Body Oil"), " specifically for that moment. Apply it right after your shower on damp skin and feel the itch disappear within ", /*#__PURE__*/React.createElement("strong", null, "3 minutes \u2014 not hours.")), /*#__PURE__*/React.createElement("div", {
    className: "pullquote"
  }, "\"The reduction of itching within 3 mins.\"", /*#__PURE__*/React.createElement("span", {
    className: "min"
  }, "\u2014 Product tester"))));
}
const REVIEWS_TOP = [{
  num: 1,
  name: "Isaac",
  quote: "The itch calmed in less than 5 minutes. I'm shocked.",
  duration: "0:38",
  tone: "warm",
  video: "videos/review-1.mp4",
  poster: "videos/review-1-poster.jpg"
}, {
  num: 2,
  name: "Josephine",
  quote: "After the shower, the burn-itch is gone. Honestly worth it.",
  duration: "0:44",
  tone: "sage",
  video: "videos/review-2.mp4",
  poster: "videos/review-2-poster.jpg"
}, {
  num: 3,
  name: "Juwon",
  quote: "Not sticky. Absorbs fast. I cream every morning now.",
  duration: "0:52",
  tone: "deep",
  video: "videos/review-3.mp4",
  poster: "videos/review-3-poster.jpg"
}];
const REVIEWS_BOTTOM = [{
  num: 4,
  name: "Healer",
  quote: "My skin used to itch so bad after bathing. Not anymore.",
  duration: "1:02",
  tone: "warm",
  video: "videos/review-4.mp4",
  poster: "videos/review-4-poster.jpg"
}];
function VideoCard({
  num,
  name,
  quote,
  duration,
  tone,
  video,
  poster
}) {
  const [playing, setPlaying] = useState(false);
  const vidRef = useRef(null);
  const playVideo = el => {
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
    deep: 'linear-gradient(135deg, rgba(13,34,18,.85), rgba(91,71,26,.45)), repeating-linear-gradient(45deg, rgba(214,194,159,.06) 0 14px, transparent 14px 28px), #0D2212'
  };
  const cls = "video" + (playing ? " playing" : "");
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    onClick: handleClick
  }, playing && video ? /*#__PURE__*/React.createElement("video", {
    ref: playVideo,
    className: "vid",
    src: video,
    poster: poster,
    preload: "none",
    playsInline: true,
    controls: false
  }) : poster ? /*#__PURE__*/React.createElement("div", {
    className: "thumb",
    style: {
      backgroundImage: `url(${poster})`
    }
  }) : /*#__PURE__*/React.createElement("div", {
    className: "thumb",
    style: {
      background: tones[tone] || tones.warm
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "duration"
  }, "\u25B6 ", duration), num ? /*#__PURE__*/React.createElement("div", {
    className: "reviewnum"
  }, "Review ", num) : null, /*#__PURE__*/React.createElement("div", {
    className: "quote"
  }, "\"", quote, "\""), /*#__PURE__*/React.createElement("div", {
    className: "play",
    role: "button",
    "aria-label": playing ? "Pause video" : "Play video"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 12 14",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0v14l12-7z"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "stars"
  }, "\u2605\u2605\u2605\u2605\u2605")));
}
function ReviewsTop() {
  return /*#__PURE__*/React.createElement("section", {
    className: "reviews tight",
    "data-screen-label": "Top Reviews"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reviews-head col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker"
  }, "Product users"), /*#__PURE__*/React.createElement("h2", null, "They felt it in ", /*#__PURE__*/React.createElement("em", null, "minutes"), "."), /*#__PURE__*/React.createElement("div", {
    className: "review-stats"
  }, /*#__PURE__*/React.createElement("span", {
    className: "stars"
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("span", null, "Product reviews"))), /*#__PURE__*/React.createElement("div", {
    className: "reviews-track"
  }, REVIEWS_TOP.map((r, i) => /*#__PURE__*/React.createElement(VideoCard, _extends({
    key: i
  }, r)))), /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      marginTop: 18
    }
  }));
}
function HowItWorks() {
  const benefits = [{
    title: "Fast-acting relief from post-bath itch",
    timing: "Within 3 minutes",
    body: "These ingredients calm irritation quickly and comfort dry, itchy skin the moment you step out of the shower.",
    ingredients: ["Hemp Seed Oil", "Bisabolol", "Jojoba Oil"]
  }, {
    title: "Deeply nourishes to restore the skin's protective barrier",
    timing: "Day after day",
    body: "Replenishes moisture and helps strengthen the skin barrier so dryness doesn't keep coming back.",
    ingredients: ["Squalane", "Jojoba Oil", "Caprylic / Capric Triglyceride"]
  }, {
    title: "Smooths and improves skin texture with regular use",
    timing: "Over weeks",
    body: "Vitamin-rich emollients work over time to soften, even, and refine the surface of the skin.",
    ingredients: ["Squalane", "Vitamin E", "Caprylic / Capric Triglyceride"]
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "how",
    "data-screen-label": "How it works"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker"
  }, "How it works"), /*#__PURE__*/React.createElement("h2", null, "Three things, one bottle. ", /*#__PURE__*/React.createElement("em", null, "No drama.")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      maxWidth: '34ch'
    }
  }, "Caressence is a simple, ingredient-led oil. Here's exactly what it does \u2014 and what it does it with."), benefits.map((b, i) => /*#__PURE__*/React.createElement("div", {
    className: "benefit",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "timing"
  }, b.timing), /*#__PURE__*/React.createElement("h3", null, b.title), /*#__PURE__*/React.createElement("p", null, b.body), /*#__PURE__*/React.createElement("div", {
    className: "powered-by"
  }, "Powered by"), /*#__PURE__*/React.createElement("ul", {
    className: "ingredients"
  }, b.ingredients.map((ing, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, ing))))))));
}
function HowToUse() {
  return /*#__PURE__*/React.createElement("section", {
    className: "howuse",
    "data-screen-label": "How to use"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker"
  }, "How to use"), /*#__PURE__*/React.createElement("h2", null, "Damp skin, three pumps, ", /*#__PURE__*/React.createElement("em", null, "done.")), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, /*#__PURE__*/React.createElement("div", {
    className: "step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, /*#__PURE__*/React.createElement("b", null, "Step out of the shower"), "Don't dry off completely. Skin should still be damp.")), /*#__PURE__*/React.createElement("div", {
    className: "step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, /*#__PURE__*/React.createElement("b", null, "Apply generously, all over"), "Warm a few drops between palms. Massage in until absorbed.")), /*#__PURE__*/React.createElement("div", {
    className: "step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, /*#__PURE__*/React.createElement("b", null, "Pat dry, get dressed"), "No towel-rub needed. The itch calms within minutes."))), /*#__PURE__*/React.createElement("div", {
    className: "application-meter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, /*#__PURE__*/React.createElement("span", null, "Time to relief"), /*#__PURE__*/React.createElement("span", null, "~3 min")), /*#__PURE__*/React.createElement("div", {
    className: "timeline-bar"
  }), /*#__PURE__*/React.createElement("div", {
    className: "timeline-ticks"
  }, /*#__PURE__*/React.createElement("span", null, "0:00"), /*#__PURE__*/React.createElement("span", null, "1:00"), /*#__PURE__*/React.createElement("span", null, "2:00"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "3:00 \u2014 calm")), /*#__PURE__*/React.createElement("span", null, "5:00")))));
}
function Sizes({
  ctaLabel,
  ctaColor
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "sizes",
    id: "sizes",
    "data-screen-label": "Choose size"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker"
  }, "Choose your size"), /*#__PURE__*/React.createElement("h2", null, "Try it, or ", /*#__PURE__*/React.createElement("em", null, "commit"), " to it."), /*#__PURE__*/React.createElement("div", {
    className: "size-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "img"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/product-50ml.webp",
    width: "1080",
    height: "1935",
    alt: "50ml Caressence"
  })), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vol"
  }, "50", /*#__PURE__*/React.createElement("em", null, "ML")), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, "Perfect for trial"), /*#__PURE__*/React.createElement("div", {
    className: "price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "currency"
  }, "\u20A6"), /*#__PURE__*/React.createElement("span", {
    className: "amount"
  }, "9,800")), /*#__PURE__*/React.createElement("div", {
    className: "perml"
  }, "\xB7 ~30 applications"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(CtaButton, {
    label: "I want this",
    hue: ctaColor,
    onClick: () => orderWhatsApp("50")
  })))), /*#__PURE__*/React.createElement("div", {
    className: "size-card featured"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ribbon"
  }, "Best Value"), /*#__PURE__*/React.createElement("div", {
    className: "img"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/product-100ml.webp",
    width: "941",
    height: "1672",
    alt: "100ml Caressence"
  })), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vol"
  }, "100", /*#__PURE__*/React.createElement("em", null, "ML")), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, "Save \u20A61,601 \xB7 best value"), /*#__PURE__*/React.createElement("div", {
    className: "price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "currency"
  }, "\u20A6"), /*#__PURE__*/React.createElement("span", {
    className: "amount"
  }, "17,999")), /*#__PURE__*/React.createElement("div", {
    className: "perml"
  }, "\xB7 ~60 applications"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(CtaButton, {
    label: "I want this",
    hue: ctaColor,
    onClick: () => orderWhatsApp("100")
  })))), /*#__PURE__*/React.createElement("div", {
    className: "cta-note",
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", null, "Ships in 24h"), /*#__PURE__*/React.createElement("span", null, "Nationwide"), /*#__PURE__*/React.createElement("span", null, "21-day refund"))));
}
function ReviewsBottom() {
  return /*#__PURE__*/React.createElement("section", {
    className: "reviews tight",
    "data-screen-label": "More Reviews"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reviews-head col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker"
  }, "One more"), /*#__PURE__*/React.createElement("h2", null, "From the same skin you have.")), /*#__PURE__*/React.createElement("div", {
    className: "reviews-track",
    style: {
      gridAutoColumns: '88%'
    }
  }, REVIEWS_BOTTOM.map((r, i) => /*#__PURE__*/React.createElement(VideoCard, _extends({
    key: i
  }, r)))));
}
function ChatBand() {
  return /*#__PURE__*/React.createElement("section", {
    className: "chat-band tight",
    "data-screen-label": "Chat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker",
    style: {
      display: 'block',
      textAlign: 'center',
      marginBottom: 8
    }
  }, "Need help?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: 'center'
    }
  }, "Have questions?"), /*#__PURE__*/React.createElement("p", null, "Chat with a real human. We answer within minutes."), /*#__PURE__*/React.createElement("a", {
    className: "chat-btn",
    href: "https://wa.me/+2349037232316",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19.05 4.91A10 10 0 0 0 4.18 17.96L3 21l3.09-1.16a10 10 0 0 0 4.91 1.27h.01a10 10 0 0 0 9.99-9.97 9.93 9.93 0 0 0-2.95-7.23ZM12 19.36h-.01a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-1.83.69.69-1.78-.2-.31a8.3 8.3 0 1 1 5.88 2.74Zm4.55-6.21c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.65.81-.8.98-.15.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23a7.5 7.5 0 0 1-1.39-1.73c-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.78 2.71 4.31 3.8.6.26 1.07.42 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3Z"
  })), "Chat with us on WhatsApp"), /*#__PURE__*/React.createElement("div", {
    className: "cta-note",
    style: {
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Mon\u2013Sat \xB7 9am\u20138pm WAT"))));
}
function Guarantee({
  showSeal
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "guarantee",
    "data-screen-label": "Guarantee"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, showSeal !== false && /*#__PURE__*/React.createElement("div", {
    className: "seal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "seal-inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, "21"), /*#__PURE__*/React.createElement("div", {
    className: "small"
  }, "Day Promise")))), /*#__PURE__*/React.createElement("span", {
    className: "kicker",
    style: {
      color: 'var(--c-sand)',
      justifyContent: 'center'
    }
  }, "Our promise to you"), /*#__PURE__*/React.createElement("h2", null, "If it doesn't soothe, ", /*#__PURE__*/React.createElement("em", null, "we refund.")), /*#__PURE__*/React.createElement("p", null, "If Caressence doesn't soothe your post-bath itch within 21 days, we'll refund you. ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--c-sand)'
    }
  }, "No questions asked.")), /*#__PURE__*/React.createElement("div", {
    className: "signoff"
  }, "\u2014 With care, the Caressence team")));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/_caressence",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Instagram"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.tiktok.com/@_caressence",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "TikTok"), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/+2349037232316",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "WhatsApp")), /*#__PURE__*/React.createElement("div", {
    className: "copy"
  }, "\xA9 2026 Caressence Personal Care & Cosmetics"));
}

/* ---------- App ---------- */

function scrollTo(sel) {
  const el = document.querySelector(sel);
  if (el) window.scrollTo({
    top: el.offsetTop - 60,
    behavior: 'smooth'
  });
}
const DEFAULTS = {
  ctaColor: "#9B2614",
  ctaLabel: "Buy",
  headlineFont: "Cormorant Garamond",
  showSeal: false,
  showStock: true
};
function App() {
  const {
    ctaColor,
    ctaLabel,
    headlineFont,
    showSeal,
    showStock
  } = DEFAULTS;
  useEffect(() => {
    document.documentElement.style.setProperty('--display', `"${headlineFont}", Georgia, serif`);
  }, [headlineFont]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Topbar, {
    stock: showStock
  }), /*#__PURE__*/React.createElement(Hero, {
    ctaColor: ctaColor
  }), /*#__PURE__*/React.createElement(Story, {
    ctaLabel: ctaLabel,
    ctaColor: ctaColor
  }), /*#__PURE__*/React.createElement(ReviewsTop, null), /*#__PURE__*/React.createElement(HowToUse, null), /*#__PURE__*/React.createElement(Sizes, {
    ctaLabel: ctaLabel,
    ctaColor: ctaColor
  }), /*#__PURE__*/React.createElement(ReviewsBottom, null), /*#__PURE__*/React.createElement(ChatBand, null), /*#__PURE__*/React.createElement(Guarantee, {
    showSeal: showSeal
  }), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
