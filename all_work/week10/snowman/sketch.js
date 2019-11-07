let snow, coal, stick, carrot;

function setup() {
    createCanvas(800, 600);
    snow = 255;
    coal = 0;
    stick = color(121, 85, 72);
    carrot = color(255, 172, 51);
}

function draw() {
    background(102, 214, 229);
    snowman(400, 300);
    // snowman(x,y) - draw snowman at x and y
    // change the color() values of snow/coal/stick/carrot between snowmen to make different colors
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