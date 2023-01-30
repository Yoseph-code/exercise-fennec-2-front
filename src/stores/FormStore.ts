import { makeAutoObservable } from "mobx";
import { NavigateFunction } from "react-router-dom";
import api from "../api";
import { RootStore } from "./RootStore";

export type NewRegisterProps = {
  name: string
  cpf: number | string
  email: string
  birthDate: Date | string
  salary: string | number
}

export class FormStore {
  private rootStore: RootStore

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  async newRegister(formData: NewRegisterProps, navigate: NavigateFunction) {
    if (formData.name.length < 6) {
      return this.rootStore.notifyStore.danger("nome invalido")
    } else if (formData.email.length < 6) {
      return this.rootStore.notifyStore.danger("email invalido")
    } else if (formData.salary < -1) {
      return this.rootStore.notifyStore.danger("salario nao pode ser menor que zero")
    }

    try {
      const { data } = await api.post("/register", formData)

      this.rootStore.notifyStore.success(data.message)
      navigate("/dashboard")
    } catch (err: any) {
      this.rootStore.notifyStore.danger(err.response.data.message)
    }
  }
}