import Image from "next/image";
const Feed=()=>{
    return (
        <div>
        <Image
            src='/assets/images/main-page.png'
            alt='logo'
            width={600}
            height={600}
            className='object-contain pt-20'
            />
        </div>
    )
}
export default Feed