
import { getProviders, signIn as SignIntoProvider} from "next-auth/react"

import Header from "../../Components/Header"



// Browser...
function signIn({ providers }) {

  
  return (
    
    <>
        <Header />
        <div className='flex flex-col items-center justify-center min-h-screen py-6-mt-56 px-14 text-center'>
        <div>

            <h1 className='font-lg italic text-green-700bold'>THE FARMERS MARKET</h1>
           <p className="font-xs italic"> Welcome to the Farmers market where farmers and consumers interact on a daily basis</p>

        <div className='mt-40'>
        {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className='p-3 bg-green-500 rounded-lg text-white' onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/'})}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
        </div>
        </div>

        <div className="flex items-center justify-center w-full my-5 space-x-2">
              <div className="h-[0.8px] w-full bg-slate-400" />
              <div className="text-sm font-semibold text-center text-red-900">
                OR
              </div>
              <div className="h-[0.8px] w-full bg-slate-400" />
            </div>

            
            
        
      
    
          </div>
    
    </>
    
  )
}

//Server
export async function getServerSideProps() {

    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }

}

export default signIn