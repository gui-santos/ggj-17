//THE GAME!
var playState = {
  create: function () {
    //
    //this.placeholder = game.add.sprite(game.world.centerX, game.world.centerY, 'placeholder_1');
    //this.placeholder.anchor.set(0.5);
    this.body = document.getElementsByTagName("body")[0];

    //storing colors
    this.colors = [
      '0xff0000', //red1
      '0xcd0000', //red2
      '0xa50000', //red3
      '0xff7f00', //orange1
      '0xff6b00', //orange2
      '0xff6100', //orange3
      '0xffff00', //yeallow1
      '0xffcd00', //yellow2
      '0xffa500', //yellow3
      '0x00ff00', //green1
      '0x00cd00', //green2
      '0x00a500', //green3
      '0x0000ff', //blue1
      '0x0000b9', //blue2
      '0x000091', //blue3
      '0x8f00ff', //lpurple1
      '0x8500cd', //lpurple2
      '0x7100b9', //lpurple3
      '0xaf0082', //purple1
      '0xa5006e', //purple2
      '0xa5005f' //purple3
    ];

    //storing points
    this.points = {
      red1: [
        new Phaser.Point(568.1, 175),
        new Phaser.Point(523, 220.1),
        new Phaser.Point(549.2, 231.2),
        new Phaser.Point(578.2, 200.1)
      ],
      red2: [
        new Phaser.Point(551, 134.5),
        new Phaser.Point(482.4, 203.8),
        new Phaser.Point(523, 220.1),
        new Phaser.Point(568.1, 175)
      ],
      red3: [
        new Phaser.Point(525.8, 76.5),
        new Phaser.Point(424.4, 179.5),
        new Phaser.Point(482.4, 203.8),
        new Phaser.Point(551, 134.5)
      ],
      orange1: [
        new Phaser.Point(523, 220.1),
        new Phaser.Point(523, 283.9),
        new Phaser.Point(549.2, 272.8),
        new Phaser.Point(549.2, 231.2)
      ],
      orange2: [
        new Phaser.Point(482.4,203.8),
        new Phaser.Point(482.3,299.7),
        new Phaser.Point(523,283.9),
        new Phaser.Point(523,220.1)
      ],
      orange3: [
        new Phaser.Point(424.4,179.5),
        new Phaser.Point(424.4,323.8),
        new Phaser.Point(482.3,299.6),
        new Phaser.Point(482.4,203.9)
      ],
      yellow1: [
        new Phaser.Point(523,283.9),
        new Phaser.Point(568.1,329),
        new Phaser.Point(579.1,301.1),
        new Phaser.Point(549.2,272.8)
      ],
      yellow2: [
        new Phaser.Point(482.3,299.7),
        new Phaser.Point(551.3,369.6),
        new Phaser.Point(568.4,328.4),
        new Phaser.Point(523,283.9)
      ],
      yellow3: [
        new Phaser.Point(424.4,323.9),
        new Phaser.Point(527.8,425.7),
        new Phaser.Point(551.3,369.6),
        new Phaser.Point(482.3,299.7),
      ],
      green1: [
        new Phaser.Point(568.1,329),
        new Phaser.Point(631.9,329),
        new Phaser.Point(620.9,301.1),
        new Phaser.Point(579.1,301.1)
      ],
      green2: [
        new Phaser.Point(551.3,369.6),
        new Phaser.Point(649.4,369.6),
        new Phaser.Point(631.9,328.4),
        new Phaser.Point(568.3,328.4)
      ],
      green3: [
        new Phaser.Point(527.8,425.7),
        new Phaser.Point(672.8,425.7),
        new Phaser.Point(649.7,369.6),
        new Phaser.Point(551.3,369.6)
      ],
      blue1: [
        new Phaser.Point(631.9,329),
        new Phaser.Point(677,284.2),
        new Phaser.Point(649.4,272.9),
        new Phaser.Point(620.9,301.3)
      ],
      blue2: [
        new Phaser.Point(649,369),
        new Phaser.Point(717.6,300),
        new Phaser.Point(677,284.2),
        new Phaser.Point(631.9,328.4)
      ],
      blue3: [
        new Phaser.Point(672.3,425.9),
        new Phaser.Point(775.6,323.9),
        new Phaser.Point(717.6,300),
        new Phaser.Point(649,369)
      ],
      lpurple1: [
        new Phaser.Point(677,284.2),
        new Phaser.Point(677,220.1),
        new Phaser.Point(650.7,231.2),
        new Phaser.Point(649.4,272.9)
      ],
      lpurple2: [
        new Phaser.Point(717.6,300.4),
        new Phaser.Point(718.2,203.6),
        new Phaser.Point(677,220.5),
        new Phaser.Point(677,284.2)
      ],
      lpurple3: [
        new Phaser.Point(775.6,323.8),
        new Phaser.Point(776.4,179.5),
        new Phaser.Point(718.2,203.6),
        new Phaser.Point(717.6,300.4),
      ],
      purple1: [
        new Phaser.Point(677,220.1),
        new Phaser.Point(631.9,175),
        new Phaser.Point(621.8,200.1),
        new Phaser.Point(650.7,231.2)
      ],
      purple2: [
        new Phaser.Point(718.2,203.6),
        new Phaser.Point(649,134.5),
        new Phaser.Point(631.9,175),
        new Phaser.Point(677,220.5)
      ],
      purple3: [
        new Phaser.Point(776.4,179.5),
        new Phaser.Point(674.2,76),
        new Phaser.Point(649,134.5),
        new Phaser.Point(718.2,203.6)
      ]
    };

    //storing polygons
    this.polygons = [];
    this.polygons[0] = new Phaser.Polygon(this.points.red1);
    this.polygons[1] = new Phaser.Polygon(this.points.red2);
    this.polygons[2] = new Phaser.Polygon(this.points.red3);

    this.polygons[3] = new Phaser.Polygon(this.points.orange1);
    this.polygons[4] = new Phaser.Polygon(this.points.orange2);
    this.polygons[5] = new Phaser.Polygon(this.points.orange3);

    //storing graphics
    this.graphs = [];

    //REDs
    this.graphs[0] = game.add.graphics(0, 0);
    this.graphs[0].boundsPadding = 0;
    this.graphs[0].alpha = 1;
    this.graphs[0].beginFill(this.colors[0]);
    this.graphs[0].drawPolygon(this.polygons[0].points);
    this.graphs[0].endFill();

    this.graphs[1] = game.add.graphics(0, 0);
    this.graphs[1].boundsPadding = 0;
    this.graphs[1].alpha = 1;
    this.graphs[1].beginFill(this.colors[1]);
    this.graphs[1].drawPolygon(this.polygons[1].points);
    this.graphs[1].endFill();

    this.graphs[2] = game.add.graphics(0, 0);
    this.graphs[2].boundsPadding = 0;
    this.graphs[2].alpha = 1;
    this.graphs[2].beginFill(this.colors[2]);
    this.graphs[2].drawPolygon(this.polygons[2].points);
    this.graphs[2].endFill();

    //ORANGEs
    this.graphs[3] = game.add.graphics(0, 0);
    this.graphs[3].boundsPadding = 0;
    this.graphs[3].alpha = 1;
    this.graphs[3].beginFill(this.colors[3]);
    this.graphs[3].drawPolygon(this.polygons[3].points);
    this.graphs[3].endFill();

    this.graphs[4] = game.add.graphics(0, 0);
    this.graphs[4].boundsPadding = 0;
    this.graphs[4].alpha = 1;
    this.graphs[4].beginFill(this.colors[4]);
    this.graphs[4].drawPolygon(this.polygons[4].points);
    this.graphs[4].endFill();

    this.graphs[5] = game.add.graphics(0, 0);
    this.graphs[5].boundsPadding = 0;
    this.graphs[5].alpha = 1;
    this.graphs[5].beginFill(this.colors[5]);
    this.graphs[5].drawPolygon(this.polygons[5].points);
    this.graphs[5].endFill();

    //YELLOWs
  },
  update: function () {
    //collisions for REDs
    for (var i = 0; i < this.polygons.length; i++) {
      var contain = this.polygons[i].contains(game.input.x, game.input.y);

      if (contain && game.input.activePointer.leftButton.isDown && this.graphs[i].alpha > 0) {
        this.fadeOut(this.graphs[i]);
        this.changeColor(this.colors[i]);
      }
    }

    //make the polygons show up randomly (1 ~ 7)
    //they need to stay on stage for a while. This time gets shorter as the game plays
  },
  fadeIn: function (polygon) {
    game.add.tween(polygon).to( { alpha: 1 }, 350, Phaser.Easing.Exponential.Out, true, 0);
  },
  fadeOut: function (polygon) {
    game.add.tween(polygon).to( { alpha: 0 }, 350, Phaser.Easing.Exponential.Out, true, 0, 0, false);
  },
  changeColor: function (color) {
    game.stage.backgroundColor = color;
    this.body.style.background = color;
    console.log(this.body);
    //game.fd.record(4);
  }
}