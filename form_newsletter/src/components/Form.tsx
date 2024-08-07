import { useState, FormEvent } from "react"
import { User } from "../types/User"


export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree]  = useState(false);

  const [errors, setErrors] = useState<User | null >(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="name">Nome:</label>
        <input type="text" placeholder="Digite o seu nome" className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400" />
      </div>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="email">E-mail:</label>
        <input type="email" placeholder="Insira seu melhor email" className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400" />
      </div>
      <div className="flex flex-col">
        <a href="#" className="text-xs underline mb-2">Leia os termos</a>
        <div className="flex gap-2 item-center">
        <input type="checkbox"/>
        <label className="text-sm" htmlFor="agree">Concordo com os termos</label>
        </div>
      </div>
      <button type="submit" className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white">Cadastrar</button>
    </form>
  )
}