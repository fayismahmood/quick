<script lang="ts">
  import Msg from "$lib/Msg.svelte";
  import { clickOutside } from "$lib/actions/onClickOutSide.js";
  import { fly } from "svelte/transition";

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
  let open = $state<boolean>();
</script>

<div
  use:clickOutside={() => {
    open = false;
  }}
>
  <div class="mb-2 text-gray-600">{props?.label || ""}</div>
  <div class="w-full">
    <div
      aria-hidden="true"
      on:click={() => {
        open = true;
      }}
      class={"px-3 cursor-pointer w-full flex gap-2 py-1 rounded outline-none focus:ring-primary-600 ring-2 ring-gray-300 text-gray-500" +
        (open ? " ring-primary-600" : "")}
    >
      <div>
        {ValueLabel || "Pick an option"}
      </div>
      <div class="ms-auto my-auto">
        <svg xmlns="http://www.w3.org/2000/svg" height=".6em" viewBox="0 0 16 7"
          ><path
            fill="currentColor"
            d="M8 6.5a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l4.15 4.15l4.14-4.14c.2-.2.51-.2.71 0c.2.2.2.51 0 .71l-4.5 4.5c-.1.1-.23.15-.35.15Z"
          /></svg
        >
      </div>
    </div>
    <div class="relative">
      {#if open}
        <div
          transition:fly={{ y: 30 }}
          class="absolute z-10 bg-white p-1 rounded border shadow top-1 w-full"
        >
          {#each props?.options || [] as e}
            <div
              class="w-full cursor-pointer px-2 py-1 text-gray-600 rounded hover:bg-gray-100 hover:text-gray-800"
              aria-hidden="true"
              on:click={() => {
                value = e.value;
                open = false;
              }}
            >
              {e.label}
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>
<Msg />
