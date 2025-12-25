
function RiceSkeleton() {
  return (
    <div className="bg-green-400">
      <div className="w-full bg-white">
        <div className="flex overflow-hidden">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="w-1/2 px-1 md:w-1/3 lg:w-1/4">
              <div className="flex items-center flex-col md:flex-row py-1 bg-gray-300 shadow-sm rounded relative animate-pulse">
                {/* Image placeholder */}
                <div className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded bg-gray-300"></div>
                
                <div className="text-center px-2 w-full">
                  {/* Text placeholders */}
                  <div className="h-3 bg-gray-300 rounded-full mx-auto mb-2 w-3/4"></div>
                  <div className="h-3 bg-gray-300 rounded-full mx-auto mt-1 w-1/2"></div>
                </div>
                
                {/* Stock status placeholder */}
                <div className="absolute top-0 right-1 w-10 h-3 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


function MayyounaiseSkeleton() {
  return (
    <div className="py-8 px-[80px] max-sm:px-4 grid grid-cols-3 overflow-hidden">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center flex-col md:flex-row py-2 mx-1 shadow-sm rounded relative animate-pulse bg-gray-900"
        >
          <div className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded bg-gray-300" />
          <div className="text-center px-2 flex flex-col gap-2 items-center  mt-5 sm:mt-0">
            <div className="h-2 w-20 md:h-2 md:w-30 bg-gray-300 rounded" />
            <div className="h-3 w-14 bg-gray-300 rounded" />
          </div>
              {/* <div className="h-2 w-14 bg-gray-300 rounded absolute top-0 right-1" />  */}
              {/* out of stock  */}
        </div>
      ))}
    </div>
  );
}

export { RiceSkeleton, MayyounaiseSkeleton };