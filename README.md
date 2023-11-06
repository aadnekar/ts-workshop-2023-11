# ts-workshop-2023-11

All credits go to [Gabriel Vergnaud](https://twitter.com/GabrielVergnaud), creator of Type-Level Typescript (https://type-level-typescript.com/).

This repository/project is simply a recreation of his One Hour Typescript Workshop article https://type-level-typescript.com/articles/one-hour-workshop,
and is only intended to be a project that I and some coworkers can work through together, and possibly extends to challenge ourselves.

I've added all the different parts under `./exercises/` directory.
After running `bun install`, you should also be able to run

```zsh
bun run part1
bun run part2
bun run part3
bun run part4
bun run part5
bun run part6
```

in order to run `tsc --watch --noEmit <part>`, which is a nice way to watch the progress of each section.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.3. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
