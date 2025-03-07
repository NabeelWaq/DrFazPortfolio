import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react'
import Marquee from "react-fast-marquee";
import { useNavigate } from 'react-router-dom'
// import "https://assets.calendly.com/assets/external/widget.css";
// import "https://assets.calendly.com/assets/external/widget.js";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slides = [
    {
      url: '/1.webp'
    },
    {
      url: '/2.webp'
    },
    {
      url: '/3.webp'
    },
    {
      url: '/4.webp'
    },
  ]

  const infinite = [
    {
      url: '/Marketing.webp',
      title1: 'Business Coach'
    },
    {
      url: 'https://paulmartinelli.net/wp-content/uploads/2024/05/Eucation.png',
      title1: 'Education'
    },
    {
      url: 'https://paulmartinelli.net/wp-content/uploads/2024/05/Financial-Planning.png',
      title1: 'Sales',
      title2:'Business To Communication'
    },
    {
      url: 'https://paulmartinelli.net/wp-content/uploads/2024/05/Healthcare.png',
      title1: 'Healthcare'
    },
    {
      url: '/goal.svg',
      title1: 'Goal Setting'
    },
    {
      url: '/leader.svg',
      title1: `Leadership`,
      title2:'Entrepreneurship'
    },
    {
      url:'/coaching.svg',
      title1:'Coaching',
      title2:'Executive'
    },
    {
      url:'/business.svg',
      title1:'Business',
      title2:'Communications'
    }
  ]
//   Sales - B2C
// Goal Setting
// Sales Training
// Leadership - Entrepreneurship
// Coaching - Executive
// Business - Communications

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastIndex = slides.length - 1;
    const newIndex = isLastIndex === currentIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]); // Dependency array ensures proper updates

  const videoRef = useRef(null);
  const playPauseBtn = useRef(null);
  const progressBar = useRef(null);
  const volumeRef = useRef(null);
  const rangeRef = useRef(null);
  const speedOptions = useRef(null);
  const containerRef = useRef(null);
  const videoTimeLine = useRef(null);
  const currentTimeRef = useRef(null);
  const durationref = useRef(null);
  const progressTimeRef = useRef(null);
  const playPauseRef = useRef(null);
  let timer;


  const playPauseVideo = () => {
    videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
    videoRef.current.paused ? playPauseBtn.current.classList.replace("ri-pause-fill","ri-play-fill") : playPauseBtn.current.classList.replace("ri-play-fill","ri-pause-fill") 
  }

  const formateTime = time => {
    let seconds = Math.floor(time % 60);
    let minutes = Math.floor((time / 60) % 60);
    let hours = Math.floor((time / 3600));

    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;

    if(hours == 0){
      return `${minutes}:${seconds}`;
    }
    return `${hours}:${minutes}:${seconds}`;
  }

  const timeUpdate = (e) => {
    const {currentTime , duration} = e.target;
    let percent = (currentTime/duration) * 100;
    progressBar.current.style.width = `${percent}%`;
    currentTimeRef.current.innerText = formateTime(currentTime);
  }
  const addTime = () => {
    videoRef.current.currentTime += 5;
  }
  const subTime = () => {
    videoRef.current.currentTime -= 5;
  }

  const muteUnmute = () => {
    if(!volumeRef.current.classList.contains("ri-volume-up-fill")){
       videoRef.current.volume = 0.5;
       volumeRef.current.classList.replace("ri-volume-mute-fill","ri-volume-up-fill");
    }else{
      videoRef.current.volume = 0.0;
      volumeRef.current.classList.replace("ri-volume-up-fill","ri-volume-mute-fill");
    }
  }

  const changeVolume = (e) => {
   videoRef.current.volume = e.target.value;
   if(e.target.value == 0){
    volumeRef.current.classList.replace("ri-volume-up-fill","ri-volume-mute-fill");
   }else{
    volumeRef.current.classList.replace("ri-volume-mute-fill","ri-volume-up-fill");
   }
   volumeRef.current.value = videoRef.current.volume;
  }

  const showOptions = () => {
       speedOptions.current.classList.toggle("show");
  }
  const checkClick = (e) => {
    if(e.target.tagName !== "SPAN" || e.target.className !== "material-symbols-outlined"){
      speedOptions.current.classList.remove("show");
    }
  }

  const videoSpeed = (e) => {
       videoRef.current.playbackRate = e.target.dataset.speed;
       speedOptions.current.querySelector(".active").classList.remove("active");
       e.target.classList.add("active");
  }
  const picInPic = () => {
    videoRef.current.requestPictureInPicture();
  }
  const fullScreen = () => {
     containerRef.current.classList.toggle("fullscreen");
     if(document.fullscreenElement){
      return document.exitFullscreen;
     }
     containerRef.current.requestFullscreen;
  }

  const updatingVideoTimeline = (e) => {
   let timeLineWidth = e.target.clientWidth;
   videoRef.current.currentTime = (e.nativeEvent.offsetX / timeLineWidth) * videoRef.current.duration;
  }

  const updateDuration = (e) => {
    durationref.current.innerText = formateTime(e.target.duration);
  }
  const updatingProgressTime = (e) => {
    progressTimeRef.current.style.left = `${e.nativeEvent.offsetX}px`
    let timeLineWidth = e.target.clientWidth;
    let percent = (e.nativeEvent.offsetX / timeLineWidth) * videoRef.current.duration;
    progressTimeRef.current.innerText = formateTime(percent);
  }

  const hideControls = () => {
    // if(videoRef.current.paused) return null;
    timer = setTimeout(() => {
containerRef.current.classList.remove("show-controls")
    },3000)
  }
  hideControls();

  const showControls = () => {
    containerRef.current.classList.add("show-controls");
    clearTimeout(timer);
    hideControls();
  }

  const playPause = () => {
    playPauseRef.current.classList.contains("ri-play-fill") ? videoRef.current.play() : videoRef.current.pause();
    playPauseRef.current.classList.contains("ri-play-fill") ? playPauseRef.current.classList.replace("ri-play-fill","ri-pause-fill") : playPauseRef.current.classList.replace("ri-pause-fill","ri-play-fill");
  }
 
  const navigate = useNavigate();
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
  gsap.from(".carousel-con",({
    y:100,
    duration:.5,
    delay:.5,
    opacity:0,
    ease:'power1'
  }))
  gsap.from(".ri-arrow-left-circle-fill",({
    x:-50,
    duration:.5,
    delay:1,
    opacity:0,
    ease:"power1"
  }))
  gsap.from(".ri-arrow-right-circle-fill",({
    x:50,
    duration:.5,
    delay:1,
    opacity:0,
    ease:"power1"
  }))
  gsap.from(".sec2-con",({
    x:100,
    duration:.5,
    delay:0,
    opacity:0,
    ease:"power1",
    scrollTrigger:{
      scroller:"body",
      trigger:".sec2-con",
      start:"top 1000",
      end:"top -10",
      scrub:true,
    }
  }))
  gsap.from(".sec3-con",({
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    ease:"power1",
    scrollTrigger:{
      scroller:"body",
      trigger:".sec3-con",
      start:"top 1000",
      end:"top -10",
      scrub:true,
    }
  }))
  gsap.from(".sec4-con",({
    x:-100,
    duration:1,
    opacity:0,
    stagger:1,
    ease:"power1",
    scrollTrigger:{
      scroller:"body",
      trigger:".sec4-con",
      start:"top 900",
      end:"top -10",
      scrub:true,
    }
  }))
  gsap.from(".sec4-img",({
    x:300,
    duration:1,
    opacity:0,
    stagger:1,
    ease:"power1",
    scrollTrigger:{
      scroller:"body",
      trigger:".sec4-img",
      start:"top 900",
      end:"top -10",
      scrub:true,
    }
  }))
  gsap.from(".sec5-left",({
    x:-200,
    duration:.5,
    opacity:0,
    
    ease:"power1",
    scrollTrigger:{
      scroller:"body",
      trigger:".sec5-left",
      start:"top 900",
      end:"top 200",
      scrub:true,
    }
  }))
  gsap.from(".sec5-right",({
    x:200,
    duration:.5,
    opacity:0,
    
    ease:"power1",
    scrollTrigger:{
      scroller:"body",
      trigger:".sec5-right",
      start:"top 900",
      end:"top 200",
      scrub:true,
    }
  }))
  gsap.from(".sec6-con",({
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    ease:"power1",
    scrollTrigger:{
      scroller:"body",
      trigger:".sec6-con",
      start:"top 900",
      end:"top 300",
      scrub:true,
    }
  }))
  gsap.from(".sec7-con",({
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    ease:"power1",
    scrollTrigger:{
      scroller:"body",
      trigger:".sec7-con",
      start:"top 900",
      end:"top 200",
      scrub:true,
    }
  }))
  gsap.from(".sec8-con",({
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    ease:"power1",
    scrollTrigger:{
      scroller:"body",
      trigger:".sec8-con",
      start:"top 400",
      end:"top 200",
      scrub:true,
    }
  }))
  gsap.from(".sec9-con",({
    y:100,
    duration:1,
    opacity:0,
    ease:"power1",
    scrollTrigger:{
      scroller:"body",
      trigger:".sec9-con",
      start:"top 900",
      end:"top 250",
      scrub:true,
    }
  }))
  gsap.from(".sec10-left",({
    x:-200,
    duration:1,
    opacity:0,
    ease:"power1",
    stagger:1,
    scrollTrigger:{
      scroller:"body",
      trigger:".sec10-left",
      start:"top 900",
      end:"top -50",
      scrub:true,
    }
  }))
  gsap.from(".sec10-right",({
    x:200,
    duration:1,
    opacity:0,
    stagger:1,
    ease:"power1",
    scrollTrigger:{
      scroller:"body",
      trigger:".sec10-right",
      start:"top 900",
      end:"top -350",
      scrub:true,
    }
  }))
  },[])

  return (
    <div onClick={(e) => checkClick(e)} className='w-full min-h-screen overflow-x-hidden' >
      {/* <GetQuoteButton /> */}
      {/* Carousel */}
      <div className='w-full h-screen m-auto relative group mt-[108px]'>
        <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className={`w-full h-full bg-cover ${(currentIndex%2) === 0 ? "bg-right":"bg-left"} md:bg-center duration-500 relative px-10`}>
          {(currentIndex%2) === 0 ? <>
          {
            currentIndex === 0 && (
              <div className="carousel-con absolute top-[50%] left-[50%] md:right-[unset] translate-x-[-50%] md:translate-x-[unset] translate-y-[-50%] md:translate-y-[unset] md:top-[15%] md:left-[10%] w-[80%] md:w-[50%] min-h-[300px] bg-secondary bg-opacity-50 rounded-xl p-8 flex justify-center items-center flex-col gap-5">
                  <h1 className='w-full text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-extrabold text-tritary text-center'>Yes YOU Can!</h1>
                  <p className='text-center text-sm sm:text-lg lg:text-xl text-background'>Dr. Faz Mehmood’s mantra inspires confidence and empowers you to achieve your goals with determination and self-belief.</p>
              </div>
            )
          }
           {
            currentIndex === 2 && (
              <div className="carousel-con absolute top-[50%] left-[50%] md:right-[unset] translate-x-[-50%] md:translate-x-[unset] translate-y-[-50%] md:translate-y-[unset] md:top-[15%] md:left-[10%] w-[80%] md:w-[50%] min-h-[300px] bg-secondary bg-opacity-50 rounded-xl p-8 flex justify-center items-center flex-col gap-5">
                   <h1 className='w-full text-3xl md:text-4xl lg:text-5xl font-extrabold text-tritary text-center'>Unlock market success with our Market Matchmaker Training</h1>
                  <p className='text-center text-sm sm:text-base text-background'>"Master market research, customer segmentation, and competitive analysis to uncover opportunities and craft winning strategies. Gain the skills to outshine competitors, tailor offerings, and build powerful partnerships for success!"</p>
                   <button onClick={() => navigate('/keynotespeaking') } className='bg-thrice text-background sm:text-xl hover:bg-tritary hover:text-primary text-base px-2 py-1 sm:px-5 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Read More</button>
              </div>
            )
          }
          </> :<>
          {
            currentIndex === 1 && (
              <div className="carousel-con absolute top-[50%] left-[50%] md:left-[unset] translate-x-[-50%] md:translate-x-[unset] translate-y-[-50%] md:translate-y-[unset] md:top-[20%] md:right-[10%] w-[80%] md:w-[45%] min-h-[300px] bg-secondary bg-opacity-50 rounded-xl p-8 flex justify-center items-center flex-col gap-5">
                  <h1 className='w-full text-3xl md:text-4xl lg:text-5xl font-extrabold text-tritary text-center'>Boost your sales while staying true to your values! </h1>
                  <p className='text-center text-sm sm:text-base text-background'>"Boost your sales while staying true to your values! Selling with Integrity empowers you to build trust, foster genuine connections, and achieve success with honesty at the core."</p>
                   <button onClick={() => navigate('/salesTraining') } className='bg-thrice text-background sm:text-xl hover:bg-tritary hover:text-primary text-base px-2 py-1 sm:px-5 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Read More</button>
              </div>
            )
          }
           {
            currentIndex === 3 && (
              <div className="carousel-con absolute top-[50%] left-[50%] md:left-[unset] translate-x-[-50%] md:translate-x-[unset] translate-y-[-50%] md:translate-y-[unset] md:top-[15%] md:right-[10%] w-[80%] md:w-[50%] min-h-[300px] bg-secondary bg-opacity-50 rounded-xl p-8 flex justify-center items-center flex-col gap-5">
                  <h1 className='w-full text-3xl md:text-4xl lg:text-5xl font-extrabold text-tritary text-center'>Stop Not Working, Start Networking</h1>
                  <p className='text-center text-sm sm:text-base text-background'>"Stop Not Working, Start Networking" is a game-changing program that will empower individuals and organizations to unlock new opportunities, establish fruitful partnerships, and ultimately achieve greater success.</p>
                   <button onClick={() => navigate('/keynotespeaking') } className='bg-thrice text-background sm:text-xl hover:bg-tritary hover:text-primary text-base px-2 py-1 sm:px-5 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Read More</button>
              </div>
            )
          }
          </>}
        </div>
        {/* Left icon */}
        <i onClick={prevSlide} className="ri-arrow-left-circle-fill block group-hover:block absolute top-[50%] -translate-x-0 left-2 cursor-pointer hover:scale-105 translate-y-[-50%] text-3xl sm:text-5xl font-bold text-tritary"></i>
        {/* Right icon */}
        <i onClick={nextSlide} className="ri-arrow-right-circle-fill block group-hover:block absolute top-[50%] -translate-x-0 right-2  cursor-pointer hover:scale-105 translate-y-[-50%] text-3xl sm:text-5xl font-bold text-tritary"></i>
        <div className="flex justify-center bottom-5 left-[50%] -translate-x-[50%] py-2 gap-5 absolute">
          {
            slides.map((slide, index) => (
              <div key={index} onClick={() => setCurrentIndex(index)} className={` rounded-full w-5 h-5 ${index === currentIndex ? "bg-white" : "bg-black"}`}></div>
            ))
          }
        </div>
      </div>
      {/* Section 2 */}
      <div style={{ backgroundImage: "url('/homesec2.webp')" }} className="relative w-full min-h-screen bg-cover bg-no-repeat bg-left brightness-75 flex justify-end items-center py-10">
        <div className="w-full h-full absolute bg-blue-400 bg-opacity-45 z-10"></div>
        <div className="sec2-con w-[100%] sm:w-[90%] md:w-[60%] min-h-[90%] z-20 bg-background bg-opacity-45 rounded-xl p-5 flex flex-col gap-4 mx-5 sm:mr-32">
          <h1 className='w-full text-3xl md:text-4xl lg:text-5xl font-extrabold '>TURN YOUR SALES INTO THE KEY TO<br /><span className='text-tritary'> TRUE FINANCIAL FREEDOM.</span></h1>
          <p className=' sm:text-left text-sm sm:text-base text-white'>After decades of leading Fortune 100 companies, founding three successful businesses, and mastering the art of sales, Dr. Faz Mehmood is here to help you unlock financial freedom by turning sales into the driving force behind your success.</p>
          <p className=' sm:text-left text-sm sm:text-base text-white'>With 20 years of direct sales experience in the U.S. and an MBA in Global Management, Dr. Faz has seen firsthand how effective sales strategies can transform businesses and lives. He’s not just about closing deals—he’s about building sustainable success. His proven methods focus on mindset, communication, and leadership, helping you not only drive sales but also create lasting, impactful results that elevate your bottom line.</p>
          <p className=' sm:text-left text-sm sm:text-base text-white'>Dr. Faz doesn’t just teach sales techniques; he builds sales leaders who excel in their fields and push the boundaries of what’s possible. Through his company, Learn 2 Grow Rich, and as an Executive Director with the John Maxwell Company, Dr. Faz shares actionable strategies that go beyond conventional sales tactics, providing you with the tools to grow your business, empower your team, and achieve the financial freedom you’ve always dreamed of.</p>
          <p className=' sm:text-left text-sm sm:text-base text-white'>With Dr. Faz, you’re not just learning to sell—you’re learning to lead, inspire, and transform your approach to business for long-term success that will fuel your financial freedom.</p>
        </div>
      </div>
      {/* Section 3 */}
      <div className='bg-background w-full min-h-screen flex flex-col justify-center items-center py-20 gap-3 sm:gap-4 md:gap-8'>
        <h2 className='sec3-con text-3xl sm:text-4xl md:text-5xl text-center text-tritary font-bold mb-4 sm:mb-0 mx-2 [text-shadow:_2px_2px_8px_#000000]'>THE SOLUTION YOU’VE BEEN SEARCHING FOR</h2>
        <p className='sec3-con text-lg sm:text-2xl md:text-3xl text-center text-black font-medium md:mx-28'>"Unlock the path to success, personal growth, and a life of abundance with proven strategies and leadership insights."
</p>
        <div onMouseMove={() => showControls()} ref={containerRef} className="sec3-con container w-[80%] md:w-[1000px] h-[300px] sm:h-[500px] relative rounded-lg bg-black">
          <div onClick={playPause} className="absolute flex justify-center items-center w-20 z-10 cursor-pointer opacity-0 h-20 play rounded-full left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] bg-tritary text-white">
          <i ref={playPauseRef} className="ri-play-fill text-3xl text-center cursor-pointer"></i>
          </div>
          <div className="wrapper absolute left-0 right-0 bottom-0">
            <div onMouseMove={(e) => updatingProgressTime(e)} className="video-timeline" onClick={(e) => updatingVideoTimeline(e)} ref={videoTimeLine}>
              <div  className="progress-area">
                <span ref={progressTimeRef}>00:00</span>
                <div ref={progressBar} className="progress-bar"></div>
              </div>
            </div>
            <ul className="video-controls">
              <li className='options left'>
                <button onClick={muteUnmute} className="volume"><i ref={volumeRef} className="ri-volume-up-fill"></i></button>
                <input onChange={ (e) => changeVolume(e)} ref={rangeRef} type="range" min={"0"} max={"1"} step={"any"} />
                <div className="video-timer">
                  <p ref={currentTimeRef} className="current-time">00:00</p>
                  <p className="separator">/</p>
                  <p ref={durationref} className="video-duration">00:00</p>
                </div>
              </li>
              <li className='options center'>
              <button onClick={subTime} className="skip-backward hidden md:block"><i className="ri-skip-back-mini-fill"></i></button>
              <button onClick={playPauseVideo} className="play-pause"><i ref={playPauseBtn} className="ri-play-fill"></i></button>
              <button onClick={addTime} className="skip-forward hidden md:block"><i className="ri-skip-forward-mini-fill"></i></button>
              </li>
            
              <li className='options right'>
                <div className="playback-content">
                <button onClick={showOptions} className="playback-speed hidden md:block">
                <span className="material-symbols-outlined">
                  slow_motion_video
                </span>
                </button>
                <ul ref={speedOptions} className="speed-options">
                 <li onClick={(e) => videoSpeed(e)} data-speed="2">2x</li>
                 <li onClick={(e) => videoSpeed(e)} data-speed="1.5">1.5x</li>
                 <li onClick={(e) => videoSpeed(e)} data-speed="1" className='active'>Normal</li>
                 <li onClick={(e) => videoSpeed(e)} data-speed="0.75">0.75X</li>
                 <li onClick={(e) => videoSpeed(e)} data-speed="0.5">0.5X</li>
                </ul>
                </div>
                <button onClick={picInPic} className="pic-in-pic hidden md:block">
                  <span className="material-symbols-outlined">
                    picture_in_picture_alt
                  </span>
                </button>
                <button onClick={fullScreen} className="fullscreen">
                  <i className="ri-fullscreen-fill"></i>
                  </button>
              </li>
            </ul>
          </div>
          <video onLoadedData={(e) => updateDuration(e)} onTimeUpdate={(e) => timeUpdate(e)} ref={videoRef}  className='w-full h-full px-2 rounded-lg' src="/videos/homeVid.mp4"></video>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center w-full bg-primary py-8 px-2 mt-48 relative">
          <h3 className='text-lg sm:text-xl lg:text-2xl text-background font-semibold text-center'>HAS WORKED WITH PROFESSIONALS IN</h3>
          <div className='infinte-scroller'>
       
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 gap-y-8 mt-8">
              {
                
                [...infinite].map((item, index) => (
                  <div key={index} className="brand flex-shrink-0 ml-2 mr-2 text-background flex flex-col items-center justify-between gap-0 mx-10">
                    <img src={item.url} className='w-16 h-16 object-contain mx-auto text-background mb-2' alt="" />
                    <h4 className='text-sm sm:text-base text-background'>{item.title1}</h4>
                    {item.title2 && <h4 className='text-sm sm:text-base text-background'>{item.title2}</h4>}
                  </div>
                ))
                
              }
              </div>
          </div>
        </div>
      </div>
      {/* About */}
      <div className="w-full min-h-screen sm:h-[120vh] md:h-[180vh] xl:h-[100vh] overflow-hidden bg-fixed bg-[url('/4.webp')] relative bg-no-repeat bg-cover">
        <div className="bg-primary relative py-8 md:py-14 w-full min-h-full bg-opacity-70 flex flex-col lg:flex-row lg:py-0 px-2 sm:px-8 md:px-14  items-center justify-center pt-4 sm:justify-end gap-6 sm:gap-0">
          <div className="flex flex-col gap-4 items-center sm:items-start px-5 sm:px-0 justify-center w-[100%] lg:w-[50%] min-h-full">
            <h2 className='sec4-con text-center sm:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-tritary font-bold'><span className='text-background'>Dr.</span> Faz Mehmood</h2>
            <div className="flex flex-col gap-3 items-start justify-center">
              <p className='sec4-con text-center sm:text-left text-sm sm:text-base text-background'>With 40 years of experience across Fortune 100 companies and the medical field, Dr. Faz Mehmood is a global business strategist dedicated to empowering leaders, executives, and entrepreneurs. His mantra, "Yes YOU Can!" fuels his mission to help professionals unlock their potential and achieve extraordinary success.</p>
              <p className='sec4-con text-center sm:text-left text-sm sm:text-base text-background'>As the founder of Learn 2 Grow Rich and Worldwide Success Academy, Dr. Faz delivers transformative training in leadership, communication, and human behavior. His decades of expertise provide individuals and organizations with the tools to create lasting breakthroughs and measurable growth.</p>
              <p className='sec4-con text-center sm:text-left text-sm sm:text-base text-background'>An Executive Director with the John Maxwell Company, Dr. Faz captivates audiences worldwide with actionable insights, storytelling, and humor. From Karachi to Pennsylvania, his impact transcends borders, helping people turn ambition into reality and embrace a life of purpose and abundance.</p>
              <p className='sec4-con text-center sm:text-left text-sm sm:text-base text-background'>With a unique blend of strategic vision and deep human connection, Dr. Faz is a sought-after mentor and coach, guiding professionals to new heights of success and fulfillment.</p>
            </div>
            <button onClick={() => navigate('/about') } className='bg-thrice text-background sm:text-xl hover:bg-tritary hover:text-primary text-base px-2 py-1 sm:px-5 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>About Dr. Faz</button>
          </div>
          <div className="sec4-img w-[100%] lg:w-[50%] relative h-[500px] md:h-[550px] hidden sm:flex justify-center items-center lg:h-[900px] xl:h-[1000px]">
            <img src="/about2.webp" className='w-full h-full object-cover' alt="" />
          </div>
        </div>
      </div>
      {/* awards */}
      <div className="w-full min-h-[20vh] py-20 bg-white px-2 flex flex-col items-center justify-center gap-10 bg-opacity-70">
      <h2 className='text-center text-3xl sm:text-4xl md:text-5xl text-tritary font-bold [text-shadow:_2px_2px_8px_#000000]'>Awards</h2>
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center w-[80%] text-center md:w-[60%] md:gap-10 lg:gap-0 lg:w-[50%] mx-auto min-h-[400px]">
             <div className="sec5-left h-[250px] md:h-[300px] w-full  flex items-start justify-center">
              <img className='h-full object-cover hover:scale-110 transition-all ease-in duration-200' src="/Toastmasters.webp" alt="" />
             </div>
             <div className="sec5-left h-[120px] md:h-[150px] w-full  flex items-start justify-center">
              <img className='h-full object-cover hover:scale-110 transition-all ease-in duration-200' src="/aw1.webp" alt="" />
             </div>
             <div className="sec5-left h-[180px] md:h-[200px] w-full  flex items-start justify-center">
              <img className='h-full object-cover hover:scale-110 transition-all ease-in duration-200' src="/aw2.webp" alt="" />
             </div>
             <div className="sec5-left h-[180px] md:h-[240px] w-full  flex items-start justify-center">
              <img className='h-full object-cover hover:scale-110 transition-all ease-in duration-200' src="/aw3.webp" alt="" />
             </div>
             <div className="sec5-right h-[200px] md:h-[300px] w-full  flex items-start justify-center">
              <img className='h-full object-cover hover:scale-110 transition-all ease-in duration-200' src="/aw4.webp" alt="" />
             </div>
             <div className="sec5-right h-[180px] md:h-[240px] w-full  flex items-start justify-center">
              <img className='h-full object-cover hover:scale-110 transition-all ease-in duration-200' src="/aw5.webp" alt="" />
             </div>
             <div className="sec5-right h-[220px] md:h-[240px] w-full  flex items-start justify-center">
              <img className='h-full object-cover hover:scale-110 transition-all ease-in duration-200' src="/aw6.webp" alt="" />
             </div>
             <div className="sec5-right h-[240px] mb-5 md:h-[280px] w-full flex items-start justify-center">
              <img className='h-full object-cover hover:scale-110 transition-all ease-in duration-200' src="/aw7.webp" alt="" />
             </div>
        </div>
      </div>
      {/* Resource */}
      <div className="flex flex-col gap-8 py-8 md:pt-10 px-2 items-center justify-center w-full min-h-[70vh] mb-4 md:mb-0">
        <div className="flex flex-col w-full items-center justify-center gap-2">
          <h2 className='sec6-con text-center text-3xl sm:text-4xl md:text-5xl text-tritary font-bold [text-shadow:_2px_2px_8px_#000000]'>Find Your Next Breakthrough</h2>
          <h4 className='sec6-con text-base sm:text-lg text-gray-600 text-center'>Explore some of Dr.Faz best thoughts and content.</h4>
        </div>
        <div className="sec6-con flex flex-col md:flex-row flex-wrap gap-4 w-full justify-center items-center md:items-center px-4">
        <iframe className='rounded-xl w-full h-[150px] md:w-[23%] md:h-[200px]' src="https://www.youtube.com/embed/ypWh2399AHU?si=r-70dwV-zrjJC8tC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe className='rounded-xl w-full h-[150px] md:w-[23%] md:h-[200px]' src="https://www.youtube.com/embed/Ttm79LCaw_4?si=X3l8wJgY4PQ1a0Fd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe className='rounded-xl w-full h-[150px] md:w-[23%] md:h-[200px]' src="https://www.youtube.com/embed/xqiGvN70504?si=4XA1RO8aMNWpOAYL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <button className='bg-thrice text-background sm:text-xl hover:bg-tritary hover:text-primary text-base px-2 py-1 sm:px-5 text-center rounded-xl font-extrabold transition-all ease-in-out duration-500'><a href="https://www.youtube.com/@DrFazMehmood" target='_blank'>More Videos</a></button>
        <button></button>
      </div>

 {/* Companies */}
 <div className="w-full min-h-[20vh] py-20 px-2 flex flex-col items-center justify-center gap-10 bg-white bg-opacity-70">
      <h2 className='sec7-con text-center text-3xl sm:text-4xl md:text-5xl text-tritary font-bold [text-shadow:_2px_2px_8px_#000000]'>Companies</h2>
        <div className="sec7-con grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center  w-[80%] mx-auto min-h-[200px]">
             <div className="h-[140px] md:h-[200px] w-full  flex items-center justify-center">
              <img className='h-full object-cover hover:scale-110 transition-all ease-in duration-200' src="/comp1.webp" alt="" />
             </div>
             <div className="h-[140px] md:h-[200px] w-full  flex items-center justify-center">
              <img className='h-full object-cover hover:scale-110 transition-all ease-in duration-200' src="/comp2.webp" alt="" />
             </div>
             <div className="h-[140px] md:h-[200px] w-full  flex items-center justify-center">
              <img className='h-full object-cover hover:scale-110 transition-all ease-in duration-200' src="/comp3.webp" alt="" />
             </div>
             <div className="h-[140px] md:h-[200px] w-full flex items-center justify-center">
              <img className='h-full object-cover hover:scale-110 transition-all ease-in duration-200' src="/comp4.webp" alt="" />
             </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="w-full h-screen bg-fixed bg-[url('/aboutpage6.webp')] bg-cover relative">
        <div className="z-10 absolute w-full h-full bg-background bg-opacity-30"></div>
        <div className="relative z-[18] flex w-full h-full flex-col items-center justify-center gap-8 px-6 md:px-2 py-5 ">
          <h1 className='sec8-con text-center text-3xl sm:text-4xl md:text-5xl text-tritary font-bold [text-shadow:_2px_2px_8px_#000000]'>SEE HOW OTHERS MADE THEIR DREAMS A REALITY</h1>
          <iframe className='sec8-con w-full h-[400px] md:w-[60%] md:h-[60%] rounded-3xl' src="https://www.youtube.com/embed/lvLcAjbwi3U?si=QDWuiByIMt_2WY53" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
      {/* Testimonials */}
      <div className="flex flex-col items-center justify-center gap-8 w-full min-h-screen py-16 md:py-20">
        <div className="text-center w-full sm:w-[60%] md:whitespace-nowrap flex justify-center items-center px-4 sm:px-0">
          <h1 className='sec9-con text-2xl md:text-4xl lg:text-5xl font-extrabold '>WHAT SALES EXECUTIVES SAY ABOUT <br />
            <span className='text-tritary'>WORKING WITH DR. FAZ</span></h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-20 md:gap-10 w-full min-h-full px-6 md-px-0">
          <div className="flex w-full md:w-[80%] justify-between flex-col md:flex-row items-center gap-6 min-h-[300px]">
            <img src="/testimonial1.webp" className='sec10-left w-48 h-48 rounded-full object-cover' alt="" />
            <div className="sec10-right flex flex-col justify-center items-center md:items-start gap-2">
              <h2 className='text-xl sm:text-2xl md:text-3xl font-extrabold font-[Raleway] text-center'>D.William Steward</h2>
              <p className='text-center md:text-start text-sm sm:text-base'>I meet Dr. Faz at Picket Post Toastmasters, where his inspiring stories and public speaking skills really captivated my interest and desire to grow by developing my own communication skills. Since that time, I have participated in several of his mastermind groups that have truly helped me to grow. He is a fantastic coach and leader that cares about the growth of those he mentors and has an in-depth knowledge of what it takes to communicate as well as lead. He is truly one to get around, if you every have the opportunity I highly recommend his class/services.</p>
            </div>
          </div>
          <div className="flex w-full md:w-[80%] justify-between flex-col-reverse md:flex-row items-center gap-6 min-h-[300px]">
          
            <div className="sec10-left flex flex-col justify-center items-center md:items-start gap-2">
              <h2 className='text-xl sm:text-2xl md:text-3xl font-extrabold font-[Raleway] text-center'>Maheem Shakeel</h2>
              <p className='text-center md:text-start text-sm sm:text-base'>I am honored to recommend Dr. Faz Mahmood, an incredible mentor, coach, and inspirational speaker who has profoundly impacted my life. I was once an introverted and shy individual, hesitant about public speaking and lacking confidence. Under Dr. faz guidance, I transformed into a confident speaker, capable of presenting effectively to an audience. His unwavering encouragement and insightful mentorship have inspired me in countless ways. One of his powerful sayings, “You do not get what you want; you only get what you are,” has become my guiding principle . I am truly grateful for his wisdom, motivation, and the lasting influence he has had on my journey. I wholeheartedly recommend Dr. Faz Mahmood to anyone seeking an inspiring and transformative mentor.</p>
            </div>
            <img src="/testimonial3.webp" className='sec10-right w-48 h-48 rounded-full object-cover' alt="" />
          </div>
          <div className="flex w-full md:w-[80%] justify-between flex-col md:flex-row items-center gap-6 min-h-[300px]">
            <img src="/testimonial2.webp" className='sec10-left w-48 h-48 rounded-full object-cover' alt="" />
            <div className="sec10-right flex flex-col justify-center items-center md:items-start gap-2">
              <h2 className='text-xl sm:text-2xl md:text-3xl font-extrabold font-[Raleway] text-center'>Joe JaworskiJoe Jaworski</h2>
              <p className='text-center md:text-start text-sm sm:text-base'>Dr. Faz is foundational to my growth as a recent college graduate. I am fortunate to have him as a mentor who is genuinely interested in helping me grow as a leader, employee, and person. His presentations contain educational stories drafted from over a decade of rare leadership experience, setting sales records, and ENT surgical practice. His stories and guidance provide me with an original body of knowledge that cannot be found elsewhere. I highly recommend Dr. Faz for your company.</p>
            </div>
          </div>
        </div>
        <button className='bg-thrice text-background sm:text-xl hover:bg-tritary hover:text-primary text-base px-2 py-1 sm:px-5 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500 mt-8' onClick={() => navigate('/testimonials') }>View More</button>
      </div>

    

    </div>
  )
}

export default Home
