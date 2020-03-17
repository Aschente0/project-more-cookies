
const data = {
    "results": [
        {
            "id": 492561,
            "title": "Falafel Burgers with Feta Cucumber Sauce",
            "readyInMinutes": 50,
            "servings": 1,
            "image": "falafel-burgers-with-feta-tzatziki-sauce-492564.jpg",
            "imageUrls": [
                "falafel-burgers-with-feta-tzatziki-sauce-492564.jpg"
            ]
        },
        {
            "id": 492562,
            "title": "Falafel Burgers with Feta Cucumber Sauce",
            "readyInMinutes": 50,
            "servings": 2,
            "image": "falafel-burgers-with-feta-tzatziki-sauce-492564.jpg",
            "imageUrls": [
                "falafel-burgers-with-feta-tzatziki-sauce-492564.jpg"
            ]
        },
        {
            "id": 492563,
            "title": "Falafel Burgers with Feta Cucumber Sauce",
            "readyInMinutes": 50,
            "servings": 3,
            "image": "falafel-burgers-with-feta-tzatziki-sauce-492564.jpg",
            "imageUrls": [
                "falafel-burgers-with-feta-tzatziki-sauce-492564.jpg"
            ]
        },
        {
            "id": 492564,
            "title": "Falafel Burgers with Feta Cucumber Sauce",
            "readyInMinutes": 50,
            "servings": 4,
            "image": "falafel-burgers-with-feta-tzatziki-sauce-492564.jpg",
            "imageUrls": [
                "falafel-burgers-with-feta-tzatziki-sauce-492564.jpg"
            ]
        },
        {
            "id": 492565,
            "title": "Falafel Burgers with Feta Cucumber Sauce",
            "readyInMinutes": 50,
            "servings": 5,
            "image": "falafel-burgers-with-feta-tzatziki-sauce-492564.jpg",
            "imageUrls": [
                "falafel-burgers-with-feta-tzatziki-sauce-492564.jpg"
            ]
        }
    ],
    "baseUri": "https://spoonacular.com/recipeImages/",
    "offset": 0,
    "number": 1,
    "totalResults": 104,
    "processingTimeMs": 189,
    "expires": 1584659024049
}


export default (req, res) => {
    res.status(200).json(data);
    // res.status(200).json(req);
};