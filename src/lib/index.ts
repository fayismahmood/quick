// Reexport your entry components here
export {
  Obj,
  Password,
  Radio,
  Select,
  Switch,
  Text,
  Textarea,
  createInput,
} from "./input/createInput.svelte.js";
export { QuickStore, quick } from "./context/models.svelte.js";
import ModelCmp from "./context/ModelCmp.svelte";
export let Quicker = ModelCmp;
