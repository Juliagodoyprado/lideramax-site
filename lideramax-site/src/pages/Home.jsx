export default function Home() {
return (
    <div>
    <section style={{
        height:'100vh',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        background:'#0F2A44',
        color:'white'
    }}>
        <h1>Liderança Máxima</h1>
        <p>Treinamentos, Fluxos e Terceirização</p>
        <button style={{
        background:'#F26A21',
        padding:'15px 30px',
        border:'none',
        color:'#fff',
        fontWeight:'bold'
        }}>
        Agende Consulta Grátis
        </button>
    </section>
    </div>
);
}