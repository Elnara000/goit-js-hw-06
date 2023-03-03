// 1
const categories = document.querySelectorAll('.item');
const numberOfCategories = categories.length;
console.log('Number of categories:', numberOfCategories);

// 2
categories.forEach(item => {
    console.log('Cateqory: ', item.firstElementChild.textContent)
    console.log('Elements: ', item.lastElementChild.children.length)    
})