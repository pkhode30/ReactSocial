import React, { useState } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CodeIcon from '@material-ui/icons/Code';
import {Button} from "react-bootstrap";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from "react-router-dom";
import { logout } from "../../services/auth";
import { ConfirmDialog } from "../../components/index";
import { Dropdown } from 'react-bootstrap';

export default function Navbar( {currentUser} ) {
    const [confirmOpen, setConfirmOpen] = useState();

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
          href="#"
          ref={ref}
          onClick={e => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {<MoreVertIcon />}
          {children}
      
        </a>
      ));

    const clearUser = async () => {
        let loggedOut = await logout();
        if(loggedOut)
           currentUser = null;
        return <Redirect to="/" />
    }


    
    return (
    <div className="navbar">
        <div className="navbar__left">
            <div className="navbar__logo">
                <CodeIcon />
            </div>  
            <div className="navbar__name">
                <p>ReactSocial</p>
            </div>
        </div>
        <div className="navbar__right">
            <div className="navbar__profile">
                <img className="post__profilePic" src={currentUser.photoURL} alt="profile_pic"/>
                <u>{currentUser.email.replace("@gmail.com","")}</u>
            </div>
            <div className="navbar__options">

            <Dropdown>
                <Dropdown.Toggle as={CustomToggle} variant="secondary">
                </Dropdown.Toggle>

                <Dropdown.Menu size="sm" title="">
                    <Dropdown.Item >
                        <Button variant="white" onClick={() => setConfirmOpen(true)}>Logout</Button> 
                            
                        <ConfirmDialog
                            title="Logout?"
                            open={confirmOpen}
                            setOpen={setConfirmOpen}
                            onConfirm={clearUser}
                        >
                            Are you sure you want to logout?
                        </ConfirmDialog>

                        {/* <Spinner className='loading-animation' animation="border" variant="danger" role="status" / > */}

                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>
        </div>
    </div>
    );
};