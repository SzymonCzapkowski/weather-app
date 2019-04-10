class Drop {
	constructor(xPosition, yPosition, dropSpeed, dropWidth, dropHeight) {
		this.xPosition = xPosition;
		this.yPosition = yPosition;
		this.dropSpeed = dropSpeed;
		this.dropWidth = dropWidth;
		this.dropHeight = dropHeight;
		this.element;
	}

	show() {
		this.element = document.createElement("div");
		this.element.className += "rainDrop";
		this.element.style.top = this.yPosition + "px";
		this.element.style.left = this.xPosition + "px";
		this.element.style.width = this.dropWidth + "px";
		this.element.style.height = this.dropHeight + "px";

		let el = document.getElementById("weathercondition");
		el.appendChild(this.element);
	}

	fall() {
		const makeItRain = () => {
			this.yPosition = this.yPosition + this.dropSpeed;
			this.element.style.top = this.yPosition +"px";

			if(this.yPosition < window.innerHeight) {
				requestAnimationFrame(makeItRain);
			} else {
				this.yPosition = -10;
				requestAnimationFrame(makeItRain);
			}

		}

		requestAnimationFrame(makeItRain);
	}
}

    // **************************************************

const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight;
const defaultDropNum = 0;


function makeItRain (num) {

	let elements = document.getElementById("weathercondition");

	while (elements.hasChildNodes()) {
		elements.removeChild(elements.lastChild);
	}


	for (let i = 0 ; i < num ; i ++) {
		let randomX = Math.floor(Math.random() * (pageWidth));
		let randomY = Math.floor(Math.random() * (pageHeight));
		let dropSpeed = Math.floor(Math.random() * (25 - 5)) + 5;
		let dropWidth = Math.floor(Math.random() * (dropSpeed/10 - 1)) + 1;
		let dropHeight = Math.floor(Math.random() * (dropSpeed*2 - 3)) + 3;
		let d = new Drop(randomX, randomY, dropSpeed, dropWidth, dropHeight);

		d.show();
		d.fall();

	}

}

function updateNumberInView (num) {
	let el = defaultDropNum;
	el.nodeValue = num;
}

function changeNumDrops (num) {
	updateNumberInView(num);
	makeItRain(num);
}

updateNumberInView(defaultDropNum);
makeItRain(defaultDropNum);
