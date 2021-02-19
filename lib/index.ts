import { useEffect } from 'react';

export function useAsyncEffect(
  effect: () => Promise<ReturnType<React.EffectCallback>>,
  deps?: React.DependencyList | undefined,
) {
  useEffect(() => { effect(); }, deps);
}
