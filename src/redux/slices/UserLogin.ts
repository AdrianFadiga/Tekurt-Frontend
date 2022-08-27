import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../interfaces/IUser';

const initialState = {
  id: '2bb6e92a-3c2b-4b7f-a822-96f5106d8c37',
  firstName: 'nome',
  lastName: 'sobrenome',
  username: 'usuario',
  email: 'teste@teste.com',
  imageUrl: 'url_imagem',
  socialStatusId: '',
  children: '',
  smokes: '',
  drinkingId: '',
  signId: '',
  biography: 'biografia',
  active: true,
  createdAt: '2022-08-26T18:53:27.053Z',
  updatedAt: '2022-08-26T18:53:27.053Z'
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    userLogin(state, {payload}) {
      state.id = payload.id;
      state.firstName = payload.nome;
      state.lastName = payload.sobrenome;
      state.username = payload.username;
      state.email = payload.email;
      state.imageUrl = payload.imageUrl;
      state.socialStatusId = payload.socialStatusId;
      state.children = payload.children;
      state.smokes = payload.smokes;
      state.drinkingId = payload.drinkingId;
      state.signId = payload.signId;
      state.biography = payload.biography;
      state.active = payload.active;
      state.createdAt = payload.createdAt;
      state.updatedAt = payload.updatedAt;
    }
  }
});

export const { userLogin } = loginSlice.actions;
export const login = (state: any) => state.login;
export default loginSlice.reducer;