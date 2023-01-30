import { observer } from "mobx-react-lite"
import { AiOutlineClose } from "react-icons/ai"
import TextFild from "../style/components/TextField"

type EditDataModalProps = {
  onClose(): void
  id: string | null
}

const EditDataModal = observer(({ onClose, id }: EditDataModalProps) => {
  return (
    <div className="fixed flex flex-col inset-0 items-center justify-center">
      <div className="bg-gray-700 py-5 px-10 min-w-[700px] text-white">
        <div className="flex justify-between">
          <h1 className="text-2xl">
            Editar
          </h1>
          <button onClick={onClose}>
            <AiOutlineClose />
          </button>
        </div>
      </div>
      <div className="bg-gray-500 py-5 px-10 min-w-[700px] text-white">
        <TextFild
          title="Nome"
          name="name"
          value={"nome"}
          onChange={() => { }}
        />
        <div className="my-5" />
        <TextFild
          title="Email"
          name="name"
          value={"nome"}
          onChange={() => { }}
        />
        <div className="my-5" />
        <TextFild
          title="CPF"
          name="name"
          value={"nome"}
          onChange={() => { }}
          type="number"
        />
        <div className="my-5" />
        <p>
          Data de Nacimento
        </p>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
          </div>
          <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Select date" />
        </div>
        <div className="my-5" />
        <TextFild
          title="Salario"
          name="name"
          value={"nome"}
          onChange={() => { }}
          type="number"
        />
        <div className="my-10" />
        <button
          className="uppercase bg-white w-full text-gray-700 py-2"
        >
          editar
        </button>
      </div>
    </div>
  )
})

export default EditDataModal