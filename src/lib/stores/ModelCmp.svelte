<script lang="ts">
  import Dialog from "$lib/modals/dialog.svelte";
  import Drawer from "$lib/modals/drawer.svelte";
  import { Models } from "./models.svelte.js";
</script>

{#each Models.models || [] as e}
  {#if e.type == "dialog"}
    <Dialog {...e.props} />
  {/if}
  {#if e.type == "drawer"}
    <Drawer {...e.props} />
  {/if}
{/each}
