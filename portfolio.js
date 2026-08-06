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