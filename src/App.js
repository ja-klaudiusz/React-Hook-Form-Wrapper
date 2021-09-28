import React, { useState } from 'react';
import FormWrapper from './components/Form/FormWrapper';
import SelectWrapper from './components/Form/SelectWrapper';
import InputWrapper from './components/Form/InputWrapper';
import './App.css';

function App() {
  const [submitData, setSubmitData] = useState({});

  const onSubmit = (data) => setSubmitData(data);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <header className="w-3/4 mt-40 mb-20">
        <h1 className="text-4xl text-blue-100">React Hook Form Wrapper</h1>
        <p className="text-xl text-blue-100 pt-4">
          React Hook Form wrapper with register rules written in mongoDB query
          syntax
        </p>
      </header>
      <section className="w-3/4 flex flex-col space-y-10">
        <FormWrapper
          className="w-full grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-0 lg:gap-6 md:gap-4 gap-y-6"
          onSubmit={onSubmit}
          defaultValues={submitData}
          registerRules={{
            plants: true,
            vegetables: {
              plants: 'vegetables',
            },
            fruits: {
              plants: 'fruits',
            },
            herbs: {
              plants: 'herbs',
            },
            fruits_vege_weight: {
              plants: {
                $in: ['vegetables', 'fruits'],
              },
            },
            herbs_weight: {
              plants: 'herbs',
            },
            citrus_count: {
              $and: [
                {
                  plants: 'fruits',
                },
                {
                  $or: [
                    {
                      fruits: 'citrones',
                    },
                    {
                      fruits: 'oranges',
                    },
                  ],
                },
              ],
            },
          }}>
          <SelectWrapper
            name="plants"
            label="Plants"
            placeholder="Select plants"
            rules={{
              required: { value: true, message: 'Plants are required' },
            }}
            options={[
              { label: 'Vegetables', value: 'vegetables' },
              { label: 'Fruits', value: 'fruits' },
              { label: 'Herbs', value: 'herbs' },
            ]}
          />
          <SelectWrapper
            name="vegetables"
            label="Vegetables"
            placeholder="Select vegetables"
            rules={{
              required: { value: true, message: 'Vegetables are required' },
            }}
            options={[
              { label: 'Potatoes', value: 'potatoes' },
              { label: 'Carrots', value: 'carrots' },
              { label: 'Onions', value: 'onions' },
            ]}
          />

          <SelectWrapper
            name="fruits"
            label="Fruits"
            placeholder="Select fruits"
            rules={{
              required: { value: true, message: 'Vegetables are required' },
            }}
            options={[
              { label: 'Apples', value: 'apples' },
              { label: 'Oranges', value: 'oranges' },
              { label: 'Citrones', value: 'citrones' },
            ]}
          />

          <SelectWrapper
            name="herbs"
            label="Herbs"
            placeholder="Select herbs"
            rules={{
              required: { value: true, message: 'Vegetables are required' },
            }}
            options={[
              { label: 'Apples', value: 'apples' },
              { label: 'Oranges', value: 'oranges' },
              { label: 'Citrones', value: 'citrones' },
            ]}
          />

          <InputWrapper
            name="citrus_count"
            label="Citrus count"
            adornment="items"
            type="number"
            rules={{
              required: { value: true, message: 'Citrus count is required' },
              min: {
                value: 1,
                message: 'Min weight items',
              },
              max: {
                value: 1000,
                message: 'Max weight 1000 items',
              },
            }}
          />

          <InputWrapper
            name="fruits_vege_weight"
            label="Fruits or vege weight"
            adornment="kg"
            type="number"
            rules={{
              required: { value: true, message: 'Height is required' },
              min: {
                value: 0,
                message: 'Min weight kg',
              },
              max: {
                value: 1000,
                message: 'Max weight 1000 kg',
              },
            }}
          />

          <InputWrapper
            name="herbs_weight"
            label="Herbs weight"
            adornment="g"
            type="number"
            rules={{
              required: { value: true, message: 'Height is required' },
              min: {
                value: 0,
                message: 'Min weight kg',
              },
              max: {
                value: 5000,
                message: 'Max weight 5000g',
              },
            }}
          />

          <button
            type="submit"
            className="bg-blue-400 text-blue-700 w-1/4 font-bold rounded-lg p-4 hover:bg-blue-500 hover:text-blue-800">
            Submit
          </button>
        </FormWrapper>
        {submitData && (
          <>
            <h3 className="text-green-400 font-bold">Submit data:</h3>
            <code className="text-green-200">
              <pre>{JSON.stringify(submitData, false, '  ')}</pre>
            </code>
          </>
        )}
      </section>
    </div>
  );
}

export default App;
