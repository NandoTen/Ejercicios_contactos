import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact_class'

const ContactComponent = ({ contact, connect, remove }) => {

  
  const connected = ()=>{
    if(contact.contacto){
      return (<i  onClick={()=>connect(contact)} className='bi-toggle-on task-action' style={{color:'green'}}></i>) 
    }else{return (<i onClick={()=>connect(contact)} className='bi-toggle-off task-action' style={{color:'black'}}></i>)}
  }

  return (
    <tr>
    <td>{contact.nombre}</td>
    <td>{contact.apellido}</td>
    <td>{contact.email}</td> 
    <td>{connected()}</td>
    <td><i onClick={()=>{remove(contact)}} className='bi-trash task-action' style={{color: 'tomato', fontSize:'20px', margin:'0px 0px 0px 20px'}}></i></td>
    </tr>
  
  )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired
    }

export default ContactComponent
