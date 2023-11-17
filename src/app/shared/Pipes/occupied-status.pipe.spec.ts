import { OccupiedStatusPipe } from './occupied-status.pipe';

describe('OccupiedStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new OccupiedStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
