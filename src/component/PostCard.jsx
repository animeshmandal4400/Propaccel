import React from 'react';

const PostCard = ({ title, date, tag, content }) => {
  return (
    <div className=" bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-2 text-start">{title}</h2>
      <div className="flex items-center text-gray-500 text-sm my-4">
        <span className="mr-2">{date}</span>
        <span className="mr-2">|</span>
        <span className="uppercase">{tag}</span>
      </div>
      <p className=" text-start text-md text-gray-700">{content}</p>
    </div>
  );
};

export default PostCard;