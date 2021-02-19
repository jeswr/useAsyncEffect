# useAsyncEffect

Convenience function for usage of useEffect with async functions in React.

[![GitHub license](https://img.shields.io/github/license/jeswr/useAsyncEffect.svg)](https://github.com/jeswr/useState/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/@jeswr/use-async-effect.svg)](https://www.npmjs.com/package/@jeswr/use-async-effect)
[![build](https://img.shields.io/github/workflow/status/jeswr/useAsyncEffect/Node.js%20CI)](https://github.com/jeswr/useAsyncEffect/tree/main/)
[![Dependabot](https://badgen.net/badge/Dependabot/enabled/green?icon=dependabot)](https://dependabot.com/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Why

Convenience and makes code cleaner. The following is allowed

```ts
import { useAsyncEffect } from "@jeswr/use-async-effect";

function MyComponent() {
  useAsyncEffect(async () => {
    /* Effect goes here */
  }, []);
  return /* JSX Output */
}
```

in constrast, async function calls with useEffect in React should be structured as follows:

```ts
import { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    (async () => {
      /* Effect goes here */
    })();
  }, []);
  return /* JSX Output */
}
```

## License

©2021–present
[Jesse Wright](https://github.com/jeswr),
[MIT License](https://github.com/jeswr/useAsyncEffect/blob/master/LICENSE).
