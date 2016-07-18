import { expect } from 'chai';
import { counter } from '../index';

describe('index', () => {
  it('increase counter', () => {
    expect(counter(0, { type: 'INCREMENT' })).to.equal(1);
    expect(counter(1, { type: 'INCREMENT' })).to.equal(2);
  });

  it('decrease counter', () => {
    expect(counter(2, { type: 'DECREMENT' })).to.equal(1);
    expect(counter(1, { type: 'DECREMENT' })).to.equal(0);
  });
});
