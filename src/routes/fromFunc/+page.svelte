<script lang="ts">
  import {
    Obj,
    Text,
    Textarea,
    Switch,
    Select,
    Radio,
  } from "$lib/input/inputFuncs.svelte.js";

  let _ = Obj({
    props: {
      elms: {
        a: Text({ props: { label: "qqqqqqqq" } }),
        b: Textarea({ props: { label: "wwwwwwwwwww" } }),
        ok: Switch({ props: { label: "wwwwwwwwwww" } }),
        sel: Select({
          props: {
            label: "qqqqqqqqqqq",
            options: [
              { label: "k", value: "a" },
              { label: "erk", value: "b" },
              { label: "kwer", value: "c" },
              { label: "kqqqqqqq", value: "d" },
            ],
          },
        }),
        rad: Radio({
          props: {
            label: "qqqqqqqqqqq",
            cols: 2,
            sty: "bordered",
            radio: [
              { label: "k", value: "a" },
              { label: "erk", value: "b" },
              { label: "kwer", value: "c" },
              { label: "kqqqqqqq", value: "d" },
            ],
          },
        }),
      },
    },
  });
</script>

<h1>Text</h1>
<svelte:component this={_.cmp} {..._.schema} />
{JSON.stringify(_.schema.value)}
