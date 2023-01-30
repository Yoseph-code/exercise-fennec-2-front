import { makeAutoObservable } from "mobx";
import { RootStore } from "./RootStore";

export type Severity =
  'success'
  | 'danger'
  | 'info'
  | 'undefined'

export class NofityStore {
  private rootStore: RootStore

  public message: string | null = ""
  public show: boolean = false
  public severity: Severity = "undefined"

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  public success(message: string) {
    this.message = message
    this.show = true
    this.severity = "success"
  }

  public danger(message: string) {
    this.message = message
    this.show = true
    this.severity = "danger"
  }

  public clear() {
    this.message = null
    this.show = false
    this.severity = "undefined"
  }
}