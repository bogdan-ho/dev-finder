/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import styles from './Search.module.scss';
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';
import Button from '../Button/Button';

interface SearchProps {
  hasError: boolean,
  onSubmit: (text: string) => void,
}

const Search = ({ hasError, onSubmit }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const text = inputRef.current?.value || '';

    if (text) {
      onSubmit(text);
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search} data-testid="Search">
        <label htmlFor="search">
          <SearchIcon />
          <input
            ref={inputRef}
            type="text"
            className={styles.textField}
            id="search"
            name="username"
            placeholder="Search GitHub username..."
          />
        </label>

        {hasError
          ? (
            <div className={styles.error}>
              No results
            </div>
          )
          : null}
        <Button>Search</Button>
      </div>
    </form>

  );
};

export default Search;
