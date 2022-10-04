import ProfilePage from "../Components/ProfilePage";
import { PlayIcon, BookmarkIcon } from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faGripVertical } from "@fortawesome/free-solid-svg-icons";



export default function Profile () {

    
    return (
        <>
   

<ProfilePage />
<div className='max-w-6xl mx-5 p-10 xl:mx-auto'>

<div className='grid grid-cols-4'></div>
<hr className='border-gray-500 mt-6'/>



<div className="flex justify-center gap-10 border">
<button className="focus:border-t py-4 border-gray-800 text-sm font-semibold gap-2 flex text-gray-400 focus:text-gray-400"><FontAwesomeIcon icon={faGripVertical} size='lg' />
    POSTS
</button>
<button className="focus:border-t py-4 border-gray-800 text-sm font-semibold gap-2 flex text-gray-400 focus:text-gray-400">
    <PlayIcon className='h-6' />
    VIDEOS
</button>
<button className="focus:border-t py-4 border-gray-800 text-sm font-semibold gap-2 flex text-gray-400 focus:text-gray-400">
    <BookmarkIcon className='h-6' />
    SAVED
</button>
<button className="focus:border-t py-4 border-gray-800 text-sm font-semibold gap-2 flex text-gray-400 focus:text-gray-400">
    <FontAwesomeIcon icon={faAddressCard} />
    TAGGED
</button>
</div>
</div>


    </>
    )
    
}