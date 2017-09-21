var thrihyrn = {
	haed: 0,
	breidd: 0,
	flatarmal: function() {
		return (this.haed * this.breidd) / 2;
	}
};

var hring1 = Object.create(thrihyrn);
hring1.haed = 5;
hring1.breidd = 20;

document.write("Flatarmál þríhyrnings med hæðina " + hring1.haed + " og breiddina " + hring1.breidd + " er: " + hring1.flatarmal());