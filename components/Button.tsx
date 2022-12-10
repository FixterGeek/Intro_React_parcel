import * as React from 'react';
import Spinner from './Spinner';

export default function Button({
  isDisabled = false,
  isLoading = false,
  children,
}) {
  return (
    <button disabled={isDisabled || isLoading} className='btn'>
      {isLoading ? <Spinner /> : children}
    </button>
  );
}
