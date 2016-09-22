import { renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

// describe is a suite of similar tests
describe('App', () => {

  // renders component to dom with react
  const component = renderComponent(App);

  // built in function that runs before every it
  beforeEach( () => {});

  // it tests a specific attribute of a target
  it('renders to the page', () => {

    //      target  | assertion
    expect(component).to.exist;

  });

  it('shows a comment box', () => {

    expect(component.find('.comment-box')).to.exist;

  });

  it('shows a comment list', () => {

    expect(component.find('.comment-list')).to.exist;

  });

});
