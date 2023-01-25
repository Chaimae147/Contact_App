import React, { useState,useRef } from 'react'
import { v4 as uuid } from 'uuid';
import './Contactstyle.css'
import Contact from './Contact';
export default function FormContact() {
  const[contacts,setContacts]=useState([
    {
      id:uuid(),name:"BAQALI OUMAIMA ",tel:'0158974565',ville:'Casablanca'
      
  },
  {
      id:uuid(),name:"KAOUTAR KAIDIRI",tel:'0536785944',ville:'Agadir'
  },{
      id:uuid(),name:"AHMED IDRISSI",tel:'0123456789',ville:'Tanger'
  }

]);
const name = useRef();
const tel = useRef();
const ville = useRef();

const [chercher,setChercher]=useState('');
const ajouteC= () =>{
  
  const nom = name.current.value;
  const tele = tel.current.value;
  const villle = ville.current.value;
  if(nom=="" || tele=="" || villle==""){
    alert(
      "Il faut remplir tout les champs"
    )
  }
  else {
  setContacts([...contacts, { name: nom, tel: tele, ville: villle }]);
  name.current.value="";
  tel.current.value="";
  ville.current.value="";
  }
};
const delT = (idc) =>{
 let ncontact=contacts.filter((t)=>{
    return t.id!=idc
})
setContacts(ncontact); 

}
const triercroissant = () => {
  const contacttrier = contacts.slice().sort((a, b) => a.name.localeCompare(b.name));
  setContacts(contacttrier);
}
const trierdecroissant =() =>{
  const contacttrier = contacts.slice().sort((b, a) => a.name.localeCompare(b.name));
  setContacts(contacttrier);
}
  return (
    <div>
       <h1 className='title'>App contact</h1>
      <div className="row  justify-content-between" >
<div className='mt-5 py-3  c3'>
      <form action="">
        <h3>Ajouter un nouveau contact</h3>
      <label htmlFor="nom">Nom :</label>

       <input className='form-control inp 'placeholder='Ajouter nom contact ' ref={name} id='nom'  type="text" />
       <br />
       <label htmlFor="tel">Telephone :</label>
       <input  className='form-control inp'  placeholder='01-234-56789' ref={tel} id='tel'  type="tel" />
       <br />
       <label htmlFor="ville">Ville :</label>
       <input  className='form-control inp ' placeholder='ville' ref={ville} id='ville'  type="text" />
{/*        <input type="button" className='btn btn-outline-primary' onClick={ajouteC} style={{marginTop:'30px',marginLeft:'170px'}}  value="+ Ajouter Contact" />
 */}    
  <svg xmlns="http://www.w3.org/2000/svg" onClick={ajouteC} width="30" height="30"  fill="currentColor" className="bi bi-person-plus btnaj" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg>
      </form>
    {/*   </div> */}
    </div>

    <div className='mt-5 py-3  c4'>
    <h3>Liste des contacts</h3>
    <div class="input-group">
  <input type="search" className="form-control cher" onChange={(e)=>setChercher(e.target.value)} placeholder=" Cherchez par ville" /> 
  </div>
  <div style={{marginTop:"25px",marginBottom:'25px'}} >
   {/* Button trier croissant */}
  <b >TRIER :</b>&nbsp;&nbsp;
   <svg xmlns="http://www.w3.org/2000/svg"values='croissant' className='cc' onClick={triercroissant} width="30" height="25" fill="currentColor" class="bi bi-sort-alpha-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"/>
  <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
</svg>&nbsp;&nbsp;
   {/* Button trier decroissant  */}
   <svg xmlns="http://www.w3.org/2000/svg" values='decroissant' className='cc'    onClick={trierdecroissant} width="30" height="25" fill="currentColor" class="bi bi-sort-alpha-down-alt" viewBox="0 0 16 16">
  <path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"/>
  <path fill-rule="evenodd" d="M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"/>
  <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
</svg>
  </div>

  {

contacts.filter((t)=>{
  return chercher.toLocaleLowerCase() === ''? t : t.ville.toLocaleLowerCase().includes(chercher);
 }).map((t)=>{


return <div style={{marginBottom:'30px'}} key={t.id}><Contact   delf={()=>{delT(t.id)}}   txttel={t.tel} txtville={t.ville} txt={t.name}/></div> 



})




}
  </div>
  
    </div>
    </div>
  )
}
