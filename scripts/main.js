// hardcode data to show product cards

const searchData = [
    {
        name: "Встраиваемый светильник Markt",
        sale: "3490",
        price: "5060",
        img: "./images/IMG.png",
    },
    {
        name: "Линейный светильник ARG",
        sale: null,
        price: "6700",
        img: "./images/IMG1.png",
    },
    {
        name: "Светодиодный светильник ",
        sale: "5060",
        price: "6060",
        img: "./images/IMG2.png",
    },
    {
        name: "Встраиваемый светильник Markt",
        sale: null,
        price: "3490",
        img: "./images/IMG.png",
    },
    {
        name: "Линейный светильник ARG",
        sale: "6700",
        price: "7 060",
        img: "./images/IMG1.png",
    },
    {
        name: "Светодиодный светильник ",
        sale: null,
        price: "5060",
        img: "./images/IMG2.png",
    },
    {
        name: "Встраиваемый светильник Markt",
        sale: "3490",
        price: "6060",
        img: "./images/IMG.png",
    },
    {
        name: "Линейный светильник ARG",
        sale: null,
        price: "6700",
        img: "./images/IMG1.png",
    },
]

function ReturnTariffs(){
    for(let i = 0; i < searchData.length; i++){
        if(searchData[i].sale === null){
            let div = document.createElement("div")
            div.className = "product__card__container" 
            div.innerHTML = `
            <div class="product__card__img">
                <img src="${searchData[i].img}"></img>
                <a class="button__more" href="">Подробнее</a>
            </div>
            <div class="product__card__info">
                <p class="product__card__name">${searchData[i].name}</p>
                <div class="product__card__price">${String(searchData[i].price).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')} ₽</div>
            </div>
            `

            document.getElementById("product__card__container").append(div)
        }else{
            let div = document.createElement("div")
            div.className = "product__card__container" 
            div.innerHTML = `
            <div class="product__card__img">
                <img src="${searchData[i].img}"></img>
                <a class="button__more" href="">Подробнее</a>
                <span>Акция</span>
            </div>
            <div class="product__card__info">
                <p class="product__card__name">${searchData[i].name}</p>
                <div class="product__card__price __sale">${String(searchData[i].sale).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')} ₽ <span><p class="price__old">${String(searchData[i].price).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')}</p> ₽</span></div>
            </div>
            `

            document.getElementById("product__card__container").append(div)
        }
        
    }
    
}

function ActivateButton(){
    const button = document.getElementById("burger")
    const menu = document.getElementById("menu")
    if(button.className === "burger__button"){
        buttonActive = false
        button.className = "burger__button Active"
        menu.className = "burger__menu Active"
        document.body.style.overflow = "hidden"

    }else{
        buttonActive = true
        button.className = "burger__button"
        menu.className = "burger__menu"
        document.body.style.overflow = "hidden scroll"
    }
    
}