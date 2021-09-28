import React, { useEffect, useState } from 'react';
import Select from '../Select';
import { Controller } from 'react-hook-form';
export default function SelectWrapper({
  options,
  name,
  error,
  value: val,
  label,
  placeholder,
  control,
  unregister,
  rules,
  className,
  isRegister = true,
  onChange: handleChange = () => {},
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
          <Select
            value={value}
            label={label}
            placeholder={placeholder}
            error={error}
            options={options}
            onChange={(value, e) => {
              onChange(value, e);
              handleChange(value, e);
            }}
          />
        )}
        name={name}
        defaultValue={val}
        control={control}
        rules={rules}
      />
    </div>
  ) : null;
}
