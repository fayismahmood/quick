<script lang="ts">
  import Msg from "$lib/Msg.svelte";

  let { props, value, msg } =
    $props<ComponentProps<string, { label?: string; placeholder?: string }>>();
</script>

<div>
  <div class="mb-2 text-gray-600">{props?.label || ""}</div>
  <textarea
    class="px-3 py-1 rounded w-full outline-none focus:ring-primary-600 ring-2 ring-gray-300"
    bind:value
  />
</div>
<Msg />
