export default (req, res) => {
    res.status(200).json([{ "recipe": "twice fried chicken" }, {"recipe": "tonkotsu ramen"}]);
};