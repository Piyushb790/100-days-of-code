document.addEventListener("DOMContentLoaded", async function () {
  const data = await fetch("./data.json");
  const json = await data.json();
  const chartContainer = document.querySelector(".chart-container");

  json.forEach((item) => {
    const priceDiv = document.createElement("div");
    priceDiv.classList.add("amount");
    priceDiv.textContent = `$${item.amount}`;

    const bar = document.createElement("div");
    bar.classList.add("bar");
    if (isToday(item.day)) {
      bar.classList.add("current-day");
    }
    bar.style.height = `${item.amount}%`;
    bar.innerHTML = `<div class="amount">$${item.amount}</div>`;

    chartContainer.appendChild(bar);
  });
});

function isToday(day) {
  const today = new Date()
    .toLocaleDateString("en-US", { weekday: "short" })
    .toLowerCase();
  return today === day;
}
