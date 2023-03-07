import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../services/Api';
import {
  IDefaultProviderProps,
  IRegisterFormValues,
  ILoginFormValues,
  IUserContext,
} from './@types';

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const navigate = useNavigate();

  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      const response = await api.post('/users', formData);
      navigate('/');
      // return toast.success('Conta criada com sucesso!');
    } catch (error) {
      // return toast.error('E-mail já cadastrado!');
    }
  };

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      const response = await api.post('/login  ', formData);
      localStorage.setItem('@HAMBURGUERIA2.0:token', response.data.accessToken);
      navigate('/shop');
    } catch (error) {}
  };

  const userLogout = () => {
    localStorage.removeItem('@TOKEN');
    navigate('/');
  };

  return (
    <UserContext.Provider value={{ userRegister, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};
