import React, { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import {
  AddFieldButton,
  ButtonsDiv,
  InputsDiv,
  OptionNameInput,
  OptionValuesInput,
  RemoveFieldButton,
  VariantsDiv,
  VariantsFieldsDiv,
  VariantsH2,
} from '../../../styles/components/UI/Variants/Variants';

const Variants = () => {
  const [optionFields, setOptionFields] = useState([
    { optionName: '', optionValues: '' },
  ]);
  const [optionValuesArray, setOptionValuesArray] = useState([[]]);
  const [combinedValues, setCombinedValues] = useState([]);
  const [modifiableOptionValues, setModifiableValues] = useState([]);
  const [combinedValueLength, setCombinedValuesLength] = useState(0);

  const permute = (input) => {
    const out = [];

    (function permute_r(input, current) {
      if (input.length === 0) {
        out.push(current);
        return;
      }

      const next = input.slice(1);

      for (let i = 0, n = input[0].length; i != n; ++i) {
        permute_r(next, current.concat([input[0][i]]));
      }
    }(input, []));

    return out;
  };

  useEffect(() => {
    const combinatedValuesResult = permute(optionValuesArray);

    setCombinedValues(combinatedValuesResult);
    // console.log('combinatedValuesResult:', combinatedValuesResult);
  }, [optionValuesArray]);

  useEffect(() => {
    const modifiableOptionValuesTemp = [...modifiableOptionValues];

    modifiableOptionValuesTemp.push({
      active: true,
      varientValues: [],
      prices: {
        price: 25.0,
        compareTo: 30.0,
      },
      inventory: {
        sku: '',
        barcode: '',
      },
    });
  }, [combinedValues.length]);

  const handleAddFields = () => {
    const values = [...optionFields];
    const valuesArray = [...optionValuesArray];
    values.push({ optionName: '', optionValues: '' });
    valuesArray.push([]);
    setOptionFields(values);
    setOptionValuesArray(valuesArray);
  };

  const handleRemoveFields = (index) => {
    const values = [...optionFields];
    const valuesArray = [...optionValuesArray];
    values.splice(index, 1);
    valuesArray.splice(index, 1);
    setOptionFields(values);
    setOptionValuesArray(valuesArray);
  };

  const handleInputChange = (index, e) => {
    const values = [...optionFields];
    if (e.target.name === 'optionName') {
      values[index].optionName = e.target.value;
    } else {
      values[index].optionValues = e.target.value;
    }
    setOptionFields(values);
  };

  const variantValuesToArray = (index) => {
    const valuesArray = [...optionValuesArray];
    const tempValues = optionFields[index].optionValues.split(',');
    tempValues.map((tag, i) => {
      tempValues[i] = tempValues[i].trim();
    });
    valuesArray[index] = tempValues;
    setOptionValuesArray(valuesArray);
  };

  return (
    <>
      <VariantsDiv>
        <VariantsH2>Extra Information</VariantsH2>
        <VariantsFieldsDiv>
          {optionFields.length > 0 && (
            <>
              {optionFields.map((inputField, index) => (
                <InputsDiv key={index}>
                  <OptionNameInput
                    onChange={(e) => {
                      handleInputChange(index, e);
                    }}
                    value={inputField.title}
                    placeholder='Option name'
                    name='optionName'
                  />
                  <OptionValuesInput
                    onChange={(e) => {
                      handleInputChange(index, e);
                      variantValuesToArray(index);
                    }}
                    value={inputField.title}
                    placeholder='Option values'
                    name='optionValues'
                    style={{
                      marginLeft: '5px',
                    }}
                  />
                  <ButtonsDiv>
                    <AddFieldButton onClick={() => handleAddFields()}>
                      <FaPlus />
                    </AddFieldButton>
                    {optionFields.length > 1 && (
                      <RemoveFieldButton onClick={() => handleRemoveFields()}>
                        <FaMinus />
                      </RemoveFieldButton>
                    )}
                  </ButtonsDiv>
                </InputsDiv>
              ))}
            </>
          )}
        </VariantsFieldsDiv>
      </VariantsDiv>
      <p>{combinedValues}</p>
    </>
  );
};

export default Variants;
