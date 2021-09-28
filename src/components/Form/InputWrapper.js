import React, { useEffect, useState } from 'react';
import Input from '../Input';
import { Controller } from 'react-hook-form';
export default function SelectWrapper({
  name,
  error,
  value: val,
  label,
  control,
  unregister,
  rules,
  isRegister = true,
  className,
  ...rest
}) {
  const [visible, setVisible] = useState(isRegister);

  useEffect(() => {
    setVisible((prevValue) => {
      prevValue !== isRegister && !isRegister && unregister(name);
      return isRegister;
    });
  }, [isRegister]);

  return visible && name ? (
    <div className={className}>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Input
            error={error}
            placeholder={label}
            onChange={onChange}
            value={value || ''}
            {...rest}
          />
        )}
        name={name}
        defaultValue={val || ''}
        control={control}
        rules={rules}
      />
    </div>
  ) : null;
}
