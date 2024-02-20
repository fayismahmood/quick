<script lang="ts">
  import { clickOutside } from "$lib/actions/onClickOutSide.js";
  import type { inputFuncs } from "$lib/input/inputFuncs.svelte.js";
  import { fade, fly } from "svelte/transition";

  let { header, open, cont } = $props<{
    header: string;
    open: boolean;
    cont: ReturnType<(typeof inputFuncs)[keyof typeof inputFuncs]>;
  }>();
</script>

{#if open}
  <div
    transition:fade
    aria-hidden="true"
    on:click={(e) => {
      open = false;
    }}
    class="bg-white bg-opacity-30 backdrop-blur-sm fixed left-0 top-0 w-full h-full flex"
  >
    <div
      transition:fly={{ y: 60 }}
      aria-hidden="true"
      on:click={(e) => {
        e.stopPropagation();
      }}
      class="m-auto bg-white shadow-lg rounded-lg border overflow-hidden"
    >
      <div class="flex w-full p-2 px-3 border-b">
        <div class="text-lg font-bold text-gray-500">
          {header}
        </div>
        <button
          on:click={() => {
            open = false;
          }}
          class="h-5 w-5 rounded-full bg-gray-800 ms-auto text-white">x</button
        >
      </div>
      <div class="p-5 grid gap-5">
        <svelte:component this={cont.cmp} {...cont.schema} />
      </div>
    </div>
  </div>
{/if}
