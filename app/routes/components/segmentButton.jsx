import {ButtonGroup, Button} from '@shopify/polaris';
import {useCallback, useState} from 'react';

export default function ButtonSegmented({buttons, buttonValues}) {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const buttonArr = [];
  for(let i = 0; i < buttons; i++){
    buttonArr.push(i);
  }

  const handleButtonClick = useCallback(
    (index) => {
      if (activeButtonIndex === index) return;
      setActiveButtonIndex(index);
    },
    [activeButtonIndex],
  );

  return (
    <ButtonGroup variant="segmented">
      {buttonArr.map((_,index) => <Button
        pressed={activeButtonIndex === index}
        onClick={() => handleButtonClick(index)}
      >
        {buttonValues[index]}
      </Button>)}
    </ButtonGroup>
  );
};

