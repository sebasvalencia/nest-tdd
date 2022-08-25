import { Controller, Post } from '@nestjs/common';
import { SpaceShipId } from './classes/space-ship-id';
import { SpaceShipService } from './space-ship.service';

@Controller('space-ship')
export class SpaceShipController {
  constructor(private readonly service: SpaceShipService) {}

  @Post()
  public save(spaceShip: SaveSpaceShipRequest) {
    const spaceShipId = SpaceShipId.from(spaceShip.spaceShipId);
    this.service.saveSpaceShip(spaceShip);
  }
}

export interface SaveSpaceShipRequest {
  spaceShipId: string;
  spaceShipName: string;
  spaceShipNumber: number;
  isFasterThanLight: boolean;
}
