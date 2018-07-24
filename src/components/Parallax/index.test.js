const React = require('react');
const renderer = require('react-test-renderer');

const Parallax = require('.');

describe('Parallax', () => {
  test('It renders', () => {
    const component = renderer.create(<Parallax />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
