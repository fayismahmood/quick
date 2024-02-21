<script lang="ts">
  import ModelCmp from "$lib/context/ModelCmp.svelte";
  import { Quicker } from "$lib/index.js";
  import "../app.pcss";
  import { Models } from "./model.js";
</script>

<slot />
<Quicker />
