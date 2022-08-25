/* eslint-disable prettier/prettier */
import { SpaceShipId } from './space-ship-id';

describe('SpaceShipId', () => {
  it('should return back a valid id', () => {
    const id = 'should fail';

    const spaceShipId = () => SpaceShipId.from(id);
    expect(spaceShipId).toThrow(Error);
  });

  it('should return back a valid id', () => {
    const id = 'abc-0000-xyz';
    const spaceShipId = () => SpaceShipId.from(id);
    expect(spaceShipId).toBeTruthy();
  });
});
