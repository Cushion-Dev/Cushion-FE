import styled from 'styled-components';

import { TYPO } from '../../styles/typo';
import { semantic } from '../../styles/semantic';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  flex: 1;
`;

const WrapSearch = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  flex: 1;

  width: 100%;

  gap: 1rem;
  padding: 0.625rem 0.5rem;
`;

const SearchIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

const Search = styled.input`
  width: 100%;

  flex: 1;
  flex-shrink: 0;
  padding-left: 0.625rem;

  width: 17.63156rem;
  height: 2.55769rem;

  border: none;
  border-radius: 0.5rem;

  ${TYPO.body3}
  color: ${semantic.light.object.solid.hero};

  border: none;
  outline: none;

  caret-color: ${semantic.light.accent.solid.normal};

  &:hover {
    background: #eeeeeb;
  }

  &::placeholder {
    color: ${semantic.light.object.transparent.assistive};
  }
`;

const DeleteIcon = styled.img`
  display: flex;
  align-items: center;

  padding: 0.125rem;
  cursor: pointer;
`;

export { SearchContainer, WrapSearch, SearchIcon, Search, DeleteIcon };
