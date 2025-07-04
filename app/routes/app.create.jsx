import {
  Page,
  Layout,
  Card,
  BlockStack,
  Button,
  InlineStack,
} from "@shopify/polaris";
import { PlusIcon } from "@shopify/polaris-icons";
import QaBox from "./components/qaBox";
import { useState, useRef } from "react";

export default function QuizCreate() {
  const indexRef = useRef(0);
  const [questions, setQuestions] = useState([{ id: 0 }]);

  const addQuestion = () => {
    indexRef.current += 1;
    setQuestions((prev) => [...prev, { id: indexRef.current }]);
  };

  const removeQuestion = (id) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="500" align="end">
              <InlineStack align="end">
                <Button
                  variant="primary"
                  icon={PlusIcon}
                  onClick={addQuestion}
                >
                  Qe
                </Button>
              </InlineStack>

              {questions.map((q) => (
                <QaBox
                  key={q.id}
                  qaBoxIndex={q.id}
                  removeQuestion={removeQuestion}
                />
              ))}
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
