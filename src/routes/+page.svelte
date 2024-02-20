<script>
  import Obj from "$lib/input/obj.svelte";
  let value = $state({});
</script>

<div class="grid gap-3 p-5">
  <Obj
    bind:value
    props={{
      elms: {
        a: { type: "text", props: { label: "hi" } },
        wwwwwa: { type: "text", props: {} },
        ad: {
          type: "radio",
          props: {
            cols: 2,
            sty: "bordered",
            radio: [
              {
                label: "asdf",
                value: "aasd",
                helper: "asdf asdfasdkj asdfas dlfajsd",
              },
              { label: "aswerdf", value: "qq" },
              { label: "asdf", value: "rt" },
            ],
          },
        },
        adf: { type: "switch", props: { label: "asdf" } },
        aadf: { type: "textarea", props: { label: "asdf" } },
        adw: {
          type: "select",
          props: {
            options: [
              {
                label: "asdf",
                value: "aasd",
                helper: "asdf asdfasdkj asdfas dlfajsd",
              },
              { label: "aswerdf", value: "qq" },
              { label: "asdf", value: "rt" },
            ],
          },
        },
      },
    }}
  ></Obj>
</div>
{JSON.stringify(value)}
<button class="btn btn-primary">Button</button>
