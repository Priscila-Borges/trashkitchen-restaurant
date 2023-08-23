const express = require("express");
const hbs = require("hbs")
const app = express();

app.set("views", __dirname + "/views"); //tells our Express app where to look for our views
app.set("view engine", "hbs"); //sets HBS as the template engine


hbs.registerPartials(__dirname + "/views/partials"); //tell HBS which directory we use for partials
// Makes everything inside of public/ available
app.use(express.static('public'));


// app.get(path, code)
//res.render (path, data)


// Home Page
app.get("/", (req, res, next) => {
    res.render('home');
});


// Contact Page
app.get("/contact", (req, res, next) => {
    res.render('contact');
});

//menu
app.get("/pizzas/margarita", (req, res) =>{
    
    const dataMargarita = {
        title: 'Pizza Margarita',
        price: 12,
        recommendedDrink: 'beer',
        imageFile: 'pizza-margarita.jpg',
        ingredients: ['mozzarella', 'tomato sauce', 'basilicum'],
      };


    
    res.render("product", dataMargarita)
});

app.get("/pizzas/veggie", (req, res) => {
    
    const dataVeggie = {
        title: 'Veggie Pizza',
        price: 15,
        recommendedDrink: 'power smoothie',
        imageFile: 'pizza-veggie.jpg',
        ingredients: ['cherry tomatoes', 'basilicum', 'olives'],
      };
    
    res.render("product", dataVeggie)
});

app.get("/pizzas/seafood", (req, res) => {

    const dataSeafood = {
        title: 'Seafood Pizza',
        price: 20,
        recommendedDrink: 'white wine',
        imageFile: 'pizza-seafood.jpg',
        ingredients: ['tomato sauce', 'garlic', 'prawn'],
      };

    res.render("product", dataSeafood)
});



app.listen(3000, () => console.log('I am listening! '));