<script lang="ts">
  import Dialog from "$lib/modals/dialog.svelte";
  import Drawer from "$lib/modals/drawer.svelte";
  import Toast from "$lib/modals/toast.svelte";
  import { flip } from "svelte/animate";
  import {
    quick,
    type DialogModel,
    type DrawerModel,
    type ToastModel,
  } from "./models.svelte.js";
  import { receive, send } from "$lib/animate/sendRecive.js";

  //let {Models}=$props<{Models:ModelStore}>()
  let dialogs = $derived(
    (quick.models || []).filter((e) => e.type == "dialog")
  ) as DialogModel[];

  let drawers = $derived(
    (quick.models || []).filter((e) => e.type == "drawer")
  ) as DrawerModel[];

  let toasts = $derived(
    (quick.models || []).filter((e) => e.type == "toast")
  ) as ToastModel[];
</script>

{#each dialogs as e}
  <div>dia</div>
  <Dialog {...e.props} />
{/each}
{#each drawers as e}
  <Drawer {...e.props} />
{/each}

<div class="fixed bottom-5 right-5 grid gap-3">
  {#each toasts as e, i (e.key)}
    <div animate:flip={{ duration: 200 }}>
      <Toast {...e.props} />
    </div>
  {/each}
</div>
