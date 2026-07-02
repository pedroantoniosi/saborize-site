import { Link } from "@tanstack/react-router";

export default function ResetPassword() {
  return (
    <div className="flex justify-center items-center bg-black h-full p-4 text-white">
      <div className="flex flex-col gap-4 max-w-150 mx-auto  w-full">
        <form className="flex flex-col gap-4">
          <label className="mb-05">Redefina sua senha:</label>
          <input
            className="p-4 bg-neutral-900  rounded-lg w-full border-none"
            type="text"
            placeholder="Digite seu email"
          />

          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 p-3 rounded-full cursor-pointer"
          >
            Continuar
          </button>
        </form>

        <div className="hover:text-blue-500 text-center">
          <Link to="/login">Lembrei minha senha</Link>
        </div>
      </div>
    </div>
  );
}
