<script lang="ts">
  import { clickOutside } from "$lib/actions/onClickOutSide.js";
  import type { createInput } from "$lib/input/createInput.svelte.js";

  import { tick } from "svelte";
  import { fade, fly } from "svelte/transition";

  let {
    header,
    close,
    cont,
    res,
    submitText = "save",
  } = $props<{
    header: string;
    close?: () => void;
    res?: (e: any) => void;
    cont: ReturnType<ReturnType<typeof createInput>>;
    submitText?: string;
  }>();
</script>

<div
  transition:fade|global
  aria-hidden="true"
  on:click={(e) => {
    close?.();
  }}
  class="bg-white bg-opacity-5 backdrop-blur-sm fixed left-0 top-0 w-full h-full flex"
>
  <div
    transition:fly|global={{ y: 60 }}
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
          close?.();
        }}
        class="h-5 w-5 rounded-full text-gray-500 p-0.5 ms-auto hover:bg-gray-100"
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
    </div>
    <div class="p-5 grid gap-5 overflow-auto max-h-[70vh]">
      <svelte:component this={cont.cmp} {...cont.schema} />
    </div>
    <div class="border-t bg-gray-100 p-2 flex gap-5">
      <button
        onclick={() => {
          res?.(cont.schema.value);
        }}
        class="px-3 py-1 rounded-lg bg-primary-600 text-white"
        >{submitText}</button
      >
    </div>
  </div>
</div>
