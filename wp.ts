#!/usr/bin/env -S deno run --allow-all

import $ from "jsr:@david/dax@0.42.0";

// run a command
await $`echo 5`; // outputs: 5
