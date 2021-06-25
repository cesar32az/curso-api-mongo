import jwt from "jsonwebtoken";

export const createToken = (user) => {
  try {
    return jwt.sign({ id: user._id, email: user.email }, "JWTsecret", {
      expiresIn: 86400,
    });
  } catch (error) {
    console.log(error);
  }
};
