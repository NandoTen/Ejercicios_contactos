import React, {useRef} from 'react'
import {Contact} from '../../../models/contact_class'
import { PropTypes } from 'prop-types'

const ContactForm = ({add}) => {

    const nameRef = useRef('')
    const lastNameRef = useRef('')
    const emailRef = useRef('')

    const addContact = (e)=>{
        e.preventDefault()
        const newContact = new Contact(
                nameRef.current.value,
                lastNameRef.current.value,
                emailRef.current.value,
                false
        )
        add(newContact)
    }

  return (
    <div>
    <form onSubmit={addContact} className='d-flex justify-content align-items-center mb-4'>
        <div className='form-outline flex-fill'>
            <input ref={nameRef} id='inputName' type='text' className='form-control form-lg' placeholder='Contact name' required autoFocus></input>
            <input ref={lastNameRef} id='inputLastName' type='text' className='form-control form-lg' placeholder='Contact last name' required ></input>
            <input ref={emailRef} id='inputEmail' type='text' className='form-control form-lg' placeholder='Contact email' required ></input>
            <button type='submit' className='btn btn-success btn-lg ms-5'>Add</button>
        </div>

    </form>
      
    </div>
  )
}

ContactForm.protoType = {
    add: PropTypes.func.isRequired 
}

export default ContactForm
