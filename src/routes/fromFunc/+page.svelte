<script lang="ts">
  import {
    Obj,
    Text,
    Textarea,
    Switch,
    Select,
    Radio,
  } from "$lib/input/createInput.svelte.js";

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
<div class="p-5 grid gap-4 m-5 border rounded-lg shadow">
  <svelte:component this={_.cmp} {..._.schema} />
</div>
{JSON.stringify(_.schema.value)}
