const categoriesContainer = document.querySelector('.categories');
const productsContainer = document.querySelector('.products');
const productDetailsContainer = document.querySelector('.product-details');

const categories = [
    { id: 1, name: 'Книги' },
    { id: 2, name: 'Одяг' },
    { id: 3, name: 'Їжа' },
];

const products = [
    { id: 1, name: 'Роман', categoryId: 1, price: 120, description: 'Володар перснів'},
    { id: 2, name: 'Детектив', categoryId: 1, price: 125, description: 'Пригоди Шерлока Холмса'},
    { id: 3, name: 'Футболка', categoryId: 2, price: 500, description: 'Футболка Fila 107749-Z4 56-58'},
    { id: 4, name: 'Штани', categoryId: 2, price: 600, description: 'Штани C&A FL2133310-Beige XL'},
    { id: 5, name: 'Піца', categoryId: 3, price: 250, description: 'Піца Техас'},
    { id: 6, name: 'Суші', categoryId: 3, price: 550, description: 'Суші Філадельфія сет'},
];

const renderCategories = () => {
    console.log('renderCategories');
    categoriesContainer.innerHTML = '<h4>Перелік категорій</h4>';

    categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.innerText = category.name;

        categoryElement.addEventListener(
            'click',
            () => { renderProducts(category.id)}
        );
        categoriesContainer.appendChild(categoryElement);
    })
};

const renderProducts = (categoryId) => {
    console.log('renderProducts');
    productsContainer.innerHTML = '<h4>Товари категорії</h4>';
    if (!categoryId) {
        return;
    }

    const filteredProducts = products.filter(product => product.categoryId === categoryId);

    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerText = product.name;

        productElement.addEventListener(
            'click',
            () => { renderProductsDetails(product)}
        );

        productsContainer.appendChild(productElement);
    })}

const renderProductsDetails = (product) => {
    console.log('renderProductsDetails')
    productDetailsContainer.innerHTML = '';

    if (!product) {
        return;
    }

    const productDetailsElement = document.createElement('div');

    productDetailsElement.innerHTML = `
        <h4>${product.name}</h4>
        <div>${product.description}</div>
        <div>${product.price}</div>
        <button class="btn_buy">Buy</button>
`;

    productDetailsElement.querySelector('.btn_buy').addEventListener(
        'click',
        () => {
            alert(`Ви купили ${product.name} ${product.description}`);
            renderProducts();
            renderProductsDetails();
        }
    );

    productDetailsContainer.appendChild(productDetailsElement);
}

renderCategories();
renderProducts();
renderProductsDetails();

console.log({
    categories,
    products,
});