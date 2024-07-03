type useProps = {
  data: {
    name: string,
    email: string
  };
  updateFieldHandler: (key: string, value: string) => void;
}


export const UserForm = ({ data, updateFieldHandler }: useProps) => {


  return (

    <div className="form-control">
      <label htmlFor="name">Nome:</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Digite o seu nome"
        required
        value={data.name || ""}
        onChange={(e) => updateFieldHandler("name", e.target.value)}
      />
      <label htmlFor="email">E-mail:</label>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Digite o seu E-mail"
        required
        value={data.email || ""}
        onChange={(e) => updateFieldHandler("email", e.target.value)}
      />
    </div>

  )
}
