#pragma strict
var toggle = true;
var x:float = 0;
var y:float = 0;
var z:float = 0;
var currentY:float = 0;
var fakeX:float = 0;
var fakeDir:float = 1;
var inputAccelerationX:float = 0;


function Start () {


	var r : float = 167 / 255.000000;
	var b : float = 131 / 255.000000;
	var g : float = 225 / 255.000000;

	renderer.material.color = Color(r, b, g);
}

function Update() {

	var r : float = Random.Range(0, 255) / 255.000000;
	var b : float = Random.Range(0, 255) / 255.000000;
	var g : float = Random.Range(0, 255) / 255.000000;
	var targetValue : float = 0;
	var value : float = 0;
	var direction : float = 0;

	if (Input.GetButtonDown("Jump")) {
		renderer.material.color = Color(r, b, g);
		Debug.Log(toggle);
	}

	// if (fakeX >= 1 && fakeDir == 1) {
	// 	fakeDir = -1;
	// } else if (fakeX <= -1 && fakeDir == -1) {
	// 	fakeDir = 1;
	// }

	// fakeX = fakeX + 0.015 * fakeDir;

	inputAccelerationX = Input.acceleration.x;
	//inputAccelerationX = fakeX;
 	
	// set target value
 	targetValue = inputAccelerationX / 1 * 30;

 	// save difference
 	value = targetValue - currentY;

 	// calc difference
 	currentY += (targetValue - currentY);

 	// rotate
 	transform.Rotate(0, value, 0);

 	Debug.Log('targetValue: ' + targetValue.ToString("F10"));
 	Debug.Log('currentY: ' + currentY.ToString("F10"));


	var fingerCount = 0;
	for (var touch : Touch in Input.touches) {
		if (touch.phase == TouchPhase.Began) {
			fingerCount++;
		}
			
	}
	if (fingerCount > 0) {
		renderer.material.color = Color(r, b, g);
	}
			

}