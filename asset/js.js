// scrol
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(" .welcome ,.logo,.home ", {
  origin: "top",
});

ScrollReveal().reveal(".footer", {
  origin: "bottom",
});

ScrollReveal().reveal(".about,.image", {
  origin: "left",
});

ScrollReveal().reveal(".image1 ", {
  origin: "right",
});
