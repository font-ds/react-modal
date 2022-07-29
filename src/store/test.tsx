
import {createAsyncThunk, createSlice,PayloadAction} from '@reduxjs/toolkit';

interface textState{
    text:string
}

const initialState:textState={
    text:''
}



export const addStringAsync=createAsyncThunk('text',async(str:string)=>{
    // setTimeout(()=>{
    //     return 'aaa'
    // },1000)
    return str
})

const textSlice=createSlice({
    name:'text',
    initialState,
    reducers:{
        addString:(state:textState,action:PayloadAction<string>)=>{
            state.text+=action.payload
        },
        lowString:(state:textState)=>{
            state.text+='0'
        }
    },

    extraReducers:builder=>{
        builder.addCase(addStringAsync.pending,(state:textState,action:any)=>{
        });
        builder.addCase(addStringAsync.fulfilled,(state:textState,action:any)=>{
            console.log(action)
            state.text+=action.payload
        })
    }
})

export const {addString,lowString}=textSlice.actions

export default textSlice.reducer