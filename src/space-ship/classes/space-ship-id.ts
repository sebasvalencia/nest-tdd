/* eslint-disable prettier/prettier */
export class SpaceShipId {
  private readonly id: string;

  private constructor(code: string) {
    SpaceShipId.validate(code);
    this.id = code;
  }

  public value(): string {
    return this.id;
  }

  public static from(id: string): SpaceShipId {
    return new SpaceShipId(id);
  }

  private static validate(id: string) {
    const isValid = id && id.length === 12;
    if (!isValid) {
      throw new Error('Invalid Space ship ID');
    }
  }
}
