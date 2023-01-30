import { ChangeEvent, HTMLInputTypeAttribute, InputHTMLAttributes } from "react"

type TextFildProps = {
  title: string
  error?: boolean
  errorMessage?: string
  value: string | number
  onChange(event: ChangeEvent<HTMLInputElement>): any
  name: string
  type?: HTMLInputTypeAttribute
  autoComplete?: "on" | "off"
}

const TextFild = ({ title, error, errorMessage, value, onChange, name, type = "text", autoComplete = "on" }: TextFildProps) => {
  return (
    <label>
      <p>
        {title}
      </p>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full flex py-2 px-4 rounded-md text-black"
        autoComplete={autoComplete}
      />
      {
        error ? errorMessage : null
      }
    </label>
  )
}

export default TextFild