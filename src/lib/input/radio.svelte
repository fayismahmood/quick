<script lang="ts">
  import Msg from "$lib/Msg.svelte";

  let { props, value, msg } = $props<
    ComponentProps<
      string,
      {
        label?: string;
        placeholder?: string;
        cols?: number;
        sty?: "simple" | "bordered";
        radio: { label: string; value: string; helper?: string }[];
      }
    >
  >();

  let ValueLabel = $derived(
    props?.radio.find((e) => e.value == value)?.label || ""
  );
</script>

<div>
  <span>{props?.label || ""}</span>
  <div
    style={`grid-template-columns:${"auto ".repeat(props?.cols || 1)}`}
    class="grid gap-2"
  >
    {#each props?.radio || [] as e}
      <label
        class={"cursor-pointer " +
          (props?.sty == "bordered"
            ? value == e.value
              ? `border-2 border-slate-400 p-4 rounded-lg shadow-lg`
              : `border p-4 rounded-lg`
            : ``)}
      >
        <div class="flex items-center">
          <input
            type="radio"
            value={e.value}
            bind:group={value}
            class="border mb-auto mt-1 border-gray-300 shadow rounded-full bg-gray-100"
          />
          <div
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {e.label || ""}
            <div class=" text-sm font-light text-gray-600 dark:text-gray-300">
              {e.helper || ""}
            </div>
          </div>
        </div>
      </label>
    {/each}
  </div>
</div>
<Msg />

<style>
  input[type="radio"] {
    appearance: none;
    height: 20px;
    width: 20px;
    position: relative;
    overflow: hidden;
  }
  input[type="radio"]:checked {
    border: none;
  }
  input[type="radio"]:checked::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    border-radius: 50%;
    border: solid 5px #475569;
  }
</style>
