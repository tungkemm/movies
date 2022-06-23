import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux/es/exports';
import "./Header.scss";

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch() 
    return (
        <div className="header">
            <div className="logo" onClick={() => {
                navigate("/")
            }}>Movie App</div>
        </div>
    );
};

export default Header;