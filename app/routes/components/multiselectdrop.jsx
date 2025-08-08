import {LegacyStack, Tag, Autocomplete} from '@shopify/polaris';
import {useState, useCallback, useMemo} from 'react';

export default function MultiAutocompleteExample({propoptions, propplaceholder}) {
  const deselectedOptions = useMemo(
    () => propoptions || [
      {value: 'value',label: 'label'},
      {value: 'valuetwo',label: 'labeltwo'},
      {value: 'valuethree',label: 'labelthree'}
    ],
    [],
  );
  // const [selectedOptions, setSelectedOptions] = useState(['rustic']);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState(deselectedOptions);

  const updateText = useCallback(
    (value) => {
      setInputValue(value);

      if (value === '') {
        setOptions(deselectedOptions);
        return;
      }

      const filterRegex = new RegExp(value, 'i');
      const resultOptions = deselectedOptions.filter((option) =>
        {
          if(option?.searchField){
            return option.searchField.match(filterRegex)
          }
          else{
            return option.label.match(filterRegex)
          }
        });

      setOptions(resultOptions);
    },
    [deselectedOptions],
  );

  const removeTag = useCallback(
    (tag) => () => {
      const options = [...selectedOptions];
      options.splice(options.indexOf(tag), 1);
      setSelectedOptions(options);
    },
    [selectedOptions],
  );

  const verticalContentMarkup =
    selectedOptions.length > 0 ? (
      <LegacyStack spacing="extraTight" alignment="center">
        {selectedOptions.map((option) => {
          let tagLabel = '';
          tagLabel = option.replace('_', ' ');
          tagLabel = titleCase(tagLabel);
          return (
            <Tag key={`option${option}`} onRemove={removeTag(option)}>
              {tagLabel}
            </Tag>
          );
        })}
      </LegacyStack>
    ) : null;

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      label="Tags"
      value={inputValue}
      placeholder={propplaceholder || 'placeholder'}
      verticalContent={verticalContentMarkup}
      autoComplete="off"
    />
  );

  return (
    <div style={{height: '325px'}}>
      <Autocomplete
        allowMultiple
        options={options}
        selected={selectedOptions}
        textField={textField}
        onSelect={setSelectedOptions}
        listTitle="Suggested Tags"
      />
    </div>
  );

  function titleCase(string) {
    return string
      .toLowerCase()
      .split(' ')
      .map((word) => word.replace(word[0], word[0].toUpperCase()))
      .join('');
  }
}
