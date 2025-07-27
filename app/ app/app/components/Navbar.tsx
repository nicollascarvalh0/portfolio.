export default function Navbar() {
  return (
    <nav className="w-full p-4 fixed top-0 left-0 bg-black text-white z-50">
      <ul className="flex justify-center gap-8">
        <li><a href="#about">Sobre</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
}
