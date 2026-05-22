const range = document.getElementById("range");
const price = document.getElementById("price");
const views = document.getElementById("views");
const toggle = document.getElementById("toggle");

const pricing = [
  {
    pageviews: "10K",
    price: 8,
  },
  {
    pageviews: "50K",
    price: 12,
  },
  {
    pageviews: "100K",
    price: 16,
  },
  {
    pageviews: "500K",
    price: 24,
  },
  {
    pageviews: "1M",
    price: 36,
  },
];

function updateSlider() {
  const value = (range.value - range.min) / (range.max - range.min) * 100;

  range.style.background = `linear-gradient(to right,
    hsl(174, 77%, 80%) 0%,
    hsl(174, 77%, 80%) ${value}%,
    hsl(224, 65%, 95%) ${value}%,
    hsl(224, 65%, 95%) 100%)`;
}

function updatePricing() {
  const value = range.value;

  let currentPrice = pricing[value].price;

  if (toggle.checked) {
    currentPrice =currentPrice * 0.75;
  }

  views.textContent = pricing[value].pageviews;

  price.textContent = `$${currentPrice.toFixed(2)}`;

  const percent = (value / 4) * 100;

    range.style.background = `
        linear-gradient(
          to right,
          var(--soft-cyan) 0%,
          var(--soft-cyan) ${percent}%,
          var(--light-grayish-blue) ${percent}%,
          var(--light-grayish-blue) 100%
        )
      `;
}

range.addEventListener("input", updateSlider);

range.addEventListener("input", updatePricing);

toggle.addEventListener("change", updatePricing);

// initialize
updateSlider();

updatePricing();