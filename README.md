# case-state-guard

Tiny **state-machine guard** for review-queue style tools: validate transitions instead of accepting any write.

Maps to Trust & Safety operations patterns — fuzzy states create fuzzy queues.

## Usage

```ts
import { assertTransition } from "./src/machine.js";

const err = assertTransition("open", "resolved");
if (err) throw new Error(`${err.from} → ${err.to} not allowed`);
```

## Tests

```bash
npm install
npm test
```

[Christopher Xu](https://github.com/chris-xu02) · [Portfolio](https://christopher-three.vercel.app)