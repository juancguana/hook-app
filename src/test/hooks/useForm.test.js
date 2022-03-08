import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Test in useForm', () => {
  const initialForm = {
    name: 'Juan',
    email: 'juan@gmail.com',
  };

  test('should return a default form', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;
    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('should change value of form (change name)', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(() =>
      handleInputChange({
        target: {
          name: 'name',
          value: 'Carlos',
        },
      })
    );
    const [values] = result.current;
    expect(values).toEqual({ ...initialForm, name: 'Carlos' });
  });

  test('should restablish form with reset', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Carlos',
        },
      });
      reset();
    });
    const [values] = result.current;
    expect(values).toEqual(initialForm);
  });
});
