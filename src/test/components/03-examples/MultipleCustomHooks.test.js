import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Test in <MultipleCustomHooks />>', () => {
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 10,
      increment: () => {},
    });
  });

  test('should render correctly', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should shot the info', () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: 'Juan',
          quote: 'Hola mundo',
        },
      ],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('.mb-0').text().trim()).toBe('Hola mundo');
    expect(wrapper.find('footer').text().trim()).toBe('Juan');
  });
});
