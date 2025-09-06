(function () {
  const params = new URLSearchParams(location.search);
  const q = params.get("q");
  const el = document.getElementById("query");
  if (q && el) el.textContent = "❌ Запрос: " + q;

  const back = document.getElementById("backBtn");
  if (back) back.addEventListener("click", () => history.back());
})();
