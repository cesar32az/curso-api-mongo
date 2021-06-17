import User from "../model/User";
import bcrypt from "bcryptjs";

export const createUser = async (req, res) => {
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

export const getOneUser = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
