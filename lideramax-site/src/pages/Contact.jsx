import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
const [form, setForm] = useState({name:'', email:'', message:''});

const send = async () => {
    await axios.post('http://localhost:5000/contact', form);
    alert('Enviado!');
};

return (
    <div>
    <input placeholder="Nome" onChange={e=>setForm({...form,name:e.target.value})}/>
    <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
    <textarea placeholder="Mensagem" onChange={e=>setForm({...form,message:e.target.value})}/>
    <button onClick={send}>Enviar</button>
    </div>
);
}