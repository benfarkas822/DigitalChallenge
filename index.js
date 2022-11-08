const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", express.static(__dirname));

let data = require('./drivers.json').sort(() => .5 - Math.random()).map((driver, i) => ({
    ...driver,
    "place": i + 1
}));


app.get("/api/drivers", (req, res) => {
    res.json(data);
});

app.get("/api/drivers/:id/overtake", async (req, res) => {
    const id = parseInt(req.params.id);
    const position = data.find(d => d.id === id).place;

    if (position !== 1) {
        [data[position - 2], data[position - 1]] = [{...data[position - 1], 'place': position - 1}, {
            ...data[position - 2],
            'place': position
        }];
    }

    res.json({
        position, data
    });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000')
});
