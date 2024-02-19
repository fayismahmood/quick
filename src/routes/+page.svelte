<script>
  import Obj from "$lib/input/obj.svelte";
  let value = $state({});
</script>

<Obj
  bind:value
  props={{
    elms: {
      a: { type: "text", props: {} },
      wwwwwa: { type: "text", props: {} },
      ad: {
        type: "radio",
        props: {
          radio: [
            { label: "asdf", value: "aasd" },
            { label: "aswerdf", value: "qq" },
            { label: "asdf", value: "rt" },
          ],
        },
      },
      adw: {
        type: "select",
        props: {
          options: [
            { label: "asdf", value: "aasd" },
            { label: "aswerdf", value: "qq" },
            { label: "asdf", value: "rt" },
          ],
        },
      },
    },
  }}
></Obj>
{JSON.stringify(value)}
