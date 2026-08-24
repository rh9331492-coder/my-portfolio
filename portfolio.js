gsap.registerPlugin(ScrollTrigger);

gsap.to(".wrapper-404", {
    x: "-360vw",
    ease: "none",
    scrollTrigger: {
        trigger: ".about-area",
        start: "top top",
        end: "+=1200",
        pin: true,
        scrub: true,
    }
});
const cursor = document.querySelector('.cursor');

document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
});



// slider js
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".project-card").forEach((card, index) => {

  gsap.to(card, {
    opacity: 1,
    y: 0,

    duration: 1.2,
    ease: "power4.out",

    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      end: "top 45%",
      scrub: 1
    }
  });

});