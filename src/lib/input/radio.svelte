<script lang="ts">
  import Msg from "$lib/Msg.svelte";

  let { props, value, msg } = $props<
    ComponentProps<
      string,
      {
        label?: string;
        placeholder?: string;
        radio: { label: string; value: string }[];
      }
    >
  >();

  let ValueLabel = $derived(
    props?.radio.find((e) => e.value == value)?.label || ""
  );
</script>

<div>
  <span>{props?.label || ""}</span>
  <div>
    {#each props?.radio || [] as e}
      <div>
        <input bind:group={value} value={e.value} type="radio" />
        {e.label}
      </div>
    {/each}
  </div>
</div>
<Msg />
