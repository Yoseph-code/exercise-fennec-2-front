import { UserStore } from "./UserStore";
import { NofityStore } from "./NofityStore";

export class RootStore {
  notifyStore: NofityStore
  userStore: UserStore

  constructor() {
    this.notifyStore = new NofityStore(this)
    this.userStore = new UserStore(this)
  }
}