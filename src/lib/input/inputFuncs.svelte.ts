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

export function Text(schema: typeof TextCMP.prototype.$$prop_def) {
  let sch = new SchemaCreator(schema);
  return { cmp: TextCMP, schema: sch.schema };
}
export function Password(schema: typeof PasswordCMP.prototype.$$prop_def) {
  let sch = new SchemaCreator(schema);
  return { cmp: PasswordCMP, schema: sch.schema };
}
export function Radio(schema: typeof RadioCMP.prototype.$$prop_def) {
  let sch = new SchemaCreator(schema);
  return { cmp: RadioCMP, schema: sch.schema };
}
export function Select(schema: typeof SelectCMP.prototype.$$prop_def) {
  let sch = new SchemaCreator(schema);
  return { cmp: SelectCMP, schema: sch.schema };
}
export function Switch(schema: typeof SwitchCMP.prototype.$$prop_def) {
  let sch = new SchemaCreator(schema);
  return { cmp: SwitchCMP, schema: sch.schema };
}
export function Textarea(schema: typeof TextareaCMP.prototype.$$prop_def) {
  let sch = new SchemaCreator(schema);
  return { cmp: TextareaCMP, schema: sch.schema };
}

export function Obj(schema: typeof objFuncCMP.prototype.$$prop_def) {
  let sch = new SchemaCreator({ ...schema, value: {} });
  return { cmp: objFuncCMP, schema: sch.schema };
}
