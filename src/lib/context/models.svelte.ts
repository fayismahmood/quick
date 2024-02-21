import type Dialog from "$lib/modals/dialog.svelte";
import type Toast from "$lib/modals/toast.svelte";
export type DialogModel = {
  type: "dialog";
  key?: number;
  props: typeof Dialog.prototype.$$prop_def;
};
export type DrawerModel = {
  type: "drawer";
  key?: number;
  props: typeof Dialog.prototype.$$prop_def;
};
export type ToastModel = {
  type: "toast";
  key?: number;
  props: typeof Toast.prototype.$$prop_def;
};

type models = DialogModel | DrawerModel | ToastModel;

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
            res(e);
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
            res(e);
          },
        },
      };

      this.models?.push(m);
    });
  }

  createToast(props: ToastModel["props"]) {
    return new Promise((res, rej) => {
      let m: ToastModel = {
        key: this.key++,
        type: "toast",
        props: {
          ...props,
          close: () => {
            this.models = this.models.filter((e) => e.key != m.key);
            res("closed");
          },
          res: (e) => {
            this.models = this.models.filter((e) => e.key != m.key);
            res(e);
          },
        },
      };
      let TimeoutFunc = () => {
        this.models = this.models.filter((e) => e.key != m.key);
        clearTimeout(timeout);
      };
      let timeout = setTimeout(TimeoutFunc, 60000);
      this.models?.push(m);
    });
  }
}

export let Models = new ModelStore();
