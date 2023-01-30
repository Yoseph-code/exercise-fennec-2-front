import { Severity } from "../../stores/NofityStore"

type SnakeProps = {
  children: any
  severity: Severity
}

const Snack = ({ children, severity }: SnakeProps) => {
  switch (severity) {
    case "danger": {
      return (
        <div className="bg-red-500 z-50 fixed top-5 left-5 right-5 py-2 rounded-md text-white items-center justify-center flex">
          {children}
        </div>
      )
    }
    case "success": {
      return (
        <div className="bg-green-500 z-50 fixed top-5 left-5 right-5 py-2 rounded-md text-white items-center justify-center flex">
          {children}
        </div>
      )
    }
    default: {
      return (
        <div className="bg-blue-300 z-50 fixed top-5 left-5 right-5 py-2 rounded-md text-white items-center justify-center flex">
          {children}
        </div>
      )
    }
  }
}

export default Snack