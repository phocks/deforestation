const React = require('react');
const renderer = require('react-test-renderer');

const Sketch = require('.');

describe('Sketch', () => {
  test('It renders', () => {
    const component = renderer.create(<Sketch />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
