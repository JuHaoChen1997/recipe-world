const checkRecipeInput = (req, res, next) => {
  let { picture_link } = req.body;
  if (!picture_link) {
    req.body.picture_link =
      "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg";
  }
  next();
};

module.exports = { checkRecipeInput };
