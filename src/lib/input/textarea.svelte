<script lang="ts">
  import Msg from "$lib/Msg.svelte";

  let { props, value, msg } =
    $props<ComponentProps<string, { label?: string; placeholder?: string }>>();
</script>

<div>
  <span>{props?.label || ""}</span>
  <textarea bind:value />
</div>
<Msg />
