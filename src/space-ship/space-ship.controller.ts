import { Controller } from '@nestjs/common';
import { SpaceShipService } from './space-ship.service';

@Controller('space-ship')
export class SpaceShipController {
  constructor(private readonly service: SpaceShipService) {}

  public save(spaceShip: any) {
    this.service.saveSpaceShip(spaceShip);
  }
}
