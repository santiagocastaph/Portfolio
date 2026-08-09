console.log("HERO SCRIPT LOADED");
import { gsap } from "gsap";

document.addEventListener("astro:page-load", () => {

  const hero = document.querySelector<HTMLElement>("#hero");
  const content = document.querySelector<HTMLElement>("#hero-content");
  const scroll = document.querySelector<HTMLElement>("#hero-scroll");

  if (!hero || !content || !scroll) return;

  function updateHero() {

    const rect = hero.getBoundingClientRect();

    const progress = Math.min(
      Math.max(-rect.top / rect.height, 0),
      1
    );

    gsap.set(content, {
      opacity: 1 - progress,
      y: progress * 80,
      scale: 1 - progress * 0.02
    });

    gsap.set(scroll, {
      opacity: 1 - progress * 2,
      y: progress * 30
    });

  }

  updateHero();

  window.addEventListener("scroll", updateHero, {
    passive: true
  });

});