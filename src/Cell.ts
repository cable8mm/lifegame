import GameConfig from "@/GameConfig";

export default class Cell extends Phaser.Geom.Rectangle {
  public active: boolean;
  private _score: integer = 0;
  private scene: Phaser.Scene;

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
  get score(): integer {
    return this._score;
  }
  set score(value: integer) {
    if (this.active && (2 > value || 3 < value)) {
      this.active = false;
    } else if (!this.active && 3 == value) {
      this.active = true;
    }

    this._score = value;
  }
}
