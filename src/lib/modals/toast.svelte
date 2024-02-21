<script lang="ts">
  import { clickOutside } from "$lib/actions/onClickOutSide.js";
  import type { createInput } from "$lib/input/createInput.svelte.js";
  import { tick } from "svelte";
  import { flip } from "svelte/animate";
  import { fade, fly } from "svelte/transition";

  let { header, close, cont, res, helper } = $props<{
    header: string;
    helper?: string;
    close?: () => void;
    res?: (e: any) => void;
    cont?: ReturnType<ReturnType<typeof createInput>>;
  }>();
</script>

<div
  aria-hidden="true"
  on:click={(e) => {
    e.stopPropagation();
  }}
  class="w-max relative bg-white shadow-lg border rounded-lg py-2 px-5"
>
  <button
    on:click={() => {
      close?.();
    }}
    class="h-5 w-5 rounded-full text-gray-500 p-0.5 absolute right-0 top-0 bg-white shadow border translate-x-1/2 -translate-y-1/2"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      ><path
        fill="currentColor"
        d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
      /></svg
    ></button
  >
  <div class=" font-bold text-gray-500">
    {header}
  </div>
  <div>
    {helper || ""}
  </div>
  {#if cont}
    <div class="h-max grid gap-5">
      <svelte:component this={cont.cmp} {...cont.schema} />
    </div>
  {/if}
</div>
