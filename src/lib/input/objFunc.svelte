<script lang="ts">
  import Msg from "$lib/Msg.svelte";
  import { inputFuncs } from "./inputFuncs.svelte.js";

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
          ReturnType<(typeof inputFuncs)[keyof typeof inputFuncs]>
        >;
      }
    >
  >();
  $effect(() => {
    if (!value) value = {};
  });
</script>

{#each Object.keys(props?.elms || {}) as e}
  {@const inp = props?.elms[e]}
  {#if inp}
    <svelte:component this={inp.cmp} {...inp.schema} bind:value={value[e]} />
  {/if}
{/each}

<Msg />
