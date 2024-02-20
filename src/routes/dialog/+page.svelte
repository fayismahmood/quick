<script lang="ts">
  import { Obj } from "$lib/input/inputFuncs.svelte.js";
  import Dialog from "$lib/modals/dialog.svelte";
  import {
    Text,
    Textarea,
    Switch,
    Select,
    Radio,
  } from "$lib/input/inputFuncs.svelte.js";
  let open = $state(false);
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

<div>
  <Dialog bind:open header="a asdjfklasdf" cont={_} />
  <button
    on:click={() => {
      open = true;
    }}>Click</button
  >

  {JSON.stringify(_.schema.value)}
</div>
