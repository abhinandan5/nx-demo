import bellIconURl from "../../assets/bell.svg"
import userURL from "../../assets/user.svg"
import dropDownURL from "../../assets/downOutlined.svg"

const SharedHeader = () => {
return (
  <>
    <div className='flex justify-between items-center bg-white px-6 py-4 border-b border-gray-200'> 

      <div className="flex items-center gap-2">
        <div className="w-12 h-12 flex items-center justify-center">
          <img src="/logo.png" alt="CARS24 logo" className="w-full h-full object-contain" />
        </div>
        <div className='text-gray-900 text-xl text-font-bold' >
          Auction Panel
        </div>    
      </div>

      <div className="flex items-center gap-6">
        <div className="bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg">
          <div className='flex items-center gap-2'>
            <span className="font-bold text-gray-900">My Daily Trends</span>
            <span className="text-sm text-gray-500">Updated just now</span>
          </div>

          <div className="flex gap-6 mt-2 text-sm text-gray-600">
            <div>
              Dealers Participated: <span className="font-semibold">8/10</span>
            </div>
            <div>
              Dealers Won: <span className="font-semibold">3/8</span>
            </div>
          </div>      
        </div>
      </div>

      <div className='flex items-center gap-4'> 

        <div className="relative">
          <div className="w-6 h-6 flex items-center justify-center">
            <img src={bellIconURl} alt="notification" className="bg-cover" />
          </div>
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-lg bg-red-500 text-xs text-white">
            16
          </span>
        </div>

        <div className="w-6 h-6 flex items-center justify-center">
          <img src={userURL} alt="user" className="bg-cover" />
        </div>

        <div className="w-6 h-6 flex items-center justify-center">
          <img src={dropDownURL} className="h-4 w-4"/>
        </div>

      </div>    
   
    </div>
</>
)
}

export default SharedHeader