import { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ILoginFormValues } from '../../../providers/@types';
import { UserContext } from '../../../providers/UserContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';

const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>();

  const submit: SubmitHandler<ILoginFormValues> = (formData) => {
    userLogin(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        type='email'
        label='Email'
        error={errors.email}
        register={register('email')}
      />
      <Input
        type='password'
        label='Senha'
        error={errors.password}
        register={register('password')}
      />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
