import React from 'react';

import { Clear } from './styled';

const ClearButton = ({ onClick }: { onClick: () => void }) => {
  return <Clear onClick={onClick}>Clear</Clear>;
};

export default ClearButton;
