import PropTypes from 'prop-types';
import { FormStyled, Button, Text, Input } from './Form.styled';

export const Form = ({ onChange, onSubmitForm, searchValue }) => {
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
  onChange: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};
