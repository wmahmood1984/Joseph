import React from 'react'
import AppBarDashBoard from '../AppBars/AppBarDashboard'
import './DashBoard.css';
import { useDispatch, useSelector } from 'react-redux';
import { initWeb3,setConnect } from '../store/ui';


export default function DashBoard() {
    const dispatch = useDispatch()

    const connected = useSelector(
        state => state.adoptReducer.connected)


    async function handleConnect(e){
   e.preventDefault()
   dispatch(setConnect())        
        window.ethereum.request({
          method: 'wallet_requestPermissions',
          params: [{
            eth_accounts: {},
          }]
        }); 



    }

    return (
        <div >
        {!connected? 
        <div className="DashBoard">
        
        <button style={{height:"48px",width:"554px",borderRadius:"9999px", color:"0B2A3D",backgroundColor:"white", margin:"300px 0 0 400px "}}
        onClick={handleConnect}
        >Connect to Wallet</button><br/>

        <button onClick={()=>{window.open("https://app.uniswap.org/#/swap")}} style={{height:"48px",width:"554px",borderRadius:"9999px", color:"white",backgroundColor:"#062C41",border:"solid 2px white", margin:"150px 0 0 400px "}}>Buy E T H A P on UniSwap</button>

        </div>
        :
        <div className="DashBoard">

            <div style={{margin:"300px 100px 10px 350px",padding:"20px 20px 10px 20px", border:"2px solid white", height:"122px", width:"674px", display:"block"}}>
                <div style={{display:'block', width: "300px",margin : '10px',float: 'left',height: "24px"}}>Current Price</div>
                <div style={{display:'block', width: "300px",margin : '10px',float: 'left',height: "24px"}}>Your holding</div>
                <div style={{display:'block', width: "300px",margin : '10px',float: 'left',height: "24px"}}>Unclaimed</div>
                <div style={{display:'block', width: "300px",margin : '10px',float: 'left',height: "24px"}}>Claimed</div>
            
            </div>

            <div style={{display:"flex"}}>
            <button style={{height:"48px",width:"313px",borderRadius:"9999px", color:"0B2A3D",backgroundColor:"white", margin:"30px 0 0 400px ", fontSize:"16px", textDecoration:"none solid rgb(11,42,61)"}}>Claim</button><br/>
            <button style={{height:"48px",width:"313px",borderRadius:"9999px", color:"0B2A3D",backgroundColor:"white", margin:"30px 0 0 10px ", fontSize:"16px", textDecoration:"none solid rgb(11,42,61)"}}>Claim and Reinvest</button><br/>
            </div>
            <button onClick={()=>{window.open("https://app.uniswap.org/#/swap")}} style={{height:"50px",width:"674px",borderRadius:"9999px", color:"white",backgroundColor:"#062C41",border:"solid 2px white", margin:"20px 0 0 300px "}}>Buy E T H A P on UniSwap</button>


        </div>}
        
        
        {/* <AppBarDashBoard></AppBarDashBoard> */}

        </div>
    )
}
