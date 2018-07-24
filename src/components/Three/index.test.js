const React = require('react');
const renderer = require('react-test-renderer');

const Three = require('.');

describe('Three', () => {
  test('It renders', () => {
    const component = renderer.create(<Three />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
