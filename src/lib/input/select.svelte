<script lang="ts">
  import Msg from "$lib/Msg.svelte";

  let { props, value, msg } = $props<
    ComponentProps<
      string,
      {
        label?: string;
        placeholder?: string;
        options: { label: string; value: string }[];
      }
    >
  >();

  let ValueLabel = $derived(
    props?.options.find((e) => e.value == value)?.label || ""
  );
</script>

<div>
  <span>{props?.label || ""}</span>
  <div>
    <div>
      {#each props?.options || [] as e}
        <div
          on:click={() => {
            value = e.value;
          }}
        >
          {e.label}
        </div>
      {/each}
    </div>
  </div>
</div>
<Msg />
