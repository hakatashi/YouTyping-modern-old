(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 450,
	fps: 60,
	color: "#FFFFFF",
	manifest: [
		{src:"images/note.png", id:"note"}
	]
};



// symbols:



(lib.note = function() {
	this.initialize(img.note);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,800);


(lib.noteBase = function() {
	this.initialize();

	// noteBase
	this.instance = new lib.note();
	this.instance.setTransform(0,0,0.075,0.075);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.note_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// note
	this.instance = new lib.noteBase();
	this.instance.setTransform(30,30,1,1,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.85,scaleY:0.85},0).wait(1).to({scaleX:0.85,scaleY:0.85},0).wait(1).to({scaleX:0.84,scaleY:0.84},0).wait(1).to({scaleX:0.83,scaleY:0.83},0).wait(1).to({scaleX:0.84,scaleY:0.84},0).wait(1).to({scaleX:0.84,scaleY:0.84},0).wait(1).to({scaleX:0.85,scaleY:0.85},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


// stage content:



(lib.project = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.instance = new lib.note_1();
	this.instance.setTransform(435,128,1,1,0,0,0,30,30);

	this.instance_1 = new lib.note_1();
	this.instance_1.setTransform(229,265,1,1,0,0,0,30,30);

	this.instance_2 = new lib.note_1();
	this.instance_2.setTransform(495,254.8,1,1,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(599,323,326.1,197);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;