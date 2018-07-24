const React = require('react');
const renderer = require('react-test-renderer');

const Counter = require('.');

describe('Counter', () => {
  test('It renders', () => {
    const component = renderer.create(<Counter />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
