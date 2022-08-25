import { Test, TestingModule } from '@nestjs/testing';
import { SpaceShipController } from './space-ship.controller';
import { SpaceShipService } from './space-ship.service';
jest.mock('./space-ship.service');

describe('SpaceShipController', () => {
  let controller: SpaceShipController;
  let service: SpaceShipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpaceShipController],
      providers: [SpaceShipService],
      imports:[]
    }).compile();

    controller = module.get<SpaceShipController>(SpaceShipController);
    service = module.get<SpaceShipService>(SpaceShipService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call the service', () => {
    const spaceShip = {};
    
    controller.save(spaceShip);
    expect(service.saveSpaceShip).toHaveBeenCalled();
  });
});
