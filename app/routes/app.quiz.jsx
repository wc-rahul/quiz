import { Page, Layout, Card, Text, BlockStack, Button, InlineStack } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function Quiz() {
  return (
    <Page>
      <TitleBar title="Card">
        <button size="medium" variant="primary" >create card</button>
      </TitleBar>
      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="200">
                <Text as="h2" variant="bodyMd">
                  Card
                </Text>
              </BlockStack>
            </Card>

            <BlockStack gap="500" >
              <Card >
                <Button url="/app/create" target="_self">Add Card</Button>
              </Card>
            </BlockStack>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page >
  )
}
