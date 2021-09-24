
const express = require('express');
const fortune = require('./fortune');

const app = express();
app.use(express.json());

const fortuneList = [
	"you will be hungry in one hour",
	"stop procrastinating...starting tomorrow",
	"your problem is bigger than you think",
	"try again later. Fortune teller sleeping",
	"you should ignore the previous fortune",
	"I see money in your future…it\’s not yours though",
	"enjoy yourself while you can…",
	"this fortune is never gonna give you up, never gonna let you down",
	"your pet is planning to eat you",
	"you are about to finish reading a fortune",
	"plan to be spontaneous tomorrow",
	"you will find happiness at 5pm on Friday",
	"today would be a good day to have a good day",
	"all fortunes are wrong except this one",
	"avoid taking unnecessary gambles. Your lucky numbers are 4, 17, 29, 31, 36, 40",
	"there\’s an alien invasion coming very soon",
	"two days from now, tomorrow will be yesterday",
	"hard work will pay off in the future. Laziness will pay off now",
	"you are going nowhere, but at least the path is interesting",
	"if at first you don\’t succeed, then skydiving is not for you"
]
	

/* class Fortune {
	constructor(name) {
		this.name = name;
		this.fortune = fortuneList[Math.floor(Math.random()*fortuneList.length)];
	};

	getFortune(name) {
		let fortune = this.fortune;
		return `${name}, ${fortune}`;
	};
}; */

let fortunes = [
    {id: 1, name: "Tom", fortune: "if at first you don\’t succeed, then skydiving is not for you"},
    {id: 2, name: "Beth", fortune: "you are going nowhere, but at least the path is interesting"}
];

const getFortunes = () => {
    return fortuneList[Math.floor(Math.random()*fortuneList.length)];
}


app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Fortune Teller API' })
})

app.get('/fortunes', (req, res) => {
    res.json({ all: fortunes});
});

app.post('/fortunes', (req,res) => {
    let newFortune = { id: fortunes.length+1, name: req.body.name, fortune: getFortunes()}
    console.log(newFortune);
    fortunes.push(newFortune);
    res.status(201).json({message: "Name added"});
});

app.delete('/fortunes/:id', (req,res) => {
    let userId = parseInt(req.params.id);
    let selectUser = fortunes.find(user => user.id === userId);
    fortunes.splice(0,1);
    //res.json(selectUser);
    res.send(`User ID: ${userId} deleted.`);
    console.log(fortunes);
})

module.exports = app;
