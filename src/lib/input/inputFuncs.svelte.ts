import DateCMP from "./date.svelte";
import objFuncCMP from "./objFunc.svelte";
import PasswordCMP from "./password.svelte";
import RadioCMP from "./radio.svelte";
import SelectCMP from "./select.svelte";
import SwitchCMP from "./switch.svelte";
import TextCMP from "./text.svelte";
import TextareaCMP from "./textarea.svelte";

class SchemaCreator<T> {
  //@ts-ignore
  schema = $state<T>({});
  constructor(sch: T) {
    this.schema = sch;
  }
}
export let inputFuncs = {
  Text,
  Password,
  Radio,
  Select,
  Switch,
  Textarea,
  Obj,
};

export function Text(props: (typeof TextCMP.prototype.$$prop_def)["props"]) {
  let sch = new SchemaCreator({ props, value: "" });
  return { cmp: TextCMP, schema: sch.schema };
}
export function Password(
  props: (typeof PasswordCMP.prototype.$$prop_def)["props"]
) {
  let sch = new SchemaCreator({ props, value: "" });
  return { cmp: PasswordCMP, schema: sch.schema };
}
export function Radio(props: (typeof RadioCMP.prototype.$$prop_def)["props"]) {
  let sch = new SchemaCreator({ props, value: "" });
  return { cmp: RadioCMP, schema: sch.schema };
}
export function Select(
  props: (typeof SelectCMP.prototype.$$prop_def)["props"]
) {
  let sch = new SchemaCreator({ props, value: "" });
  return { cmp: SelectCMP, schema: sch.schema };
}
export function Switch(
  props: (typeof SwitchCMP.prototype.$$prop_def)["props"]
) {
  let sch = new SchemaCreator({ props, value: "" });
  return { cmp: SwitchCMP, schema: sch.schema };
}
export function Textarea(
  props: (typeof TextareaCMP.prototype.$$prop_def)["props"]
) {
  let sch = new SchemaCreator({ props, value: "" });
  return { cmp: TextareaCMP, schema: sch.schema };
}

export function Obj(props: (typeof objFuncCMP.prototype.$$prop_def)["props"]) {
  let sch = new SchemaCreator({ props, value: {} });
  return { cmp: objFuncCMP, schema: sch.schema };
}
