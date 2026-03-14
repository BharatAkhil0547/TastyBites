import logo from './logo.png'
import hero_img from './hero_img.png'
import icon_clock from './Icon clock.png'
import user_img from './user_img.svg'
import arrow_icon from './arrow_icon.svg'
import logo_icon from './Group 2.png'
import item1 from './item1.png'
import item2 from './item2.png'
import item3 from './item3.png'
import item4 from './item4.png'
import item5 from './item5.png'
import item6 from './item6.png'
import item7 from './item7.png'
import item8 from './item8.png'
import item9 from './item9.png'
import fastfood from './fastfood.png'
import italian from './italianfood.png'
import asianfood from './asianfood.png'
import seafood from './seafood.png'
import overlay from './overlay.png'
import Reviewer1 from './Reviewer1.png'
import Reviewer2 from './Reviewer2.png'
import Reviewer3 from './Reviewer3.png'
import chef1 from './chef1.png'
import chef2 from './chef2.png'
import chef3 from './chef3.png'
import facebook from './facebook.png'
import instagram from './instagram.png'
import twitter from './twitter.png'
import bgImage1 from './bgImage1.png'
import apple from './apple.png'
import making from './making.png'
import email from './email_icon.svg'
import Mail from './Mail.png'
import Phone from './Phone.png'
import Mark from './mark.png'
import Timing from './Timing.png'
import About1 from './About1.png'
import VideoImage from './VideoImage.png'
import VideoIcon from './Icon play.png'
import AboutImage from './AboutUserImage.png'
import AboutBgImage from './AboutBgImage.png'
import LocationRed from './LocationRed.png'
import MailRed from './MailRed.png'
import PhoneRed from './PhoneRed.png'
import formImage from './formImage.png'
import Logo1 from './Logo1.png'
import Logo2 from './Logo2.png'
import Logo3 from './Logo3.png'
import Logo4 from './Logo4.png'
import Logo5 from './Logo5.png'
import serving from './servings.png'
import preptime from './preptime.png'
import cooktime from './cookingtime.png'
import calories from './calories.png'
import ellipse from './Ellipse.png'
import ReviewImage from './ReviewImage.png'
import star from './stars.png'
const assets={
    logo,
    hero_img,
    icon_clock,
    user_img,
    arrow_icon,
    logo_icon,
    facebook,
    instagram,
    twitter,
    bgImage1,
    apple,
    Reviewer1,
    Reviewer2,
    Reviewer3,
    chef1,
    chef2,
    chef3,
    making,
    overlay,
    email,
    Mail,
    Timing,
    Mark,
    Phone,
    About1,
    VideoImage,
    VideoIcon,
    AboutBgImage,
    AboutImage,
    LocationRed,
    MailRed,
    PhoneRed,
    formImage,
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
    serving,
    preptime,
    cooktime,
    calories,
    ellipse,
    ReviewImage,
    star,
}
export const foodCategory=[
    {
        item:seafood,
        name:'Sea Food'
    },{
        item:italian,
        name:'Italian Food'
    },
    {
        item:asianfood,
        name:'asian Food',
    },
    {
        item:fastfood,
        name:'Fast Food'
    },
]
export const recipes=[
    {
        id:1,
        image:item1,
        title:'Twirl Fork Into A Taste Of Italy',
        description:'Nullam pulvinar felis at metus malesuadanec.convallis lacus commodouis blandit neque.',
        name:'Rebecca Gibson',
        date:'August 28,2025',
        ingredients: [
                        "200g spaghetti",
                        "2 tbsp olive oil",
                        "2 cloves garlic (minced)",
                        "1 cup cherry tomatoes",
                        "1/2 cup heavy cream",
                        "Fresh basil leaves",
                        "Parmesan cheese"
                        ],
        instructions: [
                    "Cook spaghetti according to package instructions.",
                    "Heat olive oil in a pan and sauté garlic.",
                    "Add cherry tomatoes and cook until soft.",
                    "Add cream and simmer for 3 minutes.",
                    "Mix spaghetti with sauce and garnish with basil and parmesan."
                    ],
        review:[
            {
                name:'Alice Griffin',
                image:ReviewImage,
                Date:new Date().toLocaleString(),
                rating:star,
                Comment:"Excellent, Great Job!"
            },
            {
                name:'Jhon Doe',
                image:ReviewImage,
                Date:new Date().toLocaleString(),
                rating:star,
                Comment:"Great Job!"
            }
        ]
        
        

    },
    {
        id:2,
        image:item2,
        title:'Hot And Fresh Out Of The Oven',
        description:'Nullam pulvinar felis at metus malesuadanec.convallis lacus commodouis blandit neque.',
        name:'Rebecca Gibson',
        date:'August 28,2025',
        ingredients: [
        "3 cups all-purpose flour",
        "1 tsp salt",
        "1 tbsp sugar",
        "1 packet yeast",
        "1 cup warm water",
        "2 tbsp olive oil"
        ],
        instructions: [
        "Mix flour, salt, sugar, and yeast.",
        "Add warm water and olive oil to form dough.",
        "Knead for 8–10 minutes.",
        "Let dough rise for 1 hour.",
        "Bake at 200°C for 25–30 minutes."
        ],
        review:[
                    {
                        name:'Alice Griffin',
                        image:ReviewImage,
                        Date:new Date().toLocaleString(),
                        rating:star,
                        Comment:"Excellent, Great Job!"
                    },
                    {
                        name:'Jhon Doe',
                        image:ReviewImage,
                        Date:new Date().toLocaleString(),
                        rating:star,
                        Comment:"Great Job!"
                    }
                ]
            },
    {
        id:3,
        image:item3,
        title:'Juicy And Satisfying',
        description:'Nullam pulvinar felis at metus malesuadanec.convallis lacus commodouis blandit neque.',
        name:'Rebecca Gibson',
        date:'August 28,2025',
        ingredients: [
        "4 chicken breasts",
        "2 tbsp olive oil",
        "1 tsp paprika",
        "1 tsp garlic powder",
        "Salt and pepper"
        ],
        instructions: [
        "Marinate chicken with olive oil and spices.",
        "Heat a grill or pan over medium heat.",
        "Cook chicken for 6–8 minutes per side.",
        "Ensure chicken is fully cooked and juicy before serving."
        ],
        review:[
                    {
                        name:'Alice Griffin',
                        image:ReviewImage,
                        Date:new Date().toLocaleString(),
                        rating:star,
                        Comment:"Excellent, Great Job!"
                    },
                    {
                        name:'Jhon Doe',
                        image:ReviewImage,
                        Date:new Date().toLocaleString(),
                        rating:star,
                        Comment:"Great Job!"
                    }
                ]

            },
    {
        id:4,
        image:item4,
        title:'The Taste Of Premium Quality Beef',
        description:'Nullam pulvinar felis at metus malesuadanec.convallis lacus commodouis blandit neque.',
        name:'Rebecca Gibson',
        date:'August 28,2025',
                ingredients: [
        "2 ribeye steaks",
        "2 tbsp butter",
        "2 garlic cloves",
        "Fresh rosemary",
        "Salt and black pepper"
        ],
        instructions: [
        "Season steaks with salt and pepper.",
        "Heat a skillet over high heat.",
        "Sear steaks 3–4 minutes on each side.",
        "Add butter, garlic, and rosemary and baste the steak.",
        "Rest for 5 minutes before serving."
        ],
        review:[
                    {
                        name:'Alice Griffin',
                        image:ReviewImage,
                        Date:new Date().toLocaleString(),
                        rating:star,
                        Comment:"Excellent, Great Job!"
                    },
                    {
                        name:'Jhon Doe',
                        image:ReviewImage,
                        Date:new Date().toLocaleString(),
                        rating:star,
                        Comment:"Great Job!"
                    }
                ]
            },
    {
        id:5,
        image:item5,
        title:'Fresh, Vibrant Flavours In Every Bite',
        description:'Nullam pulvinar felis at metus malesuadanec.convallis lacus commodouis blandit neque.',
        name:'Rebecca Gibson',
        date:'August 28,2025',
                ingredients: [
        "1 cucumber (diced)",
        "1 red bell pepper",
        "1 cup cherry tomatoes",
        "1/4 cup feta cheese",
        "2 tbsp olive oil",
        "Juice of 1 lemon"
        ],
        instructions: [
        "Combine cucumber, pepper, and tomatoes in a bowl.",
        "Drizzle olive oil and lemon juice.",
        "Toss well and add feta cheese on top.",
        "Serve fresh."
        ],
        review:[
                    {
                        name:'Alice Griffin',
                        image:ReviewImage,
                        Date:new Date().toLocaleString(),
                        rating:star,
                        Comment:"Excellent, Great Job!"
                    },
                    {
                        name:'Jhon Doe',
                        image:ReviewImage,
                        Date:new Date().toLocaleString(),
                        rating:star,
                        Comment:"Great Job!"
                    }
                ]
            },
    {
        id:6,
        image:item6,
        title:'The Delicate Flavours Of The Orient',
        description:'Nullam pulvinar felis at metus malesuadanec.convallis lacus commodouis blandit neque.',
        name:'Rebecca Gibson',
        date:'August 28,2025',
                ingredients: [
        "200g tofu cubes",
        "2 tbsp soy sauce",
        "1 tsp sesame oil",
        "1 tsp grated ginger",
        "1 garlic clove",
        "1 cup mixed vegetables"
        ],
        instructions: [
        "Heat sesame oil in a wok.",
        "Add garlic and ginger and sauté.",
        "Add tofu and vegetables.",
        "Stir fry for 5–6 minutes.",
        "Add soy sauce and cook for another 2 minutes."
        ],
        review:[
                    {
                        name:'Alice Griffin',
                        image:ReviewImage,
                        Date:new Date().toLocaleString(),
                        rating:star,
                        Comment:"Excellent, Great Job!"
                    },
                    {
                        name:'Jhon Doe',
                        image:ReviewImage,
                        Date:new Date().toLocaleString(),
                        rating:star,
                        Comment:"Great Job!"
                    }
                ]

            },
    {
        id:7,
        image:item7,
        title:'Comfort In A Bowl',
        description:'Nullam pulvinar felis at metus malesuadanec.convallis lacus commodouis blandit neque.',
        name:'Rebecca Gibson',
        date:'August 28,2025',
                ingredients: [
        "1 chicken breast (shredded)",
        "1 carrot (diced)",
        "1 celery stalk",
        "1 onion",
        "4 cups chicken broth",
        "1/2 cup cream"
        ],
        instructions: [
        "Sauté onion, carrot, and celery in a pot.",
        "Add chicken broth and shredded chicken.",
        "Simmer for 15 minutes.",
        "Add cream and season with salt and pepper.",
        "Serve hot."
        ],
        review:[
                    {
                        name:'Alice Griffin',
                        image:ReviewImage,
                        Date:new Date().toLocaleString(),
                        rating:star,
                        Comment:"Excellent, Great Job!"
                    },
                    {
                        name:'Jhon Doe',
                        image:ReviewImage,
                        Date:new Date().toLocaleString(),
                        rating:star,
                        Comment:"Great Job!"
                    }
                ]
            },
    {
        id:8,
        image:item8,
        title:'Layers Of Deliciousness',
        description:'Nullam pulvinar felis at metus malesuadanec.convallis lacus commodouis blandit neque.',
        name:'Rebecca Gibson',
        date:'August 28,2025',
                    ingredients: [
            "6 lasagna sheets",
            "250g minced beef",
            "1 cup tomato sauce",
            "1 cup ricotta cheese",
            "1 cup mozzarella cheese"
            ],
            instructions: [
            "Cook minced beef and mix with tomato sauce.",
            "Layer lasagna sheets, meat sauce, and cheeses.",
            "Repeat layers in a baking dish.",
            "Bake at 180°C for 35–40 minutes."
            ],
            review:[
                        {
                            name:'Alice Griffin',
                            image:ReviewImage,
                            Date:new Date().toLocaleString(),
                            rating:star,
                            Comment:"Excellent, Great Job!"
                        },
                        {
                            name:'Jhon Doe',
                            image:ReviewImage,
                            Date:new Date().toLocaleString(),
                            rating:star,
                            Comment:"Great Job!"
                        }
                    ]
                },
                {
                    id:9,
                    image:item9,
                    title:'Savor The Exotic Flavors',
                    description:'Nullam pulvinar felis at metus malesuadanec.convallis lacus commodouis blandit neque.',
                    name:'Rebecca Gibson',
                    date:'August 28,2025',
                    ingredients: [
            "1 tbsp green curry paste",
            "400ml coconut milk",
            "200g chicken or tofu",
            "1 bell pepper",
            "Fresh basil leaves"
            ],
            instructions: [
            "Heat curry paste in a pan.",
            "Add coconut milk and mix well.",
            "Add chicken/tofu and vegetables.",
            "Simmer until cooked.",
            "Garnish with basil and serve with rice."
            ],
            review:[
                        {
                            name:'Alice Griffin',
                            image:ReviewImage,
                            Date:new Date().toLocaleString(),
                            rating:star,
                            Comment:"Excellent, Great Job!"
                        },
                        {
                            name:'Jhon Doe',
                            image:ReviewImage,
                            Date:new Date().toLocaleString(),
                            rating:star,
                            Comment:"Great Job!"
                        }
                    ]
    },
]
export default assets

