const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
    const itemH2 = category.firstElementChild;
    console.log(`Category: ${itemH2.textContent}`);

    const itemUl = category.lastElementChild;
    const itemLi = itemUl.children;
    console.log(`Elements: ${itemLi.length}`)

    
    } 
);
 


