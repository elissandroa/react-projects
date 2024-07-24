import { useForms } from "../hooks/useForm"
import { FormSchema } from "../schema/formSchema"

export const Form = () => {
  const { register, handleSubmit, errors } = useForms();

  const onSubmit = (data: FormSchema) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-96 bg-white p-4 rounded-md border border-slate-300">
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="name" className="flex flex-1">Nome:</label>
        <input
          type="text"
          id="name"
          {...register("name")}
          placeholder="Digite o seu nome"
          className="h-10 pl-2 rounded-md border border-slate-300"
        />
        {errors.name && <small className="text-red-500 italic">{errors.name.message}</small>}
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="lastname" className="flex flex-1">Sobrenome:</label>
        <input
          type="text"
          id="lastname"
          {...register("lastname")}
          placeholder="Digite o seu sobrenome"
          className="h-10 pl-2 rounded-md border border-slate-300"
        />
        {errors.lastname && <small className="text-red-500 italic">{errors.lastname.message}</small>}
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="gender" className="flex flex-1">Gênero:</label>
        <select
          id="gender"
          {...register("gender")}
          className="h-10 pl-1 rounded-md border border-slate-300 "
        >
          <option value="select">Selecione</option>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
          <option value="others">Outros</option>
        </select>
        {errors.gender && <small className="text-red-500 italic">{errors.gender.message}</small>}
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="email" className="flex flex-1">E-mail:</label>
        <input
          type="email"
          id="email"
          {...register("email")}
          placeholder="Digite o seu e-mail"
          className="h-10 pl-2 rounded-md border border-slate-300"
        />
        {errors.email && <small className="text-red-500 italic">{errors.email.message}</small>}
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="password" className="flex flex-1">Senha:</label>
        <input
          type="password"
          id="password"
          {...register("password")}
          placeholder="Digite a sua senha"
          className="h-10 pl-2 rounded-md border border-slate-300"
        />
        {errors.password && <small className="text-red-500 italic">{errors.password.message}</small>}
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="confirmPassword" className="flex flex-1">Confirmação de Senha:</label>
        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword")}
          placeholder="Confirme a sua senha"
          className="h-10 pl-2 rounded-md border border-slate-300"
        />
        {errors.confirmPassword && <small className="text-red-500 italic">{errors.confirmPassword.message}</small>}
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="agree"
            {...register("agree")}
          />
          <label htmlFor="agree">Concordo com os termos</label>
        </div>
        {errors.agree && <small className="text-red-500 italic">{errors.agree.message}</small>}
      </div>
      <button type="submit" className="w-full h-11 bg-cyan-400 rounded-md my-2 hover:bg-cyan-500">Cadastrar</button>
    </form>
  )
}
