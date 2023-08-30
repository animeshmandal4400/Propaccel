import React from 'react'
import PostCard from './PostCard'
import WorkCard from './WorkCard'
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs';
import Navbar from './Navbar';
import profileImage from '../assets/profile.png';
import work1Img from '../assets/work1.png'
import work2Img from '../assets/work2.png'
import work3Img from '../assets/work3.png'

const Home = () => {
  return (
    <>
      <div className='w-full h-full font-Heebo text-text-dark'>
            <Navbar/>
            <section className='w-full flex flex-col md:flex-row mx-auto max-w-screen-lg px-4 py-6 md:py-16 items-center md:items-start'>
              <div className='md:w-[60%] flex flex-col md:text-left text-center md:mt-0 mt-4'>
                  <h3 className='md:mt-0 mt-10 text-4xl font-bold md:text-5xl'>
                     Hi, I am Jhon,<br />
                      <span>Creative Technologist</span>
                  </h3>
                  <p className='mt-10 text-lg md:text-xl'>
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
            <div className='flex md:justify-start justify-center items-center mt-10'>
            <button className='w-52 h-12 rounded-sm text-xl text-white bg-btn'>
                Download Resume
            </button>
            </div>
            </div>
            <div className='md:w-[40%] flex justify-center items-center md:mt-0 order-first md:order-last'>
            <img src={profileImage} alt='profile-img' className='md:w-[243px] md:h-[243px] w-40 h-40 rounded-full object-cover' />
          </div>
        </section>


        <section className='w-full mt-16 md:mt-24 bg-bg-light'>
        <div className='max-w-screen-lg mx-auto px-4 py-16'>
          <div className='flex flex-col md:flex-row justify-between mb-8 items-center'>
            <h1 className='text-2xl md:text-left font-semibold mb-4 md:mb-0'>Recent Posts</h1>
            <a className='text-blue-500 hover:underline hidden md:block md:text-left'>View all</a>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                <PostCard
                    title="Making a design system from scratch"
                    date="12 Feb 2020"
                    tag="Design, Pattern"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue nisl eget libero fringilla, vitae vulputate purus euismod."
                />
                <PostCard
                    title="Exploring Graphic Design"
                    date="12 Feb 2020"
                    tag="Figma, Icon, Design"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue nisl eget libero fringilla, vitae vulputate purus euismod."
                />
                <PostCard
                    title="Exploring Graphic Design"
                    date="12 Feb 2020"
                    tag="Figma, Icon, Design"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue nisl eget libero fringilla, vitae vulputate purus euismod."
                />
          </div>
        </div>
      </section>


        <section className='w-full py-16 md:py-32'>
        <div className='max-w-screen-lg mx-auto px-4'> 
                <h2 className='text-2xl md:text-left mb-8 font-semibold'>Featured Works</h2>
            <div className='max-w-[1280px]'>
            <WorkCard
                imageSrc={work1Img}
                title='Designing Dashboards'
                year='2022'
                tag='Dashboard'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue nisl eget libero fringilla, vitae vulputate purus euismod.'
              />
              <WorkCard
                imageSrc={work2Img}
                title='Vibrant Portraits of 2020'
                year='2022'
                tag='Design'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue nisl eget libero fringilla, vitae vulputate purus euismod.'
              />
              <WorkCard
                imageSrc={work3Img}
                title='36 Days of Malayalam type'
                year='2022'
                tag='Typography'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue nisl eget libero fringilla, vitae vulputate purus euismod.'
              />
            </div>
            </div>
        </section>

        <footer className='w-full h-[182px] text-center flex flex-col justify-center items-center gap-5'>
            <div className='flex gap-8 text-4xl '>
                <a><BsFacebook /></a>
                <a><BsInstagram /></a>
                <a><BsTwitter /></a>
                <a><BsLinkedin /></a>
            </div>
            <div>
                <h1 className='text-sm'>Copyright ©2020 All rights reserved </h1>
            </div>
        </footer>

        </div>
    </>
  )
}

export default Home
