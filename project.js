(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 960,
	height: 540,
	fps: 60,
	color: "#FFFFFF",
	manifest: [
		{src:"images/background.png", id:"background"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/note.png", id:"note"},
		{src:"images/star.png", id:"star"}
	]
};



// symbols:



(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,766,133);


(lib.note = function() {
	this.initialize(img.note);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,800);


(lib.star = function() {
	this.initialize(img.star);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,31);


(lib.starBase = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.star();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32,31);


(lib.starBeat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.starBase();
	this.instance.setTransform(-0.3,-0.1,1,1,0,0,0,15.7,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:16,regY:15.5,x:0,y:0.1},0).wait(15).to({scaleX:1},0).wait(14).to({scaleX:1.02,scaleY:1.01},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:0.1,y:0},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:0.1},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:0},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:0.1},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:0},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:0.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:0},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:0.1},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-15.5,32,31);


(lib.star_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.starBeat();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(151).to({rotation:1},0).wait(1).to({rotation:4.1},0).wait(1).to({rotation:9.1},0).wait(1).to({rotation:15.7},0).wait(1).to({rotation:23.9},0).wait(1).to({rotation:33.5},0).wait(1).to({rotation:44.4},0).wait(1).to({rotation:56.3},0).wait(1).to({rotation:69.3},0).wait(1).to({rotation:83.1},0).wait(1).to({rotation:97.6},0).wait(1).to({rotation:112.6},0).wait(1).to({rotation:128.1},0).wait(1).to({rotation:143.9},0).wait(1).to({rotation:159.9},0).wait(1).to({rotation:175.9},0).wait(1).to({rotation:191.9},0).wait(1).to({rotation:207.8},0).wait(1).to({rotation:223.3},0).wait(1).to({rotation:238.4},0).wait(1).to({rotation:253.1},0).wait(1).to({rotation:267.2},0).wait(1).to({rotation:280.6},0).wait(1).to({rotation:293.3},0).wait(1).to({rotation:305},0).wait(1).to({rotation:315.9},0).wait(1).to({rotation:325.7},0).wait(1).to({rotation:334.4},0).wait(1).to({rotation:342},0).wait(1).to({rotation:348.3},0).wait(1).to({rotation:353.3},0).wait(1).to({rotation:357},0).wait(1).to({rotation:359.2},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-15.5,32,31);


// stage content:



(lib.project = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// star
	this.instance = new lib.star_1();
	this.instance.setTransform(545.5,365.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// star
	this.instance_1 = new lib.star_1();
	this.instance_1.setTransform(496.9,365.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// star
	this.instance_2 = new lib.star_1();
	this.instance_2.setTransform(450.8,365.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// star
	this.instance_3 = new lib.star_1();
	this.instance_3.setTransform(405.2,365.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// songTitle
	this.songTitle = new cjs.Text("Tell your world", "bold 72px 'DejaVu Sans'", "#333333");
	this.songTitle.name = "songTitle";
	this.songTitle.textAlign = "center";
	this.songTitle.lineHeight = 74;
	this.songTitle.lineWidth = 868;
	this.songTitle.setTransform(479.9,220.7);

	this.timeline.addTween(cjs.Tween.get(this.songTitle).wait(1));

	// test
	this.instance_4 = new lib.background();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,270,960,540);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;