
import React from 'react';
import{ HamburgerIcon, ChatIcon, CalendarIcon, 
        AtSignIcon,} from '@chakra-ui/icons';
import { IoMdFiling } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import Example from './Example';


function Dashboard() {
    
  return (
    <div className="main">
         
    <div className="left">
        <div className="logo">
            <IoMdFiling />
            
        </div>
            <div className="link_item">
                <HamburgerIcon />
                <h3>Dashboard</h3>
            </div>
            <div className="link_item">
                <ChatIcon/>
                <h3>Message</h3>
            </div>
            <div className="link_item">
                <CalendarIcon/>
                <h3>Calendar</h3>
            </div>
            <div className="link_item">
                <AtSignIcon/>
                <h3>Client</h3>
            </div>
            <div className="link_item">
                <AiOutlineSetting />
                <h3>Setting</h3>
            </div>
            <div className="boreder">
             
            </div>
            <div className="link_item">
            <AiOutlineLogout />
                <h3>log out</h3>
            </div>
        </div>
        <div className="right">
            <div className="header">
                <h1>Dashboard</h1>
            </div> 
            <div className="btn">
                <button className='btn_st'> <AiOutlineSearch />what to search for?</button>
            </div>
            <div className="trend">
                <Example/>
               
            </div>
        </div>
    
</div>
  )
}

export default Dashboard



