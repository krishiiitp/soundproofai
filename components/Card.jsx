import Image from 'next/image'
const Card = ({url,title,para}) => {
    return (
      <div className="w-80 bg-gray-100 rounded-xl shadow-xl">
        <div className="h-60 grid place-items-center">
          <div className="p-1.5 rounded-full">
            <div className="relative h-40 w-40 overflow-hidden">
            <Image
            src={url}
            alt='logo'
            width={400}
            height={400}
            className='object-contain pt-19'
            />
            </div>
          </div>
        </div>
        <div className="text-white text-center bg-gray-700 p-5 rounded-xl">
          <div className="text-2xl font-semibold">{title}</div>
          <div className="text-stone-300 mb-2">
            {para}
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
