import React from 'react';
import TestUtils from 'react-addons-test-utils';
import FilterLink from '../../components/FilterLink';
import expect from 'expect';

function setup(selectedFilter = '') {
  const props = {
    filter: 'SHOW_ALL',
    currentFilter: selectedFilter,
    children: {},
    onClick: expect.createSpy()
  };

  const renderer = TestUtils.createRenderer();

  renderer.render(
    <FilterLink {...props} />
  );

  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('FilterLink Components', () => {
  it('renders a FilterLink', () => {
    const { output } = setup();
    expect(output.type).toBe('a');
  });

  it('renders a FilterLink as span when selected', () => {
    const { output } = setup('SHOW_ALL');
    expect(output.type).toBe('span');
  });
});