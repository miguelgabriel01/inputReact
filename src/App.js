import React from 'react';

const formFields = [
  {
    id:'nome',
    label:'nome',
    type:'text'
  },
  {
    id:'email',
    label:'email',
    type:'email'
  },
  {
    id:'senha',
    label:'senha',
    type:'password'
  },
  {
    id:'cep',
    label:'cep',
    type:'text'
  },
  {
    id:'numero',
    label:'numero',
    type:'text'
  },
  {
    id:'rua',
    label:'rua',
    type:'text'
  },
  {
    id:'bairro',
    label:'bairro',
    type:'text'
  },
  {
    id:'cidade',
    label:'cidade',
    type:'text'
  },
  {
    id:'estado',
    label:'estado',
    type:'text'
  },

]
const App = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha:'',
    cep:'',
    numero:'',
    rua:'',
    bairro:'',
    cidade:'',
    estado:'',
  });

  const [response,setResponse] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);

    fetch('https://ranekapi.origamid.dev/json/api/usuario',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',//nomes com "-" devem ser colocados entre ""
      },
      body:JSON.stringify(form)
    }).then((response) => {
      setResponse(response);
    })
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
     
     {formFields.map(({id,label,type}) => (
       <div key={id}>
      <label htmlFor={id}>{label}</label><br/>
      <input 
      type={type} 
      id={id} 
      value={form[id]} 
      onChange={handleChange} />
         
       </div>
     ))}

     {response && response.ok && <p>Formulario enviado</p>}

      <button>Enviar</button>
    </form>
  );
};

export default App;
