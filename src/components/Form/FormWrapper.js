import React, { useEffect, useState } from 'react';
import { validateRule } from './utils';
import { useForm } from 'react-hook-form';

export default function FormWrapper({
  defaultValues,
  children,
  onSubmit,
  registerRules,
  ...rest
}) {
  const [watchState, setWatchState] = useState({});
  const methods = useForm();

  const { handleSubmit, control, watch, formState, unregister } = methods;

  useEffect(() => {
    const subscription = watch((values, { name, type }) => {
      setWatchState(values);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  const checkVisible = (name) => {
    const rule = registerRules?.[name];
    if (typeof rule === 'undefined') {
      return true;
    } else if (typeof rule === 'boolean') {
      return registerRules[name];
    } else if (typeof rule === 'object') {
      const formStateData = { ...defaultValues, ...watchState };
      let valuesObj = {};
      for (let field in formStateData) {
        if (typeof formStateData[field] !== 'object') {
          valuesObj[field] = formStateData[field];
        }
        if (typeof formStateData[field] === 'object') {
          valuesObj[field] = formStateData[field].value || null;
        }
      }
      const result = validateRule(valuesObj, registerRules[name]);

      return result;
    }
    return true;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...rest}>
      {React.Children.map(children, (child) => {
        const name = child.props.name;
        if (!name) {
          return child;
        }
        const isRegister = checkVisible(name);
        const error =
          isRegister && formState.errors?.[name]
            ? formState.errors[name]
            : undefined;

        return React.createElement(child.type, {
          ...{
            ...child.props,
            control,
            error,
            isRegister,
            unregister,
            key: name,
            value: defaultValues?.[name],
          },
        });
      })}
    </form>
  );
}
