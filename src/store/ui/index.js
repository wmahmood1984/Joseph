import Web3 from 'web3'
import RouterAbi from './RouterAbi';
import TokenAbi from './ContractAbi';
import V2Pair from './V2Pair';
import DividendTokenAbi from './DividendTokenAbi';

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



var web3;
var RouterContract
var address
var RouterAddress
var TokenContract
var TokenAddress

export const initWeb3 = createAsyncThunk(
    "InitWeb3",
    async(a,thunkApi)=>{
    

        try {
            if(Web3.givenProvider){ 
                web3 = new Web3(Web3.givenProvider);
               await Web3.givenProvider.enable()
				TokenAddress = "0xf3fDC66918DFc58045c6a99a511fde7F6108Ea19"
				RouterAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
				TokenContract = new web3.eth.Contract(TokenAbi, TokenAddress);
				RouterContract = new web3.eth.Contract(RouterAbi, RouterAddress);
				const v2pairAddress = await TokenContract.methods.uniswapV2Pair().call()
				const DivTokenAddress = await TokenContract.methods._dividendToken().call()
				const v2pairContract = await new web3.eth.Contract(V2Pair, v2pairAddress);
				const DivTokenContract = await new web3.eth.Contract(DividendTokenAbi, DivTokenAddress);
 				const addresses = await web3.eth.getAccounts()
				console.log("v2pair",v2pairContract)
                address = addresses[0];
                thunkApi.dispatch(balance({
                    RouterContract,
                    address,
					TokenContract,
					TokenAddress,
					v2pairAddress,
					v2pairContract,
					DivTokenContract,
                }))

				return {
                    web3,
                    RouterContract,
                    address,
					RouterAddress,
					TokenContract,
					v2pairContract,
					DivTokenContract,

                                                       }
            }else {console.log("error in loading web3")
					return {web3:null,contract:null,address:null,RouterAddress:null}}
        } catch (error) {
            console.log("Error", error)
        }

    }
)


export const balance = createAsyncThunk("balance",
async({
	RouterContract,
	address,
	TokenContract,
	TokenAddress,
	v2pairAddress,
	v2pairContract,
	DivTokenContract,
})=>{


	try {

		const reservesIn = await v2pairContract.methods.getReserves().call();
		
		const result = await RouterContract.methods.getAmountOut(
			web3.utils.toWei(Number(1).toString(),"ether"), 
			reservesIn[0],
			reservesIn[1]
			).call();
		
		var price = 1000000000000000000/Number(result)

		const balance1 = await TokenContract.methods.balanceOf(address).call()
		const unclaimed = await DivTokenContract.methods.dividendOf(address).call()
		const Claimed = await DivTokenContract.methods.withdrawnDividendOf(address).call()
		

		return {price,result,balance1,unclaimed,Claimed};
	} catch (error) {
		console.log("error in balance ", error)
	}
}
)



export const withdrawDividend = createAsyncThunk("withdrawDividend",
async()=>{


	try {

		const result = TokenContract.methods.withdrawDividend().send({from: address}, )
		return result

		
	} catch (error) {
		console.log("error in withdrawDividend ", error)
	}
}
)


export const withdrawAndReinvest = createAsyncThunk("withdrawAndReinvest",
async()=>{


	try {

		const result = TokenContract.methods.withdrawDividendReinvest().send({from: address})
		return result

		
	} catch (error) {
		console.log("error in withdrawAndReinvest ", error)
	}
}
)


export const processDividend = createAsyncThunk("processDividend",
async()=>{


	try {

		const result = TokenContract.methods.swapTokensForEth().send({from: address, gas : 3000000})
		return result

		
	} catch (error) {
		console.log("error in processDividend ", error)
	}
}
)




const adoptSlice = createSlice({
    name: "AdopSlice",
    initialState: {
        web3: null,
        address : null,
       	connected:false,
		await: null,
        toggle: false,
		error: null,
		priceInEth: null,
		priceInEthap: null,
		balance:null,
		unClaimed:null,
		Claimed:null,
		TokenContract: null,


    },
    reducers: {
        toggle : (state,actions)=>{
            state.toggle = !state.toggle;
        },
		setConnect : (state,actions)=>{
			state.connected = !state.connected;
			
		}

    },
    extraReducers: {
        [initWeb3.fulfilled] : (state,action)=>{
            state.web3 = action.payload.web3;
            state.address = action.payload.address;
			state.TokenContract = action.payload.TokenContract
			
         },

         [balance.fulfilled] : (state,action)=>{
        	console.log("priceIneth",action.payload.price)
			state.priceInEth = action.payload.price

			state.priceInEthap = Number(action.payload.result)/1000000000000000000
			state.balance = Number(action.payload.balance1)/1000000000000000000
			
			state.unClaimed = Number(action.payload.unclaimed)/1000000000000000000
		
			state.Claimed = Number(action.payload.Claimed)/1000000000000000000
        },


		[withdrawDividend.pending] : (state,action)=>{
           state.toggle = !state.toggle;
		   state.await = true;

        },


		[withdrawDividend.fulfilled] : (state,action)=>{
			state.toggle = !state.toggle;
			state.await = false;
 
		 },


		 [withdrawAndReinvest.pending] : (state,action)=>{
			state.toggle = !state.toggle;
			state.await = true;
 
		 },
 
 
		 [withdrawAndReinvest.fulfilled] : (state,action)=>{
			 state.toggle = !state.toggle;
			 state.await = false;
  
		  },

		  [processDividend.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
			state.error = null;
        },

        [processDividend.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;
			state.error = action.payload.blockHash?  null:action.payload;

        },
    }
})

export const adopreducer = adoptSlice.reducer;
export const { toggle,setConnect } = adoptSlice.actions
