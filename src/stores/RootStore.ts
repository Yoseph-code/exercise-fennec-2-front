import { FormStore } from "./FormStore";
import { NofityStore } from "./NofityStore";

export class RootStore {
  notifyStore: NofityStore
  formStore: FormStore

  constructor() {
    this.notifyStore = new NofityStore(this)
    this.formStore = new FormStore(this)
  }
}