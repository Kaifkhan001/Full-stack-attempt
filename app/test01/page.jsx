"use client"
import axios from 'axios';
import React,{useState, useEffect} from 'react'

const Page = () => {
    const [user, setuser] = useState(null);
    useEffect(() => {
        axios.get('')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
    }, [])
    
  return (
    <div>
      This is the test api page
    </div>
  )
}

export default Page;
