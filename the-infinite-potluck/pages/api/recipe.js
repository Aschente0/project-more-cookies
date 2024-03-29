
const data = {
    "results": [
        {
            "id": 492564,
            "title": "Falafel Burgers with Feta Cucumber Sauce",
            "readyInMinutes": 50,
            "servings": 6,
            "image": "falafel-burgers-with-feta-tzatziki-sauce-492564.jpg",
            "imageUrls": [
                "falafel-burgers-with-feta-tzatziki-sauce-492564.jpg"
            ]
        },
        {
            "id": 246916,
            "title": "Bison Burger",
            "readyInMinutes": 45,
            "servings": 6,
            "image": "Buffalo-Burger-246916.jpg",
            "imageUrls": [
                "Buffalo-Burger-246916.jpg"
            ]
        },
        {
            "id": 245166,
            "title": "Hawaiian Pork Burger",
            "readyInMinutes": 40,
            "servings": 4,
            "image": "Hawaiian-Pork-Burger-245166.jpg",
            "imageUrls": [
                "Hawaiian-Pork-Burger-245166.jpg"
            ]
        },
        {
            "id": 246009,
            "title": "Blue Cheese Burgers",
            "readyInMinutes": 55,
            "servings": 4,
            "image": "Blue-Cheese-Burgers-246009.jpg",
            "imageUrls": [
                "Blue-Cheese-Burgers-246009.jpg"
            ]
        },
        {
            "id": 219957,
            "title": "Carrot & sesame burgers",
            "readyInMinutes": 50,
            "servings": 6,
            "image": "Carrot---sesame-burgers-219957.jpg",
            "imageUrls": [
                "Carrot---sesame-burgers-219957.jpg"
            ]
        },
        {
            "id": 607109,
            "title": "Turkey Zucchini Burger with Garlic Mayo",
            "readyInMinutes": 45,
            "servings": 6,
            "image": "Turkey-Zucchini-Burger-with-Garlic-Mayo-607109.jpg",
            "imageUrls": [
                "Turkey-Zucchini-Burger-with-Garlic-Mayo-607109.jpg"
            ]
        },
        {
            "id": 864633,
            "title": "Banh Mi Burgers with Spicy Sriracha Mayo",
            "readyInMinutes": 35,
            "servings": 4,
            "image": "banh-mi-burgers-with-spicy-sriracha-mayo-864633.jpg",
            "imageUrls": [
                "banh-mi-burgers-with-spicy-sriracha-mayo-864633.jpg"
            ]
        },
        {
            "id": 219871,
            "title": "Halloumi aubergine burgers with harissa relish",
            "readyInMinutes": 20,
            "servings": 4,
            "image": "Halloumi-aubergine-burgers-with-harissa-relish-219871.jpg",
            "imageUrls": [
                "Halloumi-aubergine-burgers-with-harissa-relish-219871.jpg"
            ]
        },
        {
            "id": 246177,
            "title": "Grilled Beef and Mushroom Burger",
            "readyInMinutes": 30,
            "servings": 3,
            "image": "Grilled-Beef-and-Mushroom-Burger-246177.jpg",
            "imageUrls": [
                "Grilled-Beef-and-Mushroom-Burger-246177.jpg"
            ]
        },
        {
            "id": 245343,
            "title": "Herbed Turkey Burger",
            "readyInMinutes": 30,
            "servings": 8,
            "image": "Herbed-Turkey-Burger-245343.jpg",
            "imageUrls": [
                "Herbed-Turkey-Burger-245343.jpg"
            ]
        }
    ],
    "baseUri": "https://spoonacular.com/recipeImages/",
    "offset": 0,
    "number": 10,
    "totalResults": 106,
    "processingTimeMs": 197,
    "expires": 1586535981954,
    "isStale": false
}


export default (req, res) => {
    res.status(200).json(data);
    // res.status(200).json(req);
};