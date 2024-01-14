function validateDate(req, res, next) {
  const assignmentData = req.body;
  if (req.body.title > 35) {
    return res
      .status(400)
      .json({ message: "Title must not be over 35 characters" });
  }

  if (req.body.description > 150) {
    return res
      .status(400)
      .json({ message: "Description must not exceed 150 characters" });
  }
  if (!Array.isArray(body.categories) || body.categories.length < 1) {
    return res.status(400).json({
      message: "Categories must be an array with at least 1 value",
    });
  }

  next();
}

export default validateDate;
