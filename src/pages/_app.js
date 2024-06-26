import "@/styles/globals.css";
import { WagmiProvider } from 'wagmi' 
import { config } from '../utils/config' 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from "@/components/Layout";
const queryClient = new QueryClient() 
export default function App({ Component, pageProps }) {


  return (

<WagmiProvider config={config}> 
<QueryClientProvider client={queryClient}> 
<Layout>

  <Component {...pageProps} />
</Layout>
  </QueryClientProvider>
  </WagmiProvider>
  );
}
