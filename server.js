const express = require("express");
const app = express();
const PORT = 1337;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/test", (req, res) => {
	const {
		body: { string_to_cut },
	} = req;

	let counter = 0;
	let returnString = "";

	while (counter < string_to_cut.length) {
		if (counter % 3 === 0 && counter >= 3) {
			returnString += string_to_cut[counter - 1]; // takes every "3rd" character. (Not an index!)
		}
		counter++;
	}

	res.json({ return_string: returnString });
});

app.listen(PORT, () => {
	console.log(`Server is listening at port ${PORT}`);
});
