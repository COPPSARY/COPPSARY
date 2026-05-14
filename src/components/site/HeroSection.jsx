import { useEffect, useRef } from 'react';
import VariableProximity from '../animation/VariableProximity.jsx';

export default function HeroSection({ hero }) {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const mediaRef = useRef(null);
  const textRef = useRef(null);
  const wordmarkRef = useRef(null);
  const titleLines = hero.title.split('\n');

  useEffect(() => {
    const section = sectionRef.current;
    const media = mediaRef.current;
    const text = textRef.current;
    const wordmark = wordmarkRef.current;
    if (!section || !media || !text) return;

    let raf = 0;
    let pending = false;

    const update = () => {
      pending = false;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const total = section.offsetHeight - vh;
      const progress = Math.min(1, Math.max(0, -rect.top / total));

      // phase A (0 → 0.55): video rises from bottom and scales up to fill
      // phase B (0.55 → 1): hold full-frame video, text already gone
      const reveal = Math.min(1, progress / 0.55);
      const ease = reveal < 0.5
        ? 2 * reveal * reveal
        : 1 - Math.pow(-2 * reveal + 2, 2) / 2;

      // video starts as a small framed window near the bottom, ends full-bleed
      const startTranslate = 38; // vh below center
      const translateY = startTranslate * (1 - ease);
      const startScaleX = 0.55;
      const startScaleY = 0.42;
      const scaleX = startScaleX + (1 - startScaleX) * ease;
      const scaleY = startScaleY + (1 - startScaleY) * ease;
      const radius = 18 * (1 - ease);

      media.style.transform = `translate3d(0, ${translateY}vh, 0) scale(${scaleX}, ${scaleY})`;
      media.style.borderRadius = `${radius}px`;
      media.style.opacity = String(0.15 + 0.85 * ease);

      // text: visible first, fades and lifts as the video takes over
      const textFade = Math.min(1, progress / 0.45);
      const textY = -60 * textFade;
      text.style.transform = `translate3d(0, ${textY}px, 0)`;
      text.style.opacity = String(Math.max(0, 1 - textFade * 1.15));

      // wordmark: only appears once the video is mostly full-bleed
      if (wordmark) {
        const markIn = Math.min(1, Math.max(0, (progress - 0.5) / 0.35));
        const markScale = 0.94 + markIn * 0.06;
        wordmark.style.opacity = String(markIn);
        wordmark.style.transform = `translate(-50%, -50%) scale(${markScale})`;
        wordmark.style.letterSpacing = `${0.18 + markIn * 0.06}em`;
      }
    };

    const onScroll = () => {
      if (pending) return;
      pending = true;
      raf = requestAnimationFrame(update);
    };

    let snapping = false;
    let lastSnapAt = 0;
    const snapTo = (top) => {
      snapping = true;
      lastSnapAt = performance.now();
      const done = () => {
        setTimeout(() => { snapping = false; }, 120);
      };
      if (window.__lenis && typeof window.__lenis.scrollTo === 'function') {
        window.__lenis.scrollTo(top, {
          duration: 0.85,
          easing: (t) => 1 - Math.pow(1 - t, 3),
          onComplete: done,
        });
      } else {
        window.scrollTo({ top, behavior: 'smooth' });
        setTimeout(done, 850);
      }
    };

    const onWheel = (e) => {
      if (snapping) return;
      if (performance.now() - lastSnapAt < 250) return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const total = section.offsetHeight - vh;
      if (total <= 0) return;
      const scrolled = -rect.top;
      const progress = scrolled / total;
      if (progress <= 0.06 || progress >= 0.94) return;
      const sectionTop = window.scrollY + rect.top;
      if (e.deltaY > 0) {
        snapTo(sectionTop + total);
      } else if (e.deltaY < 0) {
        snapTo(sectionTop);
      }
    };

    let touchStartY = 0;
    const onTouchStart = (e) => {
      touchStartY = e.touches[0]?.clientY ?? 0;
    };
    const onTouchMove = (e) => {
      if (snapping) return;
      const dy = touchStartY - (e.touches[0]?.clientY ?? 0);
      if (Math.abs(dy) < 18) return;
      onWheel({ deltaY: dy });
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  return (
    <section
      className="hero-jack"
      data-header-dark
      ref={(el) => { sectionRef.current = el; containerRef.current = el; }}
    >
      <div className="hero-jack__stage">
        <div className="hero-jack__media" ref={mediaRef}>
          <video
            muted
            loop
            autoPlay
            playsInline
            preload="auto"
            className="hero-jack__video"
          >
            <source src="/AUREA-STUDIO/dark-veil-1778647438372.mp4" type="video/mp4" />
            <source src="/AUREA-STUDIO/dark-veil-1778647438372.mp4" type="video/webm" />
          </video>
          <div className="hero-jack__scrim" />
          <div className="hero-jack__wordmark" ref={wordmarkRef} aria-hidden="true">AUREA</div>
        </div>

        <div className="hero-jack__text section-shell" ref={textRef}>
          <div className="hero-copy">
            <span className="eyebrow" style={{ userSelect: 'text', cursor: 'default' }}>
              <VariableProximity
                label={hero.eyebrow}
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 700"
                containerRef={containerRef}
                radius={120}
                falloff="gaussian"
                style={{ fontFamily: 'inherit', fontSize: 'inherit', letterSpacing: 'inherit' }}
              />
            </span>
            <h1
              className="display-title hero-vp-title"
              style={{ userSelect: 'text', cursor: 'default' }}
            >
              {titleLines.map((line, i) => (
                <span key={i} style={{ display: 'block' }}>
                  <VariableProximity
                    label={line}
                    fromFontVariationSettings="'wght' 300, 'wdth' 100"
                    toFontVariationSettings="'wght' 900, 'wdth' 125"
                    containerRef={containerRef}
                    radius={220}
                    falloff="gaussian"
                    style={{ fontSize: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit' }}
                  />
                </span>
              ))}
            </h1>
            <a href="/#projects" className="hero-cta">See Our Work</a>
          </div>
        </div>
      </div>
    </section>
  );
}
