<script lang="ts">
  import Dialog from "$lib/modals/dialog.svelte";
  import Drawer from "$lib/modals/drawer.svelte";
  import Toast from "$lib/modals/toast.svelte";
  import { flip } from "svelte/animate";
  import { Models,type DialogModel, type DrawerModel, type ToastModel } from "./models.svelte.js";
  import { receive, send } from "$lib/animate/sendRecive.js";
 


</script>

{#each (Models.models || []).filter((e) => e.type == "dialog") as e }
  <Dialog {...e.props as DialogModel["props"]} />
{/each}
{#each (Models.models || []).filter((e) => e.type == "drawer") as e}
  <Drawer {...e.props as DrawerModel["props"]} />
{/each}

<div class="fixed bottom-5 right-5 grid gap-3">
  {#each (Models.models || []).filter((e) => e.type == "toast") as e,i(e.key)}
    <div animate:flip={{ duration: 200 }}>
      <Toast  {...e.props as ToastModel["props"]} />
    </div>
  {/each}
</div>
