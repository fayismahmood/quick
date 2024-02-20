<script lang="ts">
  import Msg from "$lib/Msg.svelte";
  import { spring } from "svelte/motion";

  let { props, value, msg } =
    $props<ComponentProps<boolean, { label?: string }>>();

  let x = spring(0);
  $effect(() => {
    x.set(value ? 30 : 0);
  });
</script>

<div>
  <div class="mb-2 text-gray-600">{props?.label || ""}</div>
  <div>
    <div
      aria-hidden="true"
      class={`w-[60px] h-[30px] p-[1.5px] rounded-full flex    ${
        value ? " bg-green-600" : " bg-gray-200"
      }`}
      on:click={() => {
        value = !value;
      }}
    >
      <button
        style={`transform:translateX(${$x}px)`}
        class={`rounded-full h-[27px] w-[27px]  bg-white border border-primary-300 shadow `}
      >
      </button>
    </div>
  </div>
</div>
<Msg />
