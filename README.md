# React Hook Form Wrapper

Extensible React Hook Form wrapper with register rules written in mongoDB query syntax.

#### Sample implementation

```javascript
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
</FormWrapper>
```

Try it on CodeSandbox [React Hook From with React Select](https://codesandbox.io/s/vibrant-blackwell-v0wgj?file=/src/App.js)
