import type Dialog from "$lib/modals/dialog.svelte";
type DialogModel = {
  type: "dialog";
  key?: number;
  props: typeof Dialog.prototype.$$prop_def;
};
type DrawerModel = {
  type: "drawer";
  key?: number;
  props: typeof Dialog.prototype.$$prop_def;
};
type models = DialogModel | DrawerModel;
class ModelStore {
  models = $state<models[]>([]);
  key = 0;
  constructor() {}
  createDialog(props: DialogModel["props"]) {
    return new Promise((res, rej) => {
      let m: DialogModel = {
        key: this.key++,
        type: "dialog",
        props: {
          ...props,
          close: () => {
            this.models = this.models.filter((e) => e.key != m.key);
            rej("closed");
          },
          res: (e) => {
            this.models = this.models.filter((e) => e.key != m.key);
            rej(e);
          },
        },
      };

      this.models?.push(m);
    });
  }
  createDrawer(props: DrawerModel["props"]) {
    return new Promise((res, rej) => {
      let m: DrawerModel = {
        key: this.key++,
        type: "drawer",
        props: {
          ...props,
          close: () => {
            this.models = this.models.filter((e) => e.key != m.key);
            rej("closed");
          },
          res: (e) => {
            this.models = this.models.filter((e) => e.key != m.key);
            rej(e);
          },
        },
      };

      this.models?.push(m);
    });
  }
}

export let Models = new ModelStore();
