import React, { useEffect, useState } from 'react';
import List from '../List/List';
import axios from 'axios';



const contacts = props => {
  const [data, setData] = useState({ users: [] });

  useEffect(() =>{
    async function fetchData () {
    const result = await axios(
      'http://localhost:5001/contacts ',
        );

      setData(result.data);}
      fetchData();
  }, []);
  return(
        <div>
          <List users={data.users} />
        </div>
  )
}
export default contacts;