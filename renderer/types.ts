export type PageProps = {};
// The `pageContext` that are available in both on the server-side and browser-side
export type PageContext = {
  Page: (pageProps: PageProps) => React.ReactElement;
  pageProps: PageProps;
  urlPathname: string;
  documentProps?: {
    title?: string;
    description?: string;
    image?: string;
  };
};

export interface Recipe {
  id: number
  name: string
  image:string
  description: string
  ingredients: string[]
  steps: string[]
  tags: string[]
}
