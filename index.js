const express = require('express');
const port = process.env.PORT || 2000;
const app = express();


app.listen(port, () => {
    console.log(`We are LIVE at http://localhost:${port}`)
})

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
	

class Fortune {
	constructor(name, fortuneIndex) {
		this.name = name;
		this.fortune = fortuneList[fortuneIndex];
	};


	getFortune(name) {
		let fortune = new Fortune(name, Math.floor(Math.random()*fortuneList.length));
		return `${name}, ${fortune}`;
	};
};