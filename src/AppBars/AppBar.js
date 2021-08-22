import React from 'react'
import { Link, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

const styles = {
    padding: "14px 0 14px 0",
    backgroundColor:"#062C41", 
    backgroundPosition: "0% 0%",
    color:"#000000",            
    height:"130px",
    width:"1349px",
    overflow: 'hidden',
    position: 'fixed',
    top: 0,
                        //  position:"fixed",   
            }

const boxstyle= {
    display:"block",
    fontFamily:"sans-serif",
    fontSize:"16px",
    color:"#ffffff",
    lineHeight:"24px",
    textDecoration:"none solid rgb(255,255,255)",
    textAlign:"center",
    textTransform:"uppercase",   
    wordSpacing:"10px",                
    height:"48px",
    width:"139.4px",
    textAlign:"center",
    borderRadius:"9999px",
    minHeight:"auto",
    minWidth:"auto",
    border:"1px solid black",
    padding:"24px 24px 7px 24px",
    backgroundColor:"#0B354E"

}

export default function AppBar(props) {
   

      const web3 = useSelector((state)=>{
        return state.adoptReducer.web3;
      });

    
    return (

        <div style={styles}>

        <div style={{display:"flex"}}>
        <div>
            <div style={{margin:"0px 100px 20px 300px",textAlign:"left", fontSize:"20px", fontWeight:"500", lineHeight:"28px", textDecoration:"none solid rgh(255,255,255)", textTransform:"uppercase", wordSpacing:"0px",  backgroundPosition:"0%, 0%", color:"#FFFFFF", height:"32px", width:"407px", border:"0px solid #E5E7EB", display:"block"}}>
            E T H A P E 
            </div>
            <div style={{margin:"0px 100px 0px 300px",textAlign:"left", fontSize:"16px", fontWeight:"500", lineHeight:"28px", textDecoration:"none solid rgh(255,255,255)", textTransform:"uppercase", wordSpacing:"0px",  backgroundPosition:"0%, 0%", color:"#FFFFFF", height:"32px", width:"407px", border:"0px solid #E5E7EB", display:"block"}}>
            Reinventing the norm in Defi with Complete Transparency 
            </div>

        </div>

        <Link style={boxstyle} to="dashboard">DashBoard</Link>{'   '}
        
        </div>        
        
        
           
            
            
            
            

        </div>
    )
}
