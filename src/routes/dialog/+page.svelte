<script lang="ts">
  import { Obj } from "$lib/input/createInput.svelte.js";
  import Dialog from "$lib/modals/dialog.svelte";
  import {
    Text,
    Textarea,
    Switch,
    Select,
    Radio,
  } from "$lib/input/createInput.svelte.js";
  import { quick } from "$lib/context/models.svelte.js";

  let _ = Obj({
    elms: {
      a: Text({ label: "qqqqqqqq" }),
      b: Textarea({ label: "wwwwwwwwwww" }),
      ok: Switch({ label: "wwwwwwwwwww" }),
      sel: Select({
        label: "qqqqqqqqqqq",
        options: [
          { label: "k", value: "a" },
          { label: "erk", value: "b" },
          { label: "kwer", value: "c" },
          { label: "kqqqqqqq", value: "d" },
        ],
      }),
      rad: Radio({
        label: "qqqqqqqqqqq",
        cols: 2,
        sty: "bordered",
        radio: [
          { label: "k", value: "a" },
          { label: "erk", value: "b" },
          { label: "kwer", value: "c" },
          { label: "kqqqqqqq", value: "d" },
        ],
      }),
    },
  });
</script>

<div class="p-6">
  <button
    class="px-3 py-1 rounded-lg bg-gray-600 text-white"
    on:click={() => {
      quick
        .createDialog({
          header: "asdfasdf",
          cont: _,
        })
        .then((e) => {
          console.log(e, "wwwwwwwwwwww");
        })
        .catch((e) => {
          console.log(e);
        });
    }}>Click</button
  >

  <button
    class="px-3 py-1 rounded-lg bg-gray-600 text-white"
    on:click={() => {
      quick
        .createDrawer({
          header: "asdfasdf",
          cont: Obj({
            elms: {
              a: Text({ label: "qqqqqqqq" }),
              b: Textarea({ label: "wwwwwwwwwww" }),
              ok: Switch({ label: "wwwwwwwwwww" }),
              sel: Select({
                label: "qqqqqqqqqqq",
                options: [
                  { label: "k", value: "a" },
                  { label: "erk", value: "b" },
                  { label: "kwer", value: "c" },
                  { label: "kqqqqqqq", value: "d" },
                ],
              }),
              rad: Radio({
                label: "qqqqqqqqqqq",
                cols: 2,
                sty: "bordered",
                radio: [
                  { label: "k", value: "a" },
                  { label: "erk", value: "b" },
                  { label: "kwer", value: "c" },
                  { label: "kqqqqqqq", value: "d" },
                ],
              }),
            },
          }),
        })
        .then((e) => {
          console.log(e, "wwwwwwwwwwww");
        })
        .catch((e) => {
          console.log(e);
        });
    }}>Click</button
  >

  <button
    class="px-3 py-1 rounded-lg bg-gray-600 text-white"
    on:click={() => {
      quick
        .createToast({
          header: "asdfasdf",
          helper: "It's ok to be a.......",
        })
        .then((e) => {
          console.log(e, "wwwwwwwwwwww");
        })
        .catch((e) => {
          console.log(e);
        });
    }}>Click</button
  >
</div>
