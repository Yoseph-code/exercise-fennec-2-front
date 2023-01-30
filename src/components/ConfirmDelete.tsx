import { observer } from "mobx-react-lite"
import { AiOutlineClose } from "react-icons/ai"

type ConfirmDeleteProps = {
  onClose(): void
  id: string | number | null
  name: string
}

const ConfirmDelete = observer(({ onClose, id, name }: ConfirmDeleteProps) => {
  return (
    <div className="fixed flex flex-col inset-0 justify-center items-center">
      <div className="bg-gray-700 py-5 px-10 min-w-[700px] text-white">
        <div className="flex justify-between">
          <h1 className="text-2xl">
            Deletar
          </h1>
          <button onClick={onClose}>
            <AiOutlineClose />
          </button>
        </div>
      </div>
      <div className="bg-gray-500 py-5 px-10 min-w-[700px] text-white">
        Voce tem certeza que deseja deletar o usiario {name}?
      </div>
      <div className="bg-gray-700 py-5 px-10 min-w-[700px] text-white flex justify-end">
        <button
          className="py-2 px-2 bg-red-300 rounded-lg text-white"
        >
          deletar
        </button>
      </div>
    </div>
  )
})

export default ConfirmDelete