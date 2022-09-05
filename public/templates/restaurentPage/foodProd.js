let bannerWrap = document.querySelector(".banner_wrapper");
let restroInfo = document.querySelector(".restro-rating-dtime-cost");
let searchBar = document.querySelector(".search_favourite_container");
searchBar.style.position = 'absolute';


window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        bannerWrap.classList.add("squeezeHeight");
        restroInfo.classList.add("d-none");
        searchBar.style.position = 'static';
    } else {
        searchBar.style.position = 'absolute';
        bannerWrap.classList.remove("squeezeHeight");
        restroInfo.classList.remove("d-none");
    }

}


var singleRestaurentDetails = {
    detailsArr:[
        {
            restaurentMainImg: "images/res1.webp",
            restaurentName: "Bawarchi",
            cuisine: "Special Biryani, Indian, Chinese & North Indian",
            address: "RTC X roads, New Nallakunta",
        },
        {
            restaurentMainImg: "images/res2.webp",
            restaurentName: "MVS Biryani point",
            cuisine: "Biryani,Chinese,Indian & Fast food",
            address: "Tarnaka, Nacharam & Malkajigiri, New Nallakunta",

        },
        {
            restaurentMainImg: "images/res3.webp",
            restaurentName: "Bawarchi",
            cuisine: "Special Biryani, Indian, Chinese & North Indian",
            address: "RTC X roads, New Nallakunta",
        },
        {
            restaurentMainImg: "images/res4.webp",
            restaurentName: "Shiva Dhaba",
            cuisine: "Indian,Non-Veg & All Type Of Foods",
            address: "Vanasthalipuram, Vanasthalipuram"
        },
        {
            restaurentMainImg: "images/res5.webp",
            restaurentName: "Burger Kings",
            cuisine: "Americian,FastFood ",
            address: "Vanasthalipuram, Vanasthalipuram"
        },
        {
            restaurentMainImg: "images/res6.webp",
            restaurentName: "Bombay Juice",
            cuisine: "Chat, Chinese, Juice",
            address: "MPM Millennium Mall, Vanasthalipuram",

        },
        {
            restaurentMainImg: "images/res7.webp",
            restaurentName: "Mandi King",
            cuisine: "Mandi,Tandoori,Arabian,North Indian",
            address: "Kurmagudasaidabad main road, New Malakpet",

        },
        {
            restaurentMainImg: "images/res8.webp",
            restaurentName: "CreamStone",
            cuisine: "Ice Creams, Desserts",
            address: "Nampally, New Malakpet",

        },
        {
            restaurentMainImg: "images/res9.webp",
            restaurentName: "PizzaHut",
            cuisine: "Varies types of Pizzas",
            address: "PH Kachiguda Hyderabad, Kachiguda",
        },
        {
            restaurentMainImg: "images/res2.webp",
            restaurentName: "New Astoria Restaurant",
            cuisine: "Chinese, Biryani ",
            address: "Santoshnagar & Saidabad, Kachiguda",
        },
        {
            restaurentMainImg: "images/res3.webp",
            restaurentName: "Crystal Restaurant",
            cuisine: "Biryani, North Indian",
            address: "RTC X roads, Kachiguda",
        },
        {
            restaurentMainImg: "images/res4.webp",
            restaurentName: "Imperial Multi-Cuisine Restaurant ",
            cuisine: "Biryani, Chinese",
            address: "Kothapet & Dilsukhnagar, Kothapet & Dilsukhnagar",
        },
        {
            restaurentMainImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/gop8zmyxbzfcdwwnsegm",
            restaurentName: "Istah Shawarma",
            cuisine: "Arabian, Lebanese",
            address: "Officers Colony, Kothapet & Dilsukhnagar",
        }
    ]
}


var menuItems = {
    item1:[{
        imageUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/xeouiqve1oqijfvfdpoi",
        itemName:"Idli",
        price:35,
        vegItem: true
    }],
    item2:[{
        imageUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/xeouiqve1oqijfvfdpoi",
        itemName:"Vada",
        price: 79,
        vegItem: true
    }],
    item3:[{
        imageUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/h51lvqoon8lim739y9do",
        itemName:"Classic Tiramisu",
        price: 159,
        vegItem: false
    }],
    item4:[{
        imageUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/qtpjusll0mdfsy9vopxo",
        itemName:"Dahi Vada ( Plate )",
        price: 99,
        vegItem: true
    }]
}