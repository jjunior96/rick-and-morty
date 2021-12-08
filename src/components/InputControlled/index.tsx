/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, Controller } from 'react-hook-form';

import Input, { InputProps } from 'components/Input';

import * as S from './styles';

type InputControlledProps = {
  control: Control<any>;
} & InputProps;

const InputControlled = ({ name, control, ...rest }: InputControlledProps) => {
  return (
    <S.Wrapper>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input name={name} onChange={onChange} value={value} {...rest} />
        )}
        name={name}
      />
    </S.Wrapper>
  );
};

export default InputControlled;
