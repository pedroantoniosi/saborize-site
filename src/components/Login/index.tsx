import { Link } from "@tanstack/react-router";

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  className: string;
}

const inputClassName = "p-4 bg-neutral-900  rounded-lg w-full border-none";

const inputs: InputProps[] = [
  {
    name: "email",
    type: "email",
    placeholder: "Digite seu e-mail",
    className: inputClassName,
  },
  {
    name: "password",
    type: "password",
    placeholder: "Digite sua senha",
    className: inputClassName,
  },
];

export default function Login() {
  return (
    <div className="flex justify-center items-center bg-black h-full p-4 text-white">
      <div className="flex flex-col gap-4 max-w-150 mx-auto  w-full">
        <img
          alt="Logo"
          fetchPriority="high"
          decoding="async"
          src="/public/logo.webp"
          className="w-100 mx-auto"
        />
        <form className="flex flex-col gap-4  ">
          <label>Entre no Saborize</label>
          {inputs.map((item) => (
            <input
              key={item.name}
              name={item.name}
              type={item.type}
              placeholder={item.placeholder}
              className={item.className}
            />
          ))}
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 p-3 rounded-full cursor-pointer"
          >
            Entrar
          </button>
        </form>
        <div className="flex flex-col">
          <Link
            to="/resetPassword"
            className="mx-auto mb-4 hover:text-blue-500"
          >
            Esqueceu sua senha?
          </Link>
          <Link to="/register" className="hover:text-blue-500">
            Não tem uma conta ainda?
          </Link>
        </div>
      </div>
    </div>
  );
}
