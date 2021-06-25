import bcrypt from "bcryptjs";
import User from "../../users/model/User";
import { createToken } from "../libs/jwt";

export const register = async (req, res) => {
  try {
    const { name, lastName, age, email, password } = req.body; // obtenemos datos
    const newUser = new User({
      name,
      lastName,
      age,
      email,
      password: bcrypt.hashSync(password, 10), // encriptamos password
    }); // creamos nuevo usuario
    const userSaved = await newUser.save(); // guardamos el usuario en la base de datos
    res.status(201).json({ message: "user created!", userSaved }); // respuesta
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.status(401).json({ message: "Password incorrect!" });

    const token = createToken(user);
    console.log(token);

    res.status(200).json({ message: "login successfully!", token });
  } catch (error) {
    console.log(error);
  }
};
