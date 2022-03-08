import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from './useFetch';

describe('Test in useFetch', () => {
  test('should return the default information', () => {
    const { result } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    );
    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(error);
  });

  test('should have the correct information', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    );

    await waitForNextUpdate({timeout:2000});

    const { data, loading, error } = result.current;

    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test('should handle error', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://reqres.in/apiid/users?page=2`)
    );
    await waitForNextUpdate();

    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe('No se pudo cargar la info');
  });
});
