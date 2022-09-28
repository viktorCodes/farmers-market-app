import '../styles/globals.css'

import { SessionProvider} from "next-auth/react"
import { RecoilRoot } from 'recoil'
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps: {session, ...pageProps}}) {
  return  (
    <SessionProvider>
      <RecoilRoot>
      
      <Toaster />
    <Component {...pageProps } />
    
    </RecoilRoot>
    </SessionProvider>
  )
  
  
  
 
}

export default MyApp
