import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import ConfirmDelete from "../components/ConfirmDelete"
import EditDataModal from "../components/EditDataModal"
import useStores from "../hooks/useStores"

const Dashboard = observer(() => {
  const [showModal, setShowModal] = useState(false)
  const [targetId, setTargetId] = useState(null)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const [deleteName, setDeleteName] = useState("")
  const [tableData, setTableData] = useState({})
  const { userStore } = useStores()

  useEffect(() => {
    getUserList()
  }, [])

  const getUserList = async () => {
    const result = await userStore.getList()

    setTableData(result)
  }

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
            {Array.isArray(tableData) && tableData.map((item) => (
              <tr key={item.id} className="border-b bg-gray-500 border-gray-700 text-white">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                  {item.name ?? ""}
                </th>
                <td className="px-6 py-4">
                  {String(item.cpf) ?? ""}
                </td>
                <td className="px-6 py-4">
                  {item.email ?? ""}
                </td>
                <td className="px-6 py-4">
                  {String(item.salary) ?? ""}
                </td>
                <td className="px-6 py-4">
                  <button
                    className="py-2 px-2 bg-yellow-300 rounded-lg text-white"
                    onClick={() => {
                      setShowModal(!showModal)
                      setTargetId(item.id)
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
            ))}
          </tbody>
        </table>
      </div>
      {
        showModal ? (
          <EditDataModal
            onClose={() => {
              setShowModal(!showModal)
              setTargetId(null)
            }}
            id={targetId}
          />
        ) : null
      }
      {
        confirmDelete ? (
          <ConfirmDelete
            onClose={() => {
              setConfirmDelete(!confirmDelete)
              setDeleteId(null)
            }}
            id={deleteId}
            name={deleteName}
          />
        ) : null
      }
    </div>
  )
})

export default Dashboard