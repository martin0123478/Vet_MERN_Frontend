import { createSlice } from '@reduxjs/toolkit';

export const pacientesSlice = createSlice({
    name: 'pacientes',
    initialState: {
       pacientes:[],
       selectPaciente:{}
        
    },
    reducers: {
        addPacient: (state, {payload} ) => {
            state.pacientes.push(payload)
        },
        getPacients:(state,{payload}) =>{
            state.pacientes = payload
        },
       deletePacients:(state,{payload}) =>{
        
       state.pacientes.filter(paciente => paciente._id != payload._id)
  
       },
      
        
    }
});


// Action creators are generated for each case reducer function
export const { addPacient ,getPacients,deletePacients,editPacient} = pacientesSlice.actions;
export default pacientesSlice.reducer