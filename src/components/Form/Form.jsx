import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormStyled, Button, Text, Input } from './Form.styled';

export const Form = ({ setSearchParams }) => {
  const [searchValue, setSearchValue] = useState('');

  const onChange = evt => {
    return setSearchValue(evt.target.value);
  };

  const onSubmitForm = evt => {
    evt.preventDefault();
    if (searchValue === '') {
      return;
    }
    return setSearchParams({ query: searchValue.trim() });
  };

  return (
    <div>
      <FormStyled onSubmit={onSubmitForm}>
        <Input
          type="text"
          name="search"
          value={searchValue}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={onChange}
        />
        <Button type="submit">
          <Text>Search</Text>
        </Button>
      </FormStyled>
    </div>
  );
};

Form.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
};
