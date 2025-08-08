import { InlineGrid, Layout, Card, Text, BlockStack, Button, InlineStack } from "@shopify/polaris";
import { PlusIcon, DeleteIcon } from '@shopify/polaris-icons';
import Textinput from "./textinput";
import { useCallback, useState, useRef } from "react";
import ButtonSegmented from "./segmentButton";
export default function QaBox({ qaBoxIndex, removeQuestion }) {
  const [answerIndex, setAnswerIndex] = useState([{ id: 10010 }]);
  const replictData = useRef([]);
  const addAnswer = (index = 0) => {
    setAnswerIndex((prevVal) => [...prevVal, { id: index }]);
    replictData.current = [...replictData.current, { id: index }];
  }
  const removeAnswer = (id) => {
    setAnswerIndex(prevVal => prevVal.filter((val) => val.id !== id));
    replictData.current = replictData.current.filter((val) => val.id !== id);
  }
  const handleAnswer = (newVal, id) => {
    replictData.current = answerIndex.map((val) => {
      if (val.id == id) {
        val.handle = newVal;
      }
      return val;
    });
  }

  console.log(replictData.current);


  const Placeholder = ({ height = 'auto', width = 'auto', htmlContent = <></> }) => {
    return (
      <div
        style={{
          height: height,
          width: width,
        }}
      >
        {htmlContent}
      </div>
    );
  };
  console.log(answerIndex)

  return (
    <>
      <Card>

        <BlockStack gap="400">
          <BlockStack gap="100">
            <Textinput inputName={"Qe"} />
            <Text>Alpha</Text>
            {answerIndex.map((val, index) => <InlineStack direction="row" gap={200} wrap={false}>
              <Placeholder width="100%" htmlContent={<Textinput indexInput={val} setAnswerIndex={handleAnswer} id={val.id} handle={replictData.current[index]?.handle} />} />
              {
                (index !== 0) ? (<Placeholder width="auto" htmlContent={<Button variant="secondary" icon={DeleteIcon} onClick={() => removeAnswer(val.id)}></Button>} />)
                  : ('')
              }
            </InlineStack>)}
          </BlockStack>
          <InlineStack align="space-between">
            <ButtonSegmented buttons={2} buttonValues={['Single', 'Multiple']} />
            <ButtonSegmented buttons={2} buttonValues={['required', 'skippable']} />
          </InlineStack>
          <InlineStack align="start" gap={200}>
            <Button variant="secondary" icon={PlusIcon} onClick={() => addAnswer(answerIndex[answerIndex.length - 1].id + 1)}>Alpha</Button>
            {
              (qaBoxIndex !== 0) ? (<Button variant="secondary" icon={DeleteIcon} onClick={() => removeQuestion(qaBoxIndex)}>Qe</Button>)
                : ('')
            }

          </InlineStack>
        </BlockStack>
      </Card>
    </>
  )
}
