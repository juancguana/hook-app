import { act } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';

describe('first', () => {
  const wrapper = shallow(<TodoApp />);

  test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should add a todo', () => {
    const wrapper = mount(<TodoApp />);

    Storage.prototype.setItem = jest.fn(() => {});

    act(() => {
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
    });
    expect(wrapper.find('h1').text().trim()).toBe('Todo App (2)');

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  test('should delete a todo', () => {
    wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
    wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);

    expect(wrapper.find('h1').text().trim()).toBe('Todo App (0)');
  });
});
