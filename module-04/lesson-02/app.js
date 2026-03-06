const cardEl = document.querySelector(".js-card");

const { width, height } = cardEl.getBoundingClientRect();

cardEl.addEventListener("mouseenter", event => {
  event.target.addEventListener("mousemove", handleMouseenter);
});

cardEl.addEventListener("mouseout", event => {
  event.target.style.transform =
    "perspective(1000px) scale(1) rotateX(0) rotateY(0)";
  event.target.removeEventListener("mousemove", handleMouseenter);
});

function handleMouseenter(event) {
  requestAnimationFrame(() => {
    const xRotation = -30 * ((event.layerY - height / 2) / height);
    const yRotation = 20 * ((event.layerX - width / 2) / width);

    event.target.style.transform = `perspective(1000px) scale(1.06) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  });
}
