const range = document.getElementById("range");
const price = document.getElementById("price");
const views = document.getElementById("views");
const toggle = document.getElementById("toggle");

const YEARLY_DISCOUNT = 0.25;

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

function updateSliderBackground(percent) {
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

function updatePricing() {
  const idx = Number(range.value);

  let currentPrice = pricing[idx].price;

  if (toggle.checked) {
    currentPrice *= 1 - YEARLY_DISCOUNT;
  }

  views.textContent = pricing[idx].pageviews;

  price.textContent = `$${currentPrice.toFixed(2)}`;

  const percent =
    ((range.value - range.min) / (range.max - range.min)) * 100;

  updateSliderBackground(percent);
}

range.addEventListener("input", updatePricing);

toggle.addEventListener("change", updatePricing);

updatePricing();