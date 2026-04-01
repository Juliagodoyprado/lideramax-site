import logo from '../assets/logo.png';

export default function Navbar() {
return (
    <nav style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
    <img src={logo} width="150" />
    <div>
        <a href="/">Home</a>
        <a href="/services">Serviços</a>
        <a href="/about">Sobre</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contato</a>
    </div>
    </nav>
);
}