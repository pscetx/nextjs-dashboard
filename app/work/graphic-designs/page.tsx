import Image from 'next/image';

export default function Page() {
  return (
    <div className="p-6 w-full">
      <div className='flex flex-col items-center justify-center text-gray-600 text-lg space-y-6 md:space-y-10'>
        <h1 className='text-4xl md:text-6xl text-gray-800'>Graphic designs</h1>
        <p className="mt-4 text-xl text-center max-w-3xl mx-auto italic">
          Designs and arts created using Adobe Photoshop, Illustrator & InDesign. <br />
        </p>

        <Image className='rounded-xl' src="/gd-1.png" width={1000} height={50} alt="Designs #1" priority />
        <Image className='rounded-xl' src="/gd-2.png" width={1000} height={50} alt="Designs #2" priority />
        <Image className='rounded-xl' src="/gd-3.png" width={1000} height={50} alt="Designs #3" priority />
      </div>
    </div>
  );
}
