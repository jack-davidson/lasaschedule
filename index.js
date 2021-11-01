const express = require('express')
const ejs = require('ejs');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'))

var schedules = {
    "normal": [
        {
            "period": "1/5",
            "start": "8:15 AM",
            "end": "9:15 AM"
        },
        {
            "period": "2/6",
            "start": "10:00 AM",
            "end": "11:35 AM"
        },
        {
            "period": "lunch",
            "start": "11:35 AM",
            "end": "12:35 PM"
        },
        {
            "period": "3/7",
            "start": "12:35 PM",
            "end": "2:10 PM"
        },
        {
            "period": "4/8",
            "start": "2:20 PM",
            "end": "3:55 PM"
        },
    ],
    "friday": [
        {
            "period": "1/5",
            "start": "8:15 AM",
            "end": "9:40 AM"
        },
        {
            "period": "advisory",
            "start": "9:45 AM",
            "end": "10:35 AM"
        },
        {
            "period": "2/6",
            "start": "10:40 AM",
            "end": "12:05 PM"
        },
        {
            "period": "lunch",
            "start": "12:05 PM",
            "end": "1:00 PM"
        },
        {
            "period": "3/7",
            "start": "1:00 PM",
            "end": "2:25 PM"
        },
        {
            "period": "4/8",
            "start": "2:30 PM",
            "end": "3:55 PM"
        },
    ],
};

app.get('/', (req, res) => {
  res.render('index', {schedules});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
