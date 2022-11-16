import React, {useState} from 'react'

import { Contact } from '../../models/contact_class'
import ContactComponent from '../pure/contact'
import ContactForm from '../pure/forms/contactForm'

const ContactList = () => {

const contacto1 = new Contact('Nombre1','Apellido1', 'email1@mail.com', false)
const contacto2 = new Contact('Nombre2','Apellido2', 'email2@mail.com', false)
const contacto3 = new Contact('Nombre3','Apellido3', 'email3@mail.com', false)

const [contacts, setContact] = useState([contacto1,contacto2,contacto3])

const connectedContact =(contact)=>{
    console.log(contact)
    const index = contacts.indexOf(contact)
    const tempContacts = [...contacts]
    tempContacts[index].contacto = !tempContacts[index].contacto
    setContact(tempContacts)
}

const deleteContact =(contact)=>{
    console.log(contact)
    const index = contacts.indexOf(contact)
    const tempContacts = [...contacts]
    tempContacts.splice(index,1)
    setContact(tempContacts)
}

const addContact =(contact)=>{
    console.log(contact)
    const tempContacts = [...contacts]
    tempContacts.push(contact)
    setContact(tempContacts)
}

  return (
    <div className='col-12'>
              <div className='card'>
                <div className='card-header p-3'>
                <h5>Your Contact:</h5>
                </div>
              
              <div className='card-body' style={{positio:'relative', height:'400px'}}>
                <table>
                <thead>
                    <tr>
                      <th scope ='col'>Name</th>
                      <th scope ='col'>Last Name</th>
                      <th scope ='col'>Email</th>
                      <th scope ='col'>Connected</th>
                      <th scope ='col'>Delete</th>
                    </tr>
                </thead>
                <tbody> 
                { contacts.map((cont,index)=>{
                  return(<ContactComponent 
                  contact = {cont} 
                  key = {index} 
                  connect = {connectedContact}
                  remove = {deleteContact} 
                 
                  ></ContactComponent>)
                  })
                }
                </tbody>
                </table>
              </div>
              </div>
              <ContactForm  add = {addContact}></ContactForm>
           
          </div>
  )
}

export default ContactList
