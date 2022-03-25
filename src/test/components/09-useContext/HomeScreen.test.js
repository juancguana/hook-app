import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Test in <HomeScreen />', () => {
  test('Should show correctly', () => {

    const user = { name: 'Juan', email: 'juan@gmail.com' };

    const wrapper = mount(
      <UserContext.Provider value={{ user }}>
        <HomeScreen />;
      </UserContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();

  });
});
