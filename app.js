document.addEventListener('DOMContentLoaded', () => {
    const list = getProductList();
    renderProductList(list)
})

function renderProductList(productList) {
    const ul = document.querySelector('#product-list');

    for (const product of productList) {
        const li = document.createElement('li');
        const img = document.createElement('img');

        img.className = 'product-image'
        img.src = product.image
        img.alt = product.name

        li.append(img);
        ul.append(li);
    }

    const average = document.querySelector('#food-average-price');
    average.innerHTML = 0
}

function getProductList(){
    return [
        {
            "productId": 1,
            "name": "ラーメン",
            "productType": "FOOD",
            "price": 720,
            "image": "https://frontend-engineer-exercise.herokuapp.com/image/ramen"
        },
        {
            "productId": 2,
            "name": "牛乳",
            "productType": "DRINK",
            "price": 150,
            "image": "https://frontend-engineer-exercise.herokuapp.com/image/milk"
        },
        {
            "productId": 3,
            "name": "卵",
            "productType": "FOOD",
            "price": 150,
            "image": "https://frontend-engineer-exercise.herokuapp.com/image/egg"
        },
        {
            "productId": 4,
            "name": "水",
            "productType": "DRINK",
            "price": 80,
            "image": "https://frontend-engineer-exercise.herokuapp.com/image/water"
        },
        {
            "productId": 5,
            "name": "お茶",
            "productType": "DRINK",
            "price": 120,
            "image": "https://frontend-engineer-exercise.herokuapp.com/image/tea"
        },
        {
            "productId": 6,
            "name": "おにぎり",
            "productType": "FOOD",
            "price": 100,
            "image": "https://frontend-engineer-exercise.herokuapp.com/image/riceball"
        },
        {
            "productId": 7,
            "name": "パスタ",
            "productType": "FOOD",
            "price": 1200,
            "image": "https://frontend-engineer-exercise.herokuapp.com/image/pasta"
        },
        {
            "productId": 8,
            "name": "カレーライス",
            "productType": "FOOD",
            "price": 800,
            "image": "https://frontend-engineer-exercise.herokuapp.com/image/curryrice"
        },
        {
            "productId": 9,
            "name": "ハンバーガー",
            "productType": "FOOD",
            "price": 600,
            "image": "https://frontend-engineer-exercise.herokuapp.com/image/hamburger"
        }
    ]
}