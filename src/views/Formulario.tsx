import { observer } from "mobx-react-lite"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import useStores from "../hooks/useStores"
import TextFild from "../style/components/TextField"

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  cpf: "",
  birthDate: "",
  salary: ""
}

const Formulario = observer(() => {
  const [formState, setFormState] = useState(INITIAL_FORM_STATE)
  const { userStore } = useStores()
  const navigate = useNavigate()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormState({
      ...formState,
      [name]: value
    })
  }

  return (
    <div className="absolute flex inset-0 items-center justify-center">
      <form className="py-5 px-5 bg-gray-700 text-gray-200 rounded-md min-w-[500px]">
        <h1 className="text-2xl font-bold py-5 flex items-center justify-center">
          Formulario
        </h1>
        <TextFild
          title="Nome"
          name="name"
          value={formState.name}
          onChange={onChange}
          type="text"
        />
        <div className="my-5" />
        <TextFild
          title="Email"
          name="email"
          value={formState.email}
          onChange={onChange}
          type="email"
        />
        <div className="my-5" />
        <TextFild
          title="CPF"
          name="cpf"
          value={formState.cpf}
          onChange={onChange}
        />
        <div className="my-5" />
        <p>
          Data de Nacimento
        </p>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
          </div>
          <input
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            placeholder="Select date"
            name="birthDate"
            onChange={onChange}
            value={formState.birthDate}
          />
        </div>
        <div className="my-5" />
        <TextFild
          title="Salario"
          name="salary"
          value={formState.salary}
          onChange={onChange}
        />
        <div className="my-10" />
        <button
          type="button"
          className="bg-white uppercase text-black rounded-md w-full py-2"
          onClick={async () => await userStore.newRegister(formState, navigate)}
        >
          enviar
        </button>
      </form>
    </div>
  )
})

export default Formulario