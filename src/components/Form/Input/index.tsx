import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface IInputProps {
  label: string;
  register: UseFormRegisterReturn<string>;
  type: string;
  error?: FieldError;
}

const Input = ({ label, register, error, type }: IInputProps) => {
  return (
    <fieldset>
      <StyledTextField label={label} type={type} {...register} />
      {error ? (
        <StyledParagraph fontColor='red'>{error.root?.message}</StyledParagraph>
      ) : null}
    </fieldset>
  );
};

export default Input;
