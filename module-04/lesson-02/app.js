const cardEl = document.querySelector(".js-card-overlay");

cardEl.addEventListener("mousemove", handleMouseenter, true);
cardEl.removeEventListener("mouseout", handleMouseenter);

function handleMouseenter(event) {
  event.preventDefault();

  const height = event.target.clientHeight;
  const width = event.target.clientWidth;

  requestAnimationFrame(() => {
    const xRotation = -30 * ((event.layerY - height / 2) / height);
    const yRotation = 20 * ((event.layerX - width / 2) / width);

    event.target.style.transform = `perspective(1000px) scale(1.05) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  });
}
