//1 потрібно порахувати і вивести в консоль кількість категорій
const listWithCategories = document.querySelectorAll('.item');
const AllCategoriesLength = listWithCategories.length;
let message = `Number of categories: ${AllCategoriesLength}`;
console.log(message);

//2 Для кожного єлемента "li.item" в списку в списку "ul#categories",
// потрібно знайти і висести у консоль текст заголовка елемента(тега < h2 >)
// і кількість єлементів(всіх вкладених в < li >)

const categoriesListItem = document.querySelectorAll(".item");
categoriesListItem.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});
