import { useState } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useAsyncEffect } from '../lib';

function resolutionTestHook() {
  const [state, setState] = useState('original value');
  useAsyncEffect(async () => {
    const value = await Promise.resolve('resolved Value');
    setState(value);
  }, []);
  return state;
}

describe('Main use async effect hooks', () => {
  it('Should return default value if there are no calls to dispatch', () => {
    const { result } = renderHook(() => resolutionTestHook());

    expect(result.current).toBe('original value');
  });
  // it('Should return the resolved value after acting', () => {
  //   const { result } = renderHook(() => resolutionTestHook());

  //   act(async () => {
  //     resolutionTestHook();
  //   });

  //   act(() => {
  //     expect(result.current).toBe('resolved value');
  //   });
  // });
});

it('', () => { expect(true).toEqual(true); });
