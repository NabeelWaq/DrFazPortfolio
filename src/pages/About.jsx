import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // gsap.from()
  },[])
  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
    <div className="w-full mt-[150px] lg:mt-0 min-h-[120vh] md:min-h-screen sm:h-[115vh] lg:h-[100vh] overflow-hidden bg-fixed bg-[url('/aboutpage2.webp')] contrast-125 relative bg-no-repeat bg-cover">
      <div className="bg-secondary sm:pt-12 relative w-full min-h-full bg-opacity-70 flex flex-col lg:flex-row py-20 lg:py-0 px-2 sm:px-8 md:px-14  items-center justify-center sm:justify-end gap-6 sm:gap-0">
        <div className="flex flex-col gap-4 items-center sm:items-start px-5 sm:px-0 justify-center w-[100%] lg:w-[50%] min-h-full">
          <h2 className='text-center sm:text-left text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-tritary font-bold'><span className='text-background'>Dr.</span> Faz Mehmood</h2>
          <div className="flex flex-col gap-3 items-start justify-center">
            <p className='text-center sm:text-left text-sm sm:text-base text-background'>Dr. Faz Mehmood is a multilingual diversity expert and global business strategist with 40 years of experience across Fortune 100 companies and the medical field. His unique blend of corporate leadership, medical expertise, and entrepreneurship enables him to deliver transformative strategies that drive success. Passionate about empowering leaders and professionals, Dr. Faz helps individuals unlock their full potential through strategic insight and a human-centered approach.</p>
            <p className='text-center sm:text-left text-sm sm:text-base text-background'>As the founder of Learn 2 Grow Rich and Worldwide Success Academy, he specializes in leadership, communication, and human behavior, offering advanced training that fosters personal and organizational breakthroughs. His ability to diagnose challenges and craft actionable solutions has made him a trusted mentor for businesses and individuals seeking sustainable growth.</p>
            <p className='text-center sm:text-left text-sm sm:text-base text-background'>An Executive Director with the John Maxwell Company, Dr. Faz captivates audiences with his engaging storytelling, humor, and practical insights. His mission is to inspire success worldwide, from Karachi to Pennsylvania. Beyond his professional achievements, he enjoys gardening, knitting, and re-reading Think and Grow Rich, embodying his belief that vision, persistence, and decisive action lead to lasting success.</p>
          </div>
        
        </div>
        <div className="w-[100%] lg:w-[50%] relative h-[500px] md:h-[550px] hidden sm:flex justify-center items-center lg:h-[800px] xl:h-[900px]">
          <img src="/aboutpage1.webp" className='w-full h-full object-cover' alt="" />
        </div>
      </div>
      </div>
      {/* Section 2 */}
      <div className="w-full min-h-[120vh] bg-[url('/aboutnew.webp')] contrast-150 relative bg-cover bg-center flex justify-between items-center">
      <div className="w-full min-h-full bg-primary absolute top-0 left-0 bg-opacity-50 z-10"></div>
      <div className="w-full min-h-[120vh] flex items-center justify-center gap-6 flex-col relative z-[18] bg-primary bg-opacity-50 py-10 md:py-0">
        <h2 className='text-center text-4xl sm:text-4xl md:text-5xl text-background font-semibold tracking-wider [text-shadow:_0_4px_2px_#000]'>A Journey of<br />
        <span className='text-tritary '>Early Growth</span></h2>
        <div className="flex flex-col w-full md:w-[50%] px-4 md:px-0 text-center justify-center items-center gap-4 text-background">
          <p className='text-sm md:text-lg'>Dr. Faz Mehmood’s journey embodies perseverance, growth, and excellence. With over 20 years in the medical field and another two decades in business and leadership, he seamlessly transitioned from healthcare to the dynamic world of entrepreneurship. This diverse experience shaped his passion for leadership and personal development, reinforcing his belief in lifelong learning as the key to success.</p>
          <p className='text-sm md:text-lg'>As an International John Maxwell Team Executive Director and Distinguished Toastmaster (DTM), Dr. Faz is dedicated to empowering others through transformational coaching and leadership training. His mission is to help individuals overcome obstacles, unlock their potential, and achieve remarkable success. Whether mentoring aspiring leaders or guiding seasoned professionals, he proves that with determination and the right mindset, anything is possible.</p>
        </div>
      </div>
      </div>
      {/* Section 3 */}
      <div className="w-full min-h-screen bg-background flex flex-col md:flex-row justify-between items-center px-5 py-12 md:px-8 md:pl-16 gap-8 md:gap-0">
        <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 justify-center items-center md:items-start">
          <h2 className='text-center md:text-start text-4xl sm:text-4xl md:text-5xl text-white font-bold tracking-wider [text-shadow:_0_2px_8px_#000000]'>
          From Medicine to <span className='text-tritary '>Leadership</span>
          </h2>
          <p className='text-sm md:text-lg text-center md:text-start'>Dr. Faz Mehmood’s journey from medicine to leadership is a testament to passion, purpose, and transformation. After earning his MD in Health Sciences and serving as a medical doctor for over 20 years, he discovered his true calling—helping people thrive beyond physical health in their personal and professional lives. Pursuing an MBA in Global Management, he combined medical expertise with business acumen to develop a holistic leadership approach. Now, as President of Learn 2 Grow Rich and Worldwide Success Academy, he leverages his diverse background to inspire and mentor leaders worldwide.</p>
          <p className='text-sm md:text-lg text-center md:text-start'>With over a decade of leadership training across four continents, Dr. Faz is a certified John Maxwell Coach, Teacher, Trainer, and International Speaker. He has led more than 30 full-day workshops and delivered 100+ keynote speeches, both in-person and virtually. His programs focus on leadership development, communication, and business growth, equipping individuals and organizations with the tools to excel. Through his engaging and impactful training, Dr. Faz proves that leadership isn’t just a role—it’s a way of life.

</p>
        </div>
        <div className="w-full md:w-[50%] min-h-full flex justify-center items-center">
          <img src="/aboutpage4.webp" className='w-[320px] md:w-[350px] md:h-[500px] rounded-md h-[450px] object-cover object-center shadow-3xl shadow-thrice' alt="" />
        </div>
      </div>
      {/* Section 4 */}
      <div className="w-full min-h-screen flex flex-col md:flex-row justify-center md:justify-end items-center px-5 py-16 md:px-8 bg-[url('/aboutpage7.webp')] bg-fixed bg-no-repeat bg-left mt-20 md:bg-top md:py-28 bg-cover">
      <div className="w-full md:w-[50%] min-h-full flex flex-col gap-5">
      <h2 className='text-center md:text-start text-4xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight [text-shadow:_0_2px_8px_#000000]'>
          Mentor And<span className='text-tritary '> Leader</span>
          </h2>
          <p className='text-sm md:text-lg text-background text-center md:text-start'>Dr. Faz Mehmood is more than a mentor—he is a visionary leader dedicated to empowering others to reach their full potential. With a 40-year career spanning Fortune 100 companies, entrepreneurship, and the medical field, he brings invaluable experience and strategic insight to leadership. His diverse background enables him to guide professionals across industries, equipping them with the mindset and tools needed for success.</p>
          <p className='text-sm md:text-lg text-background text-center md:text-start'>As a leader, Dr. Faz blends strategy with human connection, tailoring solutions that drive lasting results. Holding a Doctorate and an MBA in Global Management, he is a lifelong student of leadership and personal development. His mantra, “Yes YOU Can!”, resonates in every interaction, inspiring those he mentors to embrace challenges and push beyond their limits.</p>
          <p className='text-sm md:text-lg text-background text-center md:text-start'>Dr. Faz’s impact extends beyond his own achievements. As the founder of Learn 2 Grow Rich and Worldwide Success Academy, he has transformed countless individuals and organizations through leadership, communication, and mindset development. As an Executive Director with the John Maxwell Company, he specializes in human behavior, strategic growth, and dream-building. His engaging style—rooted in storytelling, motivation, and humor—makes him a dynamic force in leadership training.</p>
          <p className='text-sm md:text-lg text-background text-center md:text-start'>Committed to fostering continuous growth, Dr. Faz believes that with the right guidance and mindset, anyone can achieve greatness. Whether coaching Fortune 100 executives or aspiring entrepreneurs, he identifies challenges, crafts clear strategies, and leads others to actionable solutions. His mission is to inspire success, leaving a lasting impact on those he mentors.

</p>
      </div>
      </div>
      {/* Section 5 */}
      <div className="w-full min-h-screen flex flex-col gap-6 items-center justify-center px-5 md:px-16 py-16">
      <h2 className='text-center md:text-start text-4xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight [text-shadow:_0_2px_8px_#000000]'>
          My <span className='text-tritary '>Mentors</span>
          </h2>
          <div className="w-full min-h-full flex flex-col md:flex-row gap-16 items-center justify-center md:justify-center">
            <div className="min-h-[350px] w-full md:w-[50%] flex flex-col items-center md:items-start justify-center gap-4">
              <img src="/johnmax.webp" alt="img" className='w-full h-[400px] object-cover rounded-lg' />
              <h4 className='text-xl md:text-2xl text-center md:text-start text-secondary font-extrabold'>John C Maxwell</h4>
              <p className='text-sm md:text-lg text-center md:text-start'>John C. Maxwell is a world-renowned leadership expert, speaker, and author who has influenced millions of people worldwide through his books, seminars, and coaching. With over 40 years of experience, he is known for his practical, principles-based approach to leadership that empowers individuals to become effective leaders in all aspects of life. Maxwell's teachings focus on the core values of integrity, vision, and personal growth, emphasizing that leadership is about serving others and developing their potential. As a mentor and coach, Maxwell has worked with top executives, athletes, and organizations, helping them create lasting impact through transformational leadership. His work continues to inspire leaders across the globe to lead with purpose and authenticity.</p>
            </div>
            {/* <div className="min-h-[350px] w-full md:w-[40%] flex flex-col items-center md:items-start justify-center gap-4">
              <img src="/testimonial1.jpg" alt="img" className='w-full h-[400px] object-cover rounded-lg' />
              <h4 className='text-xl md:text-2xl text-center md:text-start text-secondary font-extrabold'>John C Maxwell</h4>
              <p className='text-sm md:text-lg text-center md:text-start'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, inventore. Neque voluptatem veniam eum rerum hic, nobis voluptates doloribus. Eligendi corrupti tempore veniam quisquam aliquid repellat, blanditiis ipsam quod explicabo eos minus quas laborum, consequuntur quae culpa illo illum ratione voluptates mollitia perferendis nihil recusandae facere excepturi saepe! Autem vitae modi, temporibus, eos ad ullam libero culpa quam quaerat voluptates quasi qui adipisci laborum nihil doloribus iste laudantium deserunt repudiandae alias eveniet, voluptatibus optio ipsam? Soluta provident fuga, itaque excepturi consectetur modi ipsa mollitia, possimus dolorem at ex eum natus corrupti animi cupiditate accusamus blanditiis suscipit voluptatem, dolorum dolores sint.</p>
            </div> */}
          </div>
      </div>
    </div>
  )
}

export default About
