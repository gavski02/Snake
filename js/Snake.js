function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];

    this.dir = function (x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.eat = function(pos) {
        let d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            this.total++;
            return true;
        } else {
            return false;
        }
    }

    this.death = function() {
        for (let i = 0; i < this.tail.length; i++) {
            let pos = this.tail[i];
            let d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
                this.total = 0;
                this.tail = [];
            }
        }
    }

    this.update = function() {
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        if (this.total >= 1) {
            this.tail[this.total - 1] = createVector(this.x, this.y);
        }
        this.x = this.x + this.xspeed*s;
        this.y = this.y + this.yspeed*s;

        this.x = constrain(this.x, 0, width-s);
        this.y = constrain(this.y, 0, height-s);
    }

    this.show = function() {
        fill(124, 252, 0);
        for (let i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, s, s);
        }
        rect(this.x, this.y, s, s)
    }
}