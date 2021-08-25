import React from 'react'
import '../App.css';
import image from '../Assets/transparent_logo.png'
import coinGecko from '../Assets/coin-gecko-full.png'
import coinMarket from '../Assets/coinmarketcap-white.png'
import dextools from '../Assets/dextools-full.png'
import etherScan from '../Assets/etherscan-full.png'
import uniswap from '../Assets/uniswap-full.png'
import dashboard from '../Assets/dashboard.png'
import { Link } from 'react-router-dom';
import AppBar from '../AppBars/AppBar';

export default function Home() {
    return (
        <div style={{display:"block",alignContent:"center"}}>
            <AppBar></AppBar>
           <div style={{display:"flex", border:"solid 0px green ", margin:"200px 200px 10px 200px", color:"white"}}>
               <div>
                   <div style={{height:"64px", width:"599px", fontSize:"24px", textAlign:"left"}}>Transparent Token is the best way to passively earn ETH by simply holding.</div>
                   <div style={{height:"164px", width:"599px", fontSize:"16px", textAlign:"left"}}
                   >As the Transparent team we know what it takes to make a defi project run. We will be doing everything in our power to ensure the long-term success of this project. Part of that of course is the job of the community. Anyone that has been in a successful long-term project knows that with full community participation, there are no limits to how far this project can go. So grab your bag, watch your passive rewards climb, and join the Transparent movement!</div><br/><br/>
                   <div style={{height:"60px", width:"599px", fontSize:"16px", textAlign:"left", display:"flex"}}>
                       <button onClick={()=>{window.open("https://app.uniswap.org/#/swap?use=V2/ETH/0xA0f6F7f7E5D41BfF74c3F689f06b6A1ec35A7470")}} 
                            style={{height:"50px", width:"146px", fontSize:"16px", backgroundColor:"white", color:"black", border:"0 solid", borderRadius:"9999px"}}>Buy E T H A P</button>
                       <Link to="dashboard"
                            style={{height:"50px",textAlign:"center", paddingTop:"10px", minWidth:"250px", fontSize:"16px", backgroundColor:"#0B354E", color:"white", border:"0 solid", borderRadius:"9999px", marginLeft:"30px"}}>Access the DashBoard</Link>
                   </div>
               </div>
               <img style={{height:"299px", width:"299px"}} src={image}></img>
           </div>

           <div style={{height:"107px", width:"899px", display:"flex", margin:"100px 200px 10px 200px"}}>
               <a href={"https://www.coingecko.com"} target="_blank"><img style={{height:"60px", width:"170px", marginLeft:"30px"}} src={coinGecko}></img></a>
               <a href={"https://www.coinmarketcap.com"} target="_blank"><img style={{height:"60px", width:"170px", marginLeft:"30px"}} src={coinMarket}></img></a>
               <a href={"https://coinmarketcap.com/currencies/dextools/"} target="_blank"><img style={{height:"60px", width:"170px", marginLeft:"30px"}} src={dextools}></img></a>
               <a href={"https://www.uniswap.com"} target="_blank"><img style={{height:"60px", width:"170px", marginLeft:"30px"}} src={uniswap}></img></a>
               <a href={"https://www.etherscan.com"} target="_blank"><img style={{height:"60px", width:"170px", marginLeft:"30px"}} src={etherScan}></img></a>
           </div>

           <div style={{padding:"30px 200px", height:"616px", marginRight:"0px", backgroundColor:"#062C41", textAlign:"center", alignContent:"center"}}>
            <div style={{height:"28px"}}>Over  43 Ethereum generated for Transparent holders since launch.</div>
            <img  style={{height:"300px", width:"600px"}} src={dashboard}></img>
            <div style={{height:"48px", width:"899px", margin:"auto"}}>Buy and hold Transparent to start earning rewards. All you need to do is hold 5000 tokens, connect your wallet and the dashboard will allow you to view your current Ethereum rewards and withdraw them whenever you decide.</div>
           </div>

           <div style={{height:"1092px", width:"100%", backgroundColor:"#0B354E", margin:"auto"}}>
            <div style={{height:"140px", width:"899px",display:"block", textAlign:"center", color:"white", margin:"auto"}}>
                <div style={{fontSize:"16px", height:"24px", margin:"10px", color:"#AAAAAA"}}>Why Transparent?</div>
                <div style={{fontSize:"20px", height:"112px", margin:"10px"}}>Transparent Token aims to create a new norm in the Defi industry. The team is tired of all the projects launched with hidden taxes, unverified contracts, and dishonest shaky teams. The Transparent team offers all details up front, with nothing to hide. Any questions asked in chat or on social media will be answered concisely to allow all investors to be confident that it is Safu!</div>

            </div>

            <div style={{minHeight:"900px", width:"899px", textAlign:"center", color:"white", margin:"auto",marginTop:"50px"}}>
                <div style={{display:'block', maxWidth: 345,margin : '10px',float: 'left',height: "430px", border: "solid green 1px"}}>

                    <h3>ETH Redistribution</h3>
                    <p>The smart contract has a 10% tax on all buys. To avoid early dumping there will be an initial 20% tax on sells. The tax will go down to 15% on the second day, and 10% on the third day. It will remain at 10% from that point forward. 60% of the tax will be redistributed amongst holders as ETH dividends to be claimed at their convenience, the remaining part will be used for operations in order to keep the team motivated for the long term success of this project.</p>
                </div>

                <div style={{display:'block', maxWidth: 345,margin : '10px', float: 'left', height: "430px", border: "solid green 1px"}}>

                    <h3>Liquidity Generation Event</h3>
                    <p>There was a liquidity generation event (at 2x the launch price) filled by crypto influencers and designers that will help to make this project fly, for a total of 15 ETH! These influencers were selected with the project’s success in mind. They purchased their own presale allocation which motivates them to promote the token and help us all pump the bags! All of these wallets are also monitored by the team and anyone that dumps their bag won’t be allowed into any future projects. With a team like the one we have, that is something they don’t want to do.</p>
                </div>

                <div style={{display:'block', maxWidth: 345,margin : '10px', float: 'left', height: "430px", border: "solid green 1px"}}>

                    <h3>Marketing Plans</h3>
                    <p>The team will also have access to a marketing wallet of 5% of the total supply that will be used sparingly only when it is absolutely necessary. It will be used to provide the community with rewards and incentives for competitions and community involvement. This wallet address will be provided to the community so they can monitor any transactions. Any transaction made from this wallet, we are happy to explain directly what it was used for.</p>
                </div>

                <div style={{display:'block', maxWidth: 345, margin : '10px', float: 'left', height: "430px", border: "solid green 1px"}}>

                    <h3>Tokenomics</h3>
                    <div style={{width:"345px", paddingTop:"15px", height:"40px",borderTop:"solid 3px #AAAAAA", borderBottom:"solid 3px #AAAAAA"}}>Total Supply          <span style={{marginLeft:"100px"}}>1 Billion</span></div>
                    <div style={{width:"345px", paddingTop:"15px", height:"40px", borderBottom:"solid 3px #AAAAAA"}}>Initial Burn          <span style={{marginLeft:"100px"}}>50%</span></div>
                    <div style={{width:"345px", paddingTop:"15px", height:"40px", borderBottom:"solid 3px #AAAAAA"}}>Influencer Presale          <span style={{marginLeft:"100px"}}>15%</span></div>
                    <div style={{width:"345px", paddingTop:"15px", height:"40px", borderBottom:"solid 3px #AAAAAA"}}>Liquidity Pool          <span style={{marginLeft:"100px"}}>30%</span></div>
                    <div style={{width:"345px", paddingTop:"15px", height:"40px", borderBottom:"solid 3px #AAAAAA"}}>Marketing Wallet          <span style={{marginLeft:"100px"}}>5%</span></div>
                </div>

            </div>
           </div>


        </div>
    )
}


//{display:"flex", color:"white", marginTop:"300px", height:"491", width:"899", border:"0px solid #E5E7EB", }}