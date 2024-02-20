import DateCMP from "./date.svelte";
import objFuncCMP from "./objFunc.svelte";
import PasswordCMP from "./password.svelte";
import RadioCMP from "./radio.svelte";
import SelectCMP from "./select.svelte";
import SwitchCMP from "./switch.svelte";
import TextCMP from "./text.svelte";
import TextareaCMP from "./textarea.svelte";
import type { ComponentType, SvelteComponent } from "svelte";

class SchemaCreator<T> {
  //@ts-ignore
  schema = $state<T>({});
  constructor(sch: T) {
    this.schema = sch;
  }
}

export function createInput<CMP extends ComponentType, T>(cmp: CMP, defVal: T) {
  return function (props: (typeof cmp.prototype.$$prop_def)["props"]) {
    let sch = new SchemaCreator({ props, value: defVal });
    return { cmp: cmp, schema: sch.schema };
  };
}
export let Text = createInput(TextCMP, "");
export let Password = createInput(PasswordCMP, "");
export let Radio = createInput(RadioCMP, "");
export let Select = createInput(SelectCMP, "");
export let Switch = createInput(SwitchCMP, false);
export let Textarea = createInput(TextareaCMP, "");
export let Obj = createInput(objFuncCMP, {});
