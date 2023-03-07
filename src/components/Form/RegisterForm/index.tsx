import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IRegisterFormValues } from '../../../providers/@types';
import { useContext } from 'react';
import { UserContext } from '../../../providers/UserContext';

const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>();

  const submit: SubmitHandler<IRegisterFormValues> = (formData) => {
    userRegister(formData);
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
      <Input
        type='name'
        label='Seu nome'
        error={errors.name}
        register={register('name')}
      />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
