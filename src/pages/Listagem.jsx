import React, {useState, useEffect} from 'react'
import Pizzas from '../shared/Pizzas'
const Listagem = () => {
const ItensLista = () => Pizzas.map(
Pizza =>
<li key={Pizza.id} style={{listStyle: 'none'}}>
<img src={Pizza.imagem}
alt={Pizza.nome}
style={{
width: "150",
height: "100px",
borderRadius: "8px",
margin: "0px",
}}
/>
</li>
)
return (
<>
<h2 style={{textAlign: 'center'}}>
Pizzas ITB
</h2>
<ul>
<ItensLista />
</ul>
</>
)
}
export default Listagem