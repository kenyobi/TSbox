document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header") as HTMLElement;
    const content = item.querySelector(".accordion-content") as HTMLElement;

    header.addEventListener("click", function () {
      const isActive = item.classList.contains("active");

      // Close all items
      accordionItems.forEach((i) => {
        i.classList.remove("active");
        const itemContent = i.querySelector(".accordion-content") as HTMLElement;
        itemContent.style.display = "none";
      });

      // Toggle active class and show/hide content
      if (!isActive) {
        item.classList.add("active");
        content.style.display = "block";
      }
    });
  });
});
