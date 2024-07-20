const numberOfCategories = categories.children.length;
console.log(`Number of categories: ${numberOfCategories}`);

const titles = document.querySelectorAll(".item");
titles.forEach((element) => {
  const h2 = element.querySelector("h2");
  console.log(`Category: ${h2.textContent}`);
  const nextElementSib = h2.nextElementSibling;
  console.log(`Elements: ${nextElementSib.querySelectorAll("li").length}`);
});
