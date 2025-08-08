import { Page, Layout, Card, Text, BlockStack, Button, InlineStack } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import SelectProduct from "./components/selectproduct";
import { authenticate } from "../shopify.server";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ request }) => {
  const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
    `#graphql
    query GetProducts {
      products(first: 10) {
        nodes {
          id
          title
          featuredMedia{
            preview{
              image{
                url
              }
            }
          }
        }
      }
    }`,
  );

  const data = await response.json();
  return data;
};

export default function Quiz() {
  const {data, extensions, headers} = useLoaderData();
  console.log(data);
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
              <Card gap="500">
                <SelectProduct products={data.products.nodes}/>
              </Card>
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
