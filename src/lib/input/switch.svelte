<script lang="ts">
  import Msg from "$lib/Msg.svelte";

  let { props, value, msg } =
    $props<ComponentProps<boolean, { label?: string }>>();
</script>

<div>
  <span>{props?.label || ""}</span>
  <div>
    <button>{value ? "On" : "Off"}</button>
  </div>
</div>
<Msg />
