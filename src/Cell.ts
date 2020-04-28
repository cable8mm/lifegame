import GameConfig from "@/GameConfig";
import CellColor from "@/CellColor";

export default class Cell extends Phaser.Geom.Rectangle {
  public active: boolean;
  private scene: Phaser.Scene;

  private _score: integer = 0;
  public _color: number = 0x33ff33;

  constructor(
    scene: Phaser.Scene,
    position: TwoDimensionPosition,
    active: boolean
  ) {
    super(
      position.x * GameConfig.CELL_SIZE,
      position.y * GameConfig.CELL_SIZE,
      GameConfig.CELL_SIZE - 1,
      GameConfig.CELL_SIZE - 1
    );

    this.scene = scene;
    this.active = active;
  }

  get color(): integer {
    return this._color;
  }

  set color(value: integer) {
    this._color = value;
  }

  get score(): integer {
    return this._score;
  }

  set score(value: integer) {
    this._color = CellColor[value];

    if (this.active && (2 > value || 3 < value)) {
      this.active = false;
    } else if (!this.active && 3 == value) {
      this.active = true;
    }

    this._score = value;
  }
}
