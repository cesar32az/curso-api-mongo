import User from "../api/users/model/User";

export const checkDuplicateUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (user) return res.status(401).json({ message: "User already exists!" });
    next();
  } catch (error) {
    console.log(error);
  }
};
