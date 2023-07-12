import { createSlice } from '@reduxjs/toolkit';

export const pacientesSlice = createSlice({
    name: 'pacientes',
    initialState: {
       pacientes:[]
    },
    reducers: {
        addPacient: (state, {payload} ) => {
            state.pacientes.push(payload)
        },
        getPacients:(state,{payload}) =>{
            state.pacientes = payload
        },
       
        
    }
});


// Action creators are generated for each case reducer function
export const { addPacient ,getPacients} = pacientesSlice.actions;
export default pacientesSlice.reducer