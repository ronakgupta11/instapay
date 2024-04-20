import "@/styles/globals.css";
import { WagmiProvider } from 'wagmi' 
import { config } from '../utils/config' 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient() 
export default function App({ Component, pageProps }) {


  return (

<WagmiProvider config={config}> 
<QueryClientProvider client={queryClient}> 
  <Component {...pageProps} />
  </QueryClientProvider>
  </WagmiProvider>
  );
}
