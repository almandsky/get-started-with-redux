import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Link from '../../components/Link';
import expect from 'expect';

function setup(active = false) {
  const props = {
    active,
    children: {},
    onClick: expect.createSpy()
  };

  const renderer = TestUtils.createRenderer();

  renderer.render(
    <Link {...props} />
  );

  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Link Components', () => {
  it('renders a Link', () => {
    const { output } = setup();
    expect(output.type).toBe('a');
  });

  it('renders a Link as span when selected', () => {
    const { output } = setup(true);
    expect(output.type).toBe('span');
  });
});
