import { useState, useEffect } from 'react';

import { ICONS } from '../../styles/common/icons';
import {
  SearchContainer,
  WrapSearch,
  SearchIcon,
  Search,
  DeleteIcon,
} from '../../styles/common/SearchField';

const SearchField = ({ placeholderText }: { placeholderText: string }) => {
  const [inputValue, setInputValue] = useState('');
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value;

    setInputValue(newInputValue);
    setShowDeleteIcon(newInputValue.length > 0);
  };

  const handleClearInput = () => {
    setInputValue('');
    setShowDeleteIcon(false);
  };

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const searchField = (event.target as HTMLElement).closest(
        '.search-field'
      );

      if (!searchField) setShowDeleteIcon(false);
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <SearchContainer className="search-field">
      <WrapSearch>
        <SearchIcon src={ICONS.search} />
        <Search
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholderText}
        />
        {showDeleteIcon && (
          <DeleteIcon src={ICONS.delete} onClick={() => handleClearInput()} />
        )}
      </WrapSearch>
    </SearchContainer>
  );
};

export default SearchField;
