import React, { Suspense, useRef, useState } from 'react'
import { Audio } from 'react-loader-spinner'
const Video = React.lazy(() => import('../components/Video.jsx'));

const InspirationalTalks = () => {
  const videoRef1 = useRef(null);
  const [isCalendlyOpen, setCalendlyOpen] = useState (false);

  const openCalendly = () => {
    // Open the Calendly widget
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/fazmemon56/drfazal-com?background_color=16425b&text_color=f1efef',
      });

      // Set state to track that the widget is open
      setCalendlyOpen(true);
    }
  };
  return (
  <div className="w-full min-h-screen relative mt-[108px]">
    {/* Section 1 */}
    <div className="w-full min-h-[120vh] md:min-h-screen bg-[url('/is1.webp')] bg-center bg-cover relative">
    <div className="bg-primary bg-opacity-65 w-full min-h-full absolute flex flex-col gap-8 items-center justify-center px-4 md:px-32 py-14">
    <h1 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-background font-bold'>So Much More Than <br />
    <span className='text-tritary'>Selling with Integrity</span></h1>
    <p className='text-center text-base sm:text-lg md:text-xl text-background'>What if your sales approach could inspire trust, nurture relationships, and create lasting value? Selling with integrity goes beyond closing deals—it’s about building credibility, fostering connections, and offering solutions that truly make a difference.</p>
    <p className='text-center text-base sm:text-lg md:text-xl text-background'>When trust and authenticity form the foundation of your strategy, exceeding sales goals becomes effortless. By embracing ethical principles and focusing on meaningful interactions, you can cultivate loyalty, enhance your reputation, and drive impact that extends beyond transactions.It’s not just about selling—it’s about leading with purpose and delivering value that resonates.</p>
    <button onClick={openCalendly} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Book Dr. Faz</button>
    </div>
    </div>
    {/* Section 2 */}
    <div className="w-full min-h-[120vh] md:min-h-screen bg-[url('/aboutpage6.webp')] bg-center bg-cover relative">
    <div className="bg-background bg-opacity-85 w-full min-h-full absolute flex flex-col md:flex-row gap-8 items-center justify-center px-4 md:px-32 py-14">
    <div className="w-full md:w-[50%] min-h-full">
          <img src="/co4.webp" className='w-[80%] md:w-full mx-auto h-[300px] md:h-[450px] object-cover object-center rounded-3xl' alt="" />
        </div>
        <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 md:mr-14 items-center md:items-start justify-center">
        <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl text-tritary font-bold [text-shadow:_2px_4px_4px_#000]'>Ignite Transformation with Tailored Talks</h2>
        <p className='text-center sm:text-left text-sm sm:text-base text-secondary'>As a coach, trainer, and speaker, I deliver inspirational talks that resonate with your team’s aspirations and challenges. Whether it’s a quick 10-minute motivational session, a thought-provoking “Lunch and Learn,” or an electrifying keynote speech, my talks are designed to spark action and inspire change. I customize each presentation to align with your organization’s goals, empowering individuals to unlock their potential and embrace new possibilities.</p>
        <button onClick={openCalendly} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Book Dr. Faz</button>
        </div>
    </div>
    </div>
     {/* Section 3 */}
     <div className='bg-primary w-full min-h-screen flex flex-col justify-center items-center py-0 pt-20 gap-4 sm:gap-4 md:gap-8 px-2'>
      <h2 className='text-3xl sm:text-4xl md:text-5xl text-center text-tritary font-bold mb-4 sm:mb-0 mx-2'>THE ANSWER YOU HAVE BEEN LOOKING FOR</h2>
      <p className='text-lg sm:text-2xl md:text-3xl text-center text-background font-medium mx-2'>Discover the holistic solution for a positive life.</p>
      <div className='w-[80%] md:w-[60%] mx-auto h-[500px]'>
      <Suspense fallback={<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>}> <Video videoRef={videoRef1} videoSrc={"/videos/Fazal.mp4"} /></Suspense>
      </div>
      </div>
      {/* Section 4 */}
    <div className="w-full min-h-[120vh] md:min-h-screen relative">
    <div className="bg-background bg-opacity-85 w-full min-h-full absolute flex flex-col gap-8 items-center justify-center px-4 md:px-32 py-14">
    <h1 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary font-bold'>Empowering Leadership Through <br />
    <span className='text-tritary'>Inspiration</span></h1>
    {/* <p className='text-center text-base sm:text-lg md:text-xl text-primary'>What would more sales tomorrow mean to you? More scale, more freedom, more of the things that matter? It all starts with the ability to close more deals.</p> */}
    <p className='text-center text-base sm:text-lg md:text-xl text-primary'>Inspire your team to achieve greatness with talks that boost confidence, ignite passion, and cultivate strong leadership. My sessions foster a culture of positivity and collaboration, empowering individuals to overcome challenges and thrive together. Through stories of resilience, growth, and success, I aim to create a lasting impact that drives both personal and professional transformation.</p>
    <button onClick={openCalendly} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Book Dr. Faz</button>
    </div>
    </div>
     {/* Section 6 */}
     <div className="w-full min-h-[70vh] md:min-h-screen bg-[url('/4.webp')] bg-fixed bg-center bg-cover relative">
    <div className="bg-background bg-opacity-85 w-full min-h-full absolute flex flex-col gap-8 items-center justify-center px-4 md:px-32 py-14">
    <h1 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary font-bold'>Meaningfull Messages That <br />
    <span className='text-tritary'>Resonate</span></h1>
    <p className='text-center text-base sm:text-lg md:text-xl text-primary'>My inspirational talks go beyond motivation—they align with your organization’s values and vision. From executive retreats to company-wide events, I deliver powerful messages that inspire individuals to think big, act boldly, and achieve their goals. Let’s create a transformative experience that uplifts your team and sets the foundation for lasting success.</p>
    <button onClick={openCalendly} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Book Dr. Faz</button>
    </div>
    </div>
  </div>
  )
}

export default InspirationalTalks