import { Page, Layout, Card, Text, BlockStack, Button, InlineStack } from "@shopify/polaris";
import {PlusIcon} from '@shopify/polaris-icons';
import QaBox from "./components/qaBox";
import { useState, useRef } from "react";

export default function QuizCreate() {
  const indexRef = useRef(34);
  const [question, setQuestion] = useState([<QaBox qaBoxIndex={0}/>]);
  const addQuestion = (qaBox) => {
    indexRef.current += 1;
    setQuestion(preVal => [...preVal, qaBox]);
    console.log(indexRef.current)
  }
  const removeQuestion = (id) => {
    setQuestion(prevVal => prevVal.filter((val) => val.props.qaBoxIndex !== id));
  }
  return (
    <>
      <Page>
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="500" align="end">
                <InlineStack align="end">
                  <Button variant="primary" icon={PlusIcon} onClick={() => addQuestion(<QaBox qaBoxIndex={`${indexRef.current}`} removeQuestion={removeQuestion}/>)}>Add Qe</Button>
                </InlineStack>
                {question.map((val,index) => val)}
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </>
  );
}
