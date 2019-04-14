import React, { useEffect } from 'react';
import List from '../List/List';
import { useGlobal } from 'reactn';


const contacts = props => {
  const [ global, setGlobal ] = useGlobal();
  let data = [];
  useEffect(() => {

    getContacts();
      

  }, [] )
const getContacts = () =>{

  return (
      fetch('http://localhost:5001/contacts/')
  // .then(res => res.json()) // comment this out for now
        .then(response => response.json())
        .then(result => data.push(result)))         // convert to plain text
}
 
console.log("DATA ARRAY",data[0].object[0])
console.log(global.userData)

  return(
        <div>
          <h2>contacts</h2>
          <List ss={data}/>
        </div>
  )
}
export default contacts;