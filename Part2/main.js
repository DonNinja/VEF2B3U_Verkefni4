		let geimskip = {
		name: "SpaceRacer",
		life: 10,
		showName: function() {
			return this.name();
		}
	};

	let geimskip1 = Object.create(geimskip);
	geimskip1.name = "Lead SpaceRacer";
	document.getElementById('demo').innerHTML = "<p>Fyrsta geimskipið heitir núna " + geimskip1.name + "</p>";
	let geimskip2 = Object.create(geimskip);
	let geimskip3 = Object.create(geimskip);
	//document.write(geimskip.speed);
	document.getElementById('hradi').innerHTML = geimskip.speed;

	//geimskip.constructor.speed;
	geimskip.prototype.speed = 5;
	geimskip.prototype.fly = function() {
		
	}