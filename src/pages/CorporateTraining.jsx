import React, { useState } from 'react'

const CorporateTraining = () => {
  const [isCalendlyOpen, setCalendlyOpen] = useState(false);

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
    <div className='w-full relative min-h-screen mt-[108px]'>
      {/* Section 1 */}
      <div className="relative w-full min-h-screen md:h-screen flex justify-center bg-[url('/co1.webp')] bg-cover bg-left md:bg-top bg-no-repeat bg-fixed md:justify-start items-center px-4 md:px-20 py-0">
        <div className="w-full sm:w-[80%] md:w-[50%] min-h-[400px] bg-primary bg-opacity-50 px-4 md:px-8 py-10 rounded-lg flex flex-col gap-5 justify-center items-center md:items-start">
          <h1 className='w-full text-3xl md:text-4xl lg:text-5xl font-extrabold text-background [text-shadow:_0_6px_8px_#000000] text-center md:text-start'>Transform Your Team with Corporate Training</h1>
          <h4 className='text-xl md:text-2xl font-semibold text-center md:text-start text-background'>Leadership. Growth. Success.</h4>
          <p className='text-lg md:text-xl text-center md:text-start text-background font-light'>Dr. Faz Mehmood delivers dynamic workshops that empower teams, enhance leadership, and drive organizational success. Equip your team with actionable strategies to thrive in today’s competitive world.</p>
        </div>
      </div>
      {/* Section 2 */}
      <div className="w-full min-h-screen flex flex-col gap-4 py-16 justify-center items-center bg-white pb-0 md:justify-start relative">
        <h2 className='text-center md:text-start text-3xl sm:text-4xl md:text-5xl text-primary font-bold tracking-wider'>
          SPEAKING TOPICS
        </h2>
        <h4 className='text-xl md:text-2xl text-center md:text-start text-secondary px-4'>Dr Faz speaks on MPT (Marketing, Personal Growth and Technology)</h4>
        <div className="relative w-full min-h-full px-4 md:px-12 py-16 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start bg-primary gap-6">
          <div className="w-full relative md:w-[48%] min-h-full flex items-start justify-center">
            <img src="/co2.webp" className='w-full md:w-[80%] h-[60%] md:h-[50%] rounded-lg' alt="" />
          </div>
          <div className="relative w-full md:w-[48%] h-full flex flex-col gap-4 items-center md:items-start justify-center">
            <h2 className='text-center md:text-start text-3xl sm:text-4xl md:text-5xl text-background font-bold tracking-wide'>
              Master the Art of Communication
            </h2>
            <h2 className='text-lg sm:text-xl text-background font-semibold text-center tracking-wider'>
              Clarity. Connection. Confidence.
            </h2>
            <p className='text-base md:text-lg text-background text-center md:text-start' >In today’s fast-paced business environment, clear and effective communication is the foundation of success. Dr. Faz Mehmood’s communication workshops empower individuals and teams to express ideas with confidence, foster stronger relationships, and minimize misunderstandings.</p>
            <p className='text-base md:text-lg text-background text-center md:text-start' >Participants will gain valuable insights into active listening, emotional intelligence, and persuasive communication techniques, all tailored to create meaningful connections and drive collaboration. These sessions are designed to help your team break down communication barriers and build a culture where every voice is heard and valued.</p>
            <p className='text-base md:text-lg text-background text-center md:text-start' >Whether it’s enhancing workplace communication or refining executive-level messaging, this program equips your organization with the tools to communicate effectively and thrive in any environment.</p>
            <button onClick={openCalendly} className='bg-thrice text-background sm:text-xl hover:bg-tritary hover:text-primary text-base px-2 py-1 sm:px-5 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Book Faz To Speak</button>
          </div>
        </div>
      </div>
 {/* Section 3 */}
      <div className="w-full min-h-screen flex flex-col gap-4 pt-16 justify-center items-center md:justify-start relative">

        <div className="relative w-full min-h-full px-4 md:px-12 md:pl-20 py-16 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start bg-background gap-6">
          <div className="relative w-full md:w-[48%] h-full flex flex-col gap-4 items-center md:items-start justify-center">
            <h2 className='text-center md:text-start text-3xl sm:text-4xl md:text-5xl text-primary font-bold tracking-wide'>
            Build Teams That Thrive
            </h2>
            <h2 className='text-lg sm:text-xl text-primary font-semibold text-center tracking-wider'>
            Unity. Collaboration. Success.
            </h2>
            <p className='text-base md:text-lg text-primary text-center md:text-start' >Teams that work well together achieve extraordinary results. Dr. Faz Mehmood’s dynamic team-building workshops are designed to inspire cooperation, resolve conflicts, and create an environment of trust and mutual respect.</p>
            <p className='text-base md:text-lg text-primary text-center md:text-start' >Through interactive activities and practical strategies, participants will learn how to harness individual strengths, embrace diversity, and work towards shared goals. The sessions focus on fostering strong interpersonal relationships, improving problem-solving skills, and enhancing team dynamics to maximize productivity..</p>
            <p className='text-base md:text-lg text-primary text-center md:text-start' >By the end of the program, your team will leave with actionable tools to create a high-performing, cohesive unit ready to tackle challenges and achieve remarkable outcomes together. Transform your workplace into a thriving ecosystem of collaboration and success.</p>
            <button onClick={openCalendly} className='bg-thrice text-background sm:text-xl hover:bg-tritary hover:text-primary text-base px-2 py-1 sm:px-5 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Book Faz To Speak</button>
          </div>
          <div className="w-full relative md:w-[48%] min-h-full flex items-start justify-center">
            <img src="/is1.webp" className='w-full md:w-[80%] h-[60%] md:h-[50%] rounded-lg' alt="" />
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="w-full min-h-screen md:min-h-[60vh] bg-[url('/3.webp')] bg-cover bg-center relative flex items-center justify-center md:justify-start">
        <div className="absolute w-full min-h-full bg-primary bg-opacity-70 z-10"></div>
        <div className="relative z-[18] flex flex-col gap-4 items-center justify-center md:items-start w-full md:w-[70%] px-4 md:px-40 py-10">
          <h2 className='w-full text-2xl md:text-3xl lg:text-4xl font-extrabold text-background [text-shadow:_2px_4px_4px_#000] text-center md:text-start'>Book Faz Now To Make Your Life Positive</h2>
          <p className='text-lg md:text-xl text-center md:text-start text-background font-light'>Empowering leaders with the skills to excel in leadership, teamwork, and success in today’s competitive world.</p>
          <button onClick={openCalendly} className='bg-thrice text-background sm:text-xl hover:bg-tritary hover:text-primary text-base px-2 py-1 sm:px-5 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Book Faz To Speak</button>
        </div>
      </div>
    </div>
  )
}

export default CorporateTraining