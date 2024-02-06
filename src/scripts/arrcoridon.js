document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const wrapper = item.querySelector(".accordion-wrapper");
    const arrow = item.querySelector(".arrow");

    header.addEventListener("click", function () {
      this.classList.toggle("bg-dark-forest-green");
      this.classList.toggle("text-green-solid");
      arrow.classList.toggle("active");
      wrapper.classList.toggle("hidden");
    });
  });
});
