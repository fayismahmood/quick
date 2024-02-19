<script lang="ts">
  import Msg from "$lib/Msg.svelte";
  import { inputs } from "./inputs.js";

  let {
    props,
    value = {},
    msg,
  } = $props<
    ComponentProps<
      Record<string, any>,
      {
        label?: string;
        elms: Record<
          string,
          { type: keyof typeof inputs } & Omit<
            ComponentProps<any, any>,
            "value"
          >
        >;
      }
    >
  >();
  $effect(() => {
    if (!value) value = {};
  });
</script>

{#each Object.keys(props?.elms || {}) as e}
  {@const inp = props?.elms[e].type ? inputs[props?.elms[e].type] : null}
  {#if inp}
    <svelte:component this={inp} {...props?.elms[e]} bind:value={value[e]} />
  {/if}
{/each}

<Msg />
