import AdminServices from '../model/Admin';

export const getRegister = async (req, res) => {
  try {
    const { clientName, email, password, cpassword } = req.body;

    if (!clientName || !email || !password || !cpassword) {
      return res.send({ message: "Please fill in all the details" });
    }

    if (password !== cpassword) {
      return res.send({ message: "Passwords do not match" });
    }

    // Add email validation if necessary
    // Example of email validation:
    // const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    // if (!emailRegex.test(email)) {
    //   return res.send({ message: "Invalid email format" });
    // }

    let user_data = new AdminServices(req.body);
    let result = await user_data.save();
    result = result.toObject();

    if (result) {
      let myToken = await user_data.getAuthToken();

      if (myToken) {
        return res.send({
          result,
          message: "Token Was Generated Successfully",
          token: myToken
        });
      } else {
        return res.send({ message: "Token was not generated" });
      }
    } else {
      return res.send({ message: "User was not Found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Server Error" });
  }
};



// export default  getLogin = async (req, res) => {
//   try {
//     const { email, password, cpassword, token } = req.body
//     if (!token || !email || !password || !cpassword) {
//       res.send({ message: "Plz fill Ful details" })
//     }
//     if (password !== cpassword) {
//       res.send({ message: "Password wil be match cpassword" })
//     }
//     let user = await User.findOne({ email: email })
//     if (user) {
//       let validPassword = await bcrypt.compare(password, user.password)
//       if (validPassword) {
//         let myToken = user.tokens.some((t) => t.token === token)
//         if (myToken) {
//           res.send({
//             user,
//             message: "Login was successfully",
//             token: myToken
//           })
//         } else {
//           res.send({ message: "Login was not successfully" })
//         }
//       } else {
//         res.send({ message: "Not a valid Password" })
//       }
//     } else {
//       res.send({ message: "User Was not found" })
//     }
//   } catch (error) {
//     res.send({
//       message: 'catch error was runing now'
//     })
//   }
// }