import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Footer from '../../components/Footer';
import expect from 'expect';

function setup() {
  const props = {
    visibilityFilter: 'SHOW_ALL',
    onFilterClick: expect.createSpy()
  };

  const renderer = TestUtils.createRenderer();

  renderer.render(
    <Footer {...props} />
  );

  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Footer Components', () => {
  it('renders the Footer', () => {
    const { output } = setup();
    expect(output.type).toBe('p');
  });
});
