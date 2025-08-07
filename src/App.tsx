import img from '../src/assets/Joao.jpg'

export default function App() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen text-black">
      <img src={img} alt="perfil" className="flex rounded-full h-24 w-24" />
      <h1>Estrutura inicial para projeto em React.js</h1>
      <h1>João Tambue</h1>
    </div>
  )
}
