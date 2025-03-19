import React from "react";
import { useState, useEffect } from 'react'
import SelectedContactRow from './SelectedContactRow';

const SelectedContact = ({selectedContactId, setSelectedContactId}) => {
   const [contact, setContact] = useState({})
   useEffect(() => {
           async function fetchContact() {
             try {
               const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
               const result = await response.json();
               setContact(result);
             } catch (error) {
               console.error(error);
             }
           }
           fetchContact();
         }, [selectedContactId]);
         console.log(contact)
    return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="5">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Username</td>
              <td>Website</td>
            </tr>
            {contact &&
                 <tr
                >
               <td>{contact.name}</td>
               <td>{contact.email}</td>
               <td>{contact.phone}</td>
               <td>{contact.username}</td>
               <td>{contact.website}</td>
             </tr>
             }
          </tbody>
        </table>
     );
}
 
export default SelectedContact ;