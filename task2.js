const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы',];
const list = document.querySelector('#ingredients');
const docFrag = document.createDocumentFragment();

ingredients.forEach(ingredient =>{
    const item = document.createElement('li');
    item.textContent = ingredient;
    docFrag.append(item);
});


list.append(docFrag);