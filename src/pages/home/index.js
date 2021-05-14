import React, {useState, useEffect} from "react";
import { auth } from "../../firebase";
import {Feed} from "../../containers/index";
import {useHistory} from "react-router-dom";
import {Spinner} from "react-bootstrap";
import Navbar from "../../containers/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

export default function Home() {

  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user =>{
      if(user) {
        setCurrentUser(user);
        setLoading(false);
      }
      else {
        history.push('/');
      } 
    })
    return unsubscribe;
  });

  return (
    <div className="home">
      {  currentUser ? (
        <Navbar currentUser = {currentUser } />
      ) :(
        <></>
      )}

      { loading ? ( 
        <Spinner className='loading-animation' animation="border" variant="danger" role="status" / >
      ) : (
        <Feed currentUser = {currentUser }/>
      )}
      
    </div>
  );
}

