import React from 'react';

const WorkCard = ({ imageSrc, title, year, tag, description }) => {
  return (
    <div className='bg-white shadow-md p-6 rounded-lg flex flex-col md:flex-row'>
      <div className='md:w-1/3'>
        <img src={imageSrc} alt={title} className=' md:w-[246px] md:h-[180px] rounded-md' />
      </div>
      <div className='mt-4 md:mt-0 md:ml-4 text-left'>
        <h2 className='text-3xl font-semibold mb-5'>{title}</h2>
        <div className='text-gray-500 text-sm mb-2'>
          <span className='mr-2 rounded-2xl px-3 py-1 font-bold text-white bg-[#142850]'>{year}</span>
          <span className='mr-2 '>•</span>
          <span className='text-xl ]'>{tag}</span>
        </div>
        <p className='text-[#21243D mt-5'>{description}</p>
      </div>
    </div>
  );
};

export default WorkCard;