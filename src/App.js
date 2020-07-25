import React, { useState } from 'react';
import { Wrapper } from './styles/App';
import Variants from './components/UI/Variants/Variants';

function App() {
  const [variants, setVariants] = useState([]);

  const handleGetVariants = (variantsArray) => {
    setVariants(variantsArray);
  };

  return (
    <Wrapper>
      <h1>Variants</h1>
      <Variants handleGetVariants={handleGetVariants} />
    </Wrapper>
  );
}

export default App;
