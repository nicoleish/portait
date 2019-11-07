let snow, coal, stick, carrot;

function setup() {
    createCanvas(800, 600);
    snow = 255;
    coal = 0;
    stick = color(121, 85, 72);
    carrot = color(255, 172, 51);
	coal2 = color(128, 179, 247);
    stick2 = color(139, 195, 74);
    carrot2 = color(247, 114, 238);
	coal3 = color(244, 67, 54);
    stick3 = color(162, 54, 244);
    carrot3 = color(67, 54, 244);
}

function draw() {
	background(102, 214, 229);
    snowman(400, 300);
	snowman2(200,500);
	snowman3(600,500);
}

function snowman(x, y) {
    fill(stick);
    rectMode(CENTER);
    rect(x, y-60, 150, 10);

    fill(snow);
    ellipse(x, y, 100, 100);
    ellipse(x, y-50, 80, 80);
    ellipse(x, y-100, 60, 60);

    fill(coal);
    ellipse(x, y-50, 10, 10);
    ellipse(x, y-30, 10, 10);
    ellipse(x-10, y-110, 10, 10);
    ellipse(x+10, y-110, 10, 10);

    fill(carrot);
    beginShape();
    vertex(x, y-100);
    vertex(x, y-90);
    vertex(x+30, y-95);
    endShape();
}

function snowman2(x, y) {
    fill(stick2);
    rectMode(CENTER);
    rect(x, y-60, 150, 10);

    fill(snow);
    ellipse(x, y, 100, 100);
    ellipse(x, y-50, 80, 80);
    ellipse(x, y-100, 60, 60);

    fill(coal2);
    ellipse(x, y-50, 10, 10);
    ellipse(x, y-30, 10, 10);
    ellipse(x-10, y-110, 10, 10);
    ellipse(x+10, y-110, 10, 10);

    fill(carrot2);
    beginShape();
    vertex(x, y-100);
    vertex(x, y-90);
    vertex(x+30, y-95);
    endShape();
}

function snowman3(x, y) {
    fill(stick3);
    rectMode(CENTER);
    rect(x, y-60, 150, 10);

    fill(snow);
    ellipse(x, y, 100, 100);
    ellipse(x, y-50, 80, 80);
    ellipse(x, y-100, 60, 60);

    fill(coal3);
    ellipse(x, y-50, 10, 10);
    ellipse(x, y-30, 10, 10);
    ellipse(x-10, y-110, 10, 10);
    ellipse(x+10, y-110, 10, 10);

    fill(carrot3);
    beginShape();
    vertex(x, y-100);
    vertex(x, y-90);
    vertex(x+30, y-95);
    endShape();
}