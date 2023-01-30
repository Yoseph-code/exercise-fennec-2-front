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

export class UserStore {
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

    const form = {
      ...formData,
      salary: Number(formData.salary)
    }

    try {
      const { data } = await api.post("/v1/register", form)

      this.rootStore.notifyStore.success(data.message)
      navigate("/dashboard")
    } catch (err: any) {
      this.rootStore.notifyStore.danger(err.response.data.message)
    }
  }

  async getList(page: number = 0, size: number = 10, keyword: string = "") {
    try {
      const { data } = await api.get(`/v1/user?page=${page}&size=${size}&keyword=${keyword}`)

      return data.data
    } catch (err: any) {
      this.rootStore.notifyStore.danger(err.response.data.message)
      return []
    }
  }

  async getUserData(id: string) {
    try {
      const { data } = await api.get(`/v1/user/${id}`)

      return data
    } catch (err: any) {
      this.rootStore.notifyStore.danger(err.response.data.message)
    }
  }
}