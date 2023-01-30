import { observer } from "mobx-react-lite"
import { useState } from "react"
import ConfirmDelete from "../components/ConfirmDelete"
import EditDataModal from "../components/EditDataModal"

const Dashboard = observer(() => {
  const [showModal, setShowModal] = useState(false)
  const [targetId, setTargetId] = useState(null)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const [deleteName, setDeleteName] = useState("")

  return (
    <div>
      <div className="flex justify-center items-center pt-5">
        <table className="text-sm text-left text-gray-400">
          <thead className="text-xs uppercase bg-gray-700 text-gray-200">
            <tr>
              <th scope="col" className="px-6 py-5">
                Nome
              </th>
              <th scope="col" className="px-6 py-5">
                cpf
              </th>
              <th scope="col" className="px-6 py-5">
                email
              </th>
              <th scope="col" className="px-6 py-5">
                salario
              </th>
              <th scope="col" className="px-6 py-5">
                Acoes
              </th>
            </tr>
          </thead>
          <tbody>
            {}
            <tr className="border-b bg-gray-900 border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">
                Sliver
              </td>
              <td className="px-6 py-4">
                Laptop
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
              <td className="px-6 py-4">
                <button
                  className="py-2 px-2 bg-yellow-300 rounded-lg text-white"
                  onClick={() => {
                    setShowModal(!showModal)
                  }}
                >
                  editar
                </button>
                <button
                  className="py-2 px-2 bg-red-300 rounded-lg text-white"
                  onClick={() => {
                    setConfirmDelete(!confirmDelete)
                  }}
                >
                  deletar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {
        showModal ? (
          <EditDataModal
            onClose={() => setShowModal(!showModal)}
            id={targetId}
          />
        ) : null
      }
      {
        confirmDelete ? (
          <ConfirmDelete
            onClose={() => setConfirmDelete(!confirmDelete)}
            id={deleteId}
            name={deleteName}
          />
        ) : null
      }
    </div>
  )
})

export default Dashboard