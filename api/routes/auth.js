const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// register portion
router.post('/register', async (req, res) => {
	try {
		//generate password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);

		// create user
		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: hashedPassword,
		});

		// save user and return
		const user = await newUser.save();
		const email = req.body.email
		const token = jwt.sign({
				user_id: user._id,
				email
			},
			process.env.JWT_SECRET, {
				expiresIn: "6h",
			}
		);
		// save user token
		user.token = token;


		res.status(200).json(user);
	} catch (err) {
		console.log(err)
	}
});

// logging in
router.post('/login', async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		!user && res.status(404).send('user not found');

		const validPassword = await bcrypt.compare(req.body.password, user.password)
		if (user && (await bcrypt.compare(req.body.password, user.password))) {
      const email = req.body.email
			const token = jwt.sign({
					user_id: user._id,
					email
				},
				process.env.JWT_SECRET, {
					expiresIn: "6h",
				}
			);
			user.token = token
      return res.status(200).json(user);
		} else {
      return res.status(400).send("wrong password")
    }
	} catch (err) {
		res.status(500).json(err)
	}
});

module.exports = router;
