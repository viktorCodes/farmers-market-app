
import {CogIcon} from "@heroicons/react/outline";
import Header from "./Header";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
    
    const {data: session} = useSession();
     return (

        <>  
        <Header />  
          <div className='max-w-6xl mx-5 p-10 xl:mx-auto'>
            
            <div className='grid grid-cols-4 gap-4'>
                <div className='flex justify-center'>
                    <div>
                        <img src={session.user.image} alt='avatar' className='w-36 h-36 rounded-full border p-[2px]'/>

                    </div>

                </div>

                <div className='col-span-2 '>
                    <span className='text-gray-700 text-2xl mr-4'>{session?.user?.username}</span>
                    <div className='cursor-pointer inline text-sm text-gray-700 font-semibold p-1 px-2 border border-gray-200 rounded mr-4'>Edit Profile</div>
                      <CogIcon className='cursor-pointer h-6 inline'/>
                       <div className='mt-4 flex'>
                         <div><span className='font-semibold '>200</span> Posts</div>
                         <div className='ml-4'><span className='font-semibold '>200</span> Followers</div>
                         <div className='ml-4'><span className='font-semibold '>200</span> Following</div>

                       </div>
                         
                         <div>
                             <div className='pt-3'>
                                <span className='text-lg font-semibold text-gray-700'>About</span>
                             </div>

                             <div className='pt-3'>
                                 <p className='text-base text-blue-700'> welcome to my page

                                 </p>
                                 <p className='text-base font-medium text-blue-700 mr-2'> welcome to my page

                                 </p>
                             </div>


                         </div>




                </div>
                  
               

            </div>

          </div>
            </>
           
          


     )
    
}

export default ProfilePage