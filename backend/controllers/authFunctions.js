const bcrypt = require("../../server/node_modules/bcryptjs");
const User = require("../db/models/User");
const passport = require("../../server/node_modules/passport");

module.exports = {
  registerAUser: function (req, res) {
    let { firstName, lastName, email, password1, password2 } = req.body;
    if (password1 !== password2) {
      return res.json({ message: "The passwords do not match" });
    } else {
      User.findOne({ email }, (err, data) => {
        if (err) {
          console.log(err);
        } else if (!data) {
          let salt = bcrypt.genSaltSync(10);
          let hashed = bcrypt.hashSync(password1, salt);
          let password = hashed;
          let newUser = new User({ firstName, lastName, email, password });
          newUser.save((err, data) => {
            if (err) {
              console.log(err);
            } else {
              let { firstName, lastName, email, _id } = data;
              res.json({ firstName, lastName, email, _id });
            }
          });
        } else {
          res.json({
            message: `${email} is already registered in our database.`,
          });
        }
      });
    }
  },
  loginAUser: function (req, res, next) {
    passport.authenticate("local", (error, user, info) => {
      if (error) {
        info = { message: "Failed Login" };
        res.json(info);
      }
      if (user === false) {
        info = { message: "Password or email do not match database" };
        res.json(info);
      } else {
        User.findById({ _id: user._id }, async (err, data) => {
          if (err) {
            console.log(err);
          }
          let { firstName, lastName, email, password, _id } = data;
          User.findByIdAndUpdate(
            { _id: data._id },
            { firstName, lastName, email, password, _id, loggedIn: true },
            { new: true }
          )
            .populate({ path: "items", options: { sort: { itemName: 1 } } })
            .exec((err, data) => {
              if (err) {
                console.log(err);
              } else {
                let { firstName, lastName, email, _id } = data;
                res.json({ firstName, lastName, email, _id });
              }
            });
        });
      }
    })(req, res, next);
  },
  updateAUser: function (req, res) {
    let {
      firstName,
      lastName,
      email,
      password1,
      password2,
      _id
    } = req.body;
    let fromFront = {
      firstName,
      lastName,
      email,
      _id
    };
    if (password1 !== password2) {
      return res.json({ message: "The passwords do not match" });
    }
    if (password1 !== "") {
      fromFront.password = password1;
    } else {
      fromFront.password = "";
    }
    User.findById({ _id: fromFront._id }, async (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let changedUser = {};
        changedUser._id = data._id;
        changedUser.contacts = data.contacts;
        if (
          fromFront.firstName !== data.firstName &&
          fromFront.firstName !== ""
        ) {
          changedUser.firstName = fromFront.firstName;
        } else {
          changedUser.firstName = data.firstName;
        }
        if (fromFront.lastName !== data.lastName && fromFront.lastName !== "") {
          changedUser.lastName = fromFront.lastName;
        } else {
          changedUser.lastName = data.lastName;
        }

        if (fromFront.password === "") {
          changedUser.password = data.password;
        } else {
          let salt = bcrypt.genSaltSync(10);
          let hashed = bcrypt.hashSync(fromFront.password, salt);
          changedUser.password = hashed;
        }
        if (fromFront.email === data.email) {
          changedUser.email = data.email;
        } else {
          let foundUser = await User.findOne({ email: fromFront.email });
          if (!foundUser) {
            changedUser.email = fromFront.email;
          } else {
            return res.json({
              message: `${fromFront.email} is already in use`,
            });
          }
        }
        let {
          firstName,
          lastName,
          email,
          password,
          contacts,
          _id
        } = changedUser;
        User.findByIdAndUpdate(
          { _id: data._id },
          {
            firstName,
            lastName,
            email,
            password,
            contacts,
            _id
          },
          { new: true }
        )
          .populate({ path: "items", options: { sort: { itemName: 1 } } })
          .exec((err, data) => {
            if (err) {
              console.log(err);
            } else {
              let { firstName, lastName, email, _id, items } =
                data;
              res.json({
                firstName,
                lastName,
                email,
                _id,
                items,
              });
            }
          });
      }
    });
  },
  logOutAUser: function (req, res) {
    req.logout(() => console.log("You are logged out! Whee!"));
    res.json({ message: "You are logged out" });
  },
};
