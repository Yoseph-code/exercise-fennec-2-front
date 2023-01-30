import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import useStores from "../hooks/useStores"
import Snack from "../style/components/Snack"

const Notification = observer(() => {
  const { notifyStore } = useStores()

  useEffect(() => {
    setTimeout(() => {
      notifyStore.clear()
    }, 900 * 3)
  }, [notifyStore.show])

  return (
    <>
      {notifyStore.show ? (
        <Snack severity={notifyStore.severity}>
          {notifyStore.message ?? ""}
        </Snack>
      ) : null}
    </>
  )
})

export default Notification