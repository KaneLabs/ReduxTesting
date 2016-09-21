import { renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

// describe is a suite of similar tests
describe('App', () => {

  // it tests a specific attribute of a target
  it('shows the right text', () => {

    // create instance of an app
    const component = renderComponent(App);

    //      target  | assertion |   expected
    expect(component).to.contain('React simple starter');

  });

});
