import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';
import { shallow } from 'enzyme';

describe('Test in <TodoListitem />', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={0}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test('should show the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call handleDelete function', () => {
    wrapper.find('button').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('should call handletoggle function', () => {
    wrapper.find('p').simulate('click');
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('should call text correctly', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`);
  });

  test('should have the complete class if todo done is true', () => {
    const todo = demoTodos[0];
    todo.done = true;

    const wrapper = shallow(<TodoListItem todo={todo} />);

    expect(wrapper.find('p').hasClass('complete')).toBe(true);
  });
});
