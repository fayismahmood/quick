import Date from "./date.svelte";
import Obj from "./obj.svelte";
import Password from "./password.svelte";
import Radio from "./radio.svelte";
import Select from "./select.svelte";
import Switch from "./switch.svelte";
import Text from "./text.svelte";
import Textarea from "./textarea.svelte";

export let inputs = {
  date: Date,
  select: Select,
  obj: Obj,
  password: Password,
  radio: Radio,
  switch: Switch,
  text: Text,
  textarea: Textarea,
};
