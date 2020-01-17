const list = document.querySelector('#categories');
const itemsInList = list.children.length;
console.log(`В списке ${itemsInList} категорий`);
const items = document.querySelectorAll('.item > ul');
const headings = document.querySelectorAll('.item > h2');
let arrOfItem = [];
let arrOfHeadings = [];
function log() {
    items.forEach(item =>{
     arrOfItem.push(item.children.length);
    });
    headings.forEach(heading => {
        arrOfHeadings.push(`${heading.textContent}`);
    });
    for (let i = 0; i < arrOfItem.length; i++){
        console.log(`Категория: ${arrOfHeadings[i]}`);
        console.log(   `Количество элементов ${arrOfItem[i]}`);
    }
}

log();