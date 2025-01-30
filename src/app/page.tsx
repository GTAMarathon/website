import React from 'react';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import BackToTop from '@/components/BackToTop';

const links = [
  { id: 'dates', label: 'Dates' },
  { id: 'tickets', label: 'Tickets' },
  { id: 'charity', label: 'Charity' },
  { id: 'merch', label: 'Merch' },
  { id: 'guide', label: 'Attendee Guide' },
  { id: 'runs', label: 'Submissions' },
  { id: 'contact', label: 'Stay in Touch' },
];

const sections = [
  {
    id: 'hero',
    backgroundColor: '#12222c',
    top: { left: 0, right: 0 },
    bottom: { left: 25, right: 15 },
    content: (
      <h1 className="text-5xl text-white uppercase font-europagrotesk">
        It&apos;s time to <span className="text-[#ffea00]">meet</span>.
      </h1>
    ),
  },
  {
    id: 'dates',
    imageSrc: '/images/website_building_bg.png',
    backgroundColor: '#4fbafe',
    top: { left: 25, right: 15 },
    bottom: { left: 65, right: 75 },
    content: (
      <div className="relative flex flex-col items-center md:items-start md:-translate-x-[100%]">
        <h1 className="text-[150px] text-[#ffea00] md:ml-[10vw] max-md:text-6xl text-center md:text-left font-europagrotesk">
          April 7-11
        </h1>
        <div className="mt-6 md:ml-[10vw] max-md:mt-4 text-center md:text-left">
          <div
            className="bg-gradient-to-r from-[#000000cc] to-transparent inline-block py-1 px-2 font-centurygothic"
            style={{ maxWidth: 'fit-content' }}
          >
            <p className="text-4xl text-blue-500 max-md:text-2xl">Eldon Building</p>
            <p className="text-2xl text-white mt-1 max-md:text-lg">University of Portsmouth</p>
          </div>
        </div>
        <div className="mt-2 text-center md:text-left md:ml-[10vw]">
          <a
            href="https://maps.app.goo.gl/ShWvsanb4n4XRynJ8"
            target="_blank"
            className="font-black text-xl underline inline-block text-blue-500 hover:text-blue-400 font-centurygothic"
            style={{
              position: 'relative',
              zIndex: 9999,
              background: 'transparent',
              padding: '1px 1px',
            }}
          >
            Click for Directions
          </a>
        </div>
      </div>
    ),
  },  
  {
    id: 'tickets',
    backgroundColor: '#12222c',
    top: { left: 65, right: 75 },
    bottom: { left: 75, right: 65 },
    content: (
      <div className="relative p-8 md:bottom-[-300px] md:left-[-350px] bottom-[-240px] w-full section-content mobile-scale px-4 flex justify-center md:block">
        <div className="w-full max-w-screen-lg text-center md:text-left">
          <h1 className="text-4xl md:text-6xl text-white font-bold uppercase font-europagrotesk">
            Tickets available <span className="text-[#ffea00]">now</span>!
          </h1>
  
          <p className="text-lg text-white mb-4 mt-5 font-centurygothic md:text-[20px]">
            Whether you&apos;d like to just pop in for a day, or stick around and have fun for the
            entire duration, we have ticket options that accommodate all! Browse and choose the
            one that suits your needs best!
          </p>
  
          <div className="mt-[100px]">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffea00] text-black py-5 px-6 font-bold text-3xl inline-block hover:bg-yellow-300 transition uppercase font-europagrotesk"
            >
              Get Your Tickets here!
            </a>
          </div>
  
          <div className="hidden md:block absolute left-[900px] top-[10px] w-[400px] h-[300px]">
            <img src="/images/logo.png" alt="Tickets Example" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    ),
  },  
  {
    id: 'charity',
    imageSrc: '/images/website_warchild_bg.png',
    backgroundColor: '#4fbafe',
    backgroundOffset: "center 350px",
    top: { left: 75, right: 65 },
    bottom: { left: 80, right: 90 },
    content: (
      <div className="relative bottom-[-300px] right-[50px] p-8 section-content mobile-scale px-4">
        <div className="w-full max-w-screen-lg text-right">
          <h1 className="text-[76px] text-white font-bold mb-12 uppercase font-bebasneue">
            Aiding the less fortunate
          </h1>
          <p className="text-lg text-white mb-8 font-centurygothic">
            Children every year are affected by war, and not only has this not gotten better recently, 
            but as we know, it&apos;s gotten a lot, lot, worse. Every donation contributed to 
            <span className="font-slopeopera"> GTA<span className="font-slopeopera text-[#4fbafe]">M</span>2025</span> is directly forwarded to War Child, 
            a charitable organization that aims to protect and aid the most innocent, and by far most vulnerable victims of war; the children. 
            Help us in supporting their cause by donating to the marathon, or directly to them through 
            <a 
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className='underline text-blue-400'> their website</a>.
          </p>
          <div className="flex items-center justify-end mt-12 mb-4">
          <div>
              <a
                href="https://www.warchild.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ffea00] text-black py-3 px-6 text-xl inline-block hover:bg-yellow-300 transition uppercase font-europagrotesk text-[40px] font-black"
              >
                Donate
              </a>
            </div>
            <div className="ml-12 w-[15%] h-auto">
              <img
                src="/images/website_warchild_logo.png"
                alt="Tickets Example"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    ),
  },  
  {
    id: 'merch',
    backgroundColor: '#12222c',
    top: { left: 80, right: 80 },
    bottom: { left: 75, right: 65 },
    content: (
      <div className="relative bottom-[-350px] left-[-400px] p-8 section-content mobile-scale px-4">
        <h1 className="text-5xl text-[#4fbafe] font-bold mb-6 uppercase font-europagrotesk">
          Feel like repping the brand?
        </h1>
        <p className="text-lg text-white mb-4 font-centurygothic">
          If you like what we do, check out our wide range of merchandise ranging from hoodies and T-shirts, all the way through mugs and deskmats!
          Every purchase directly supports us in staying afloat, and thus being able to bring you these productions year after year.
          Not to mention, according to our customers, they look stylish as hell!
          <br /> <br />
          Browse our all-year-round selection, or wait a little for the seasonal arrivals coming soon!
        </p>

        <div className="mt-8">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffea00] text-black py-3 px-6 font-bold text-xl inline-block hover:bg-yellow-300 transition uppercase font-europagrotesk text-[40px]"
          >
            Go to store
          </a>
        </div>
        <div className="absolute left-[950px] top-[10px] w-[600px] h-[450px]">
          <img
            src="/images/website_merch.png"
            alt="Merch Example"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'guide',
    backgroundColor: '#4fbafe',
    top: { left: 75, right: 65 },
    bottom: { left: 40, right: 50 },
    content: (
      <div 
        className="relative p-8 section-content px-4 
          md:absolute md:bottom-[-515px] md:right-[-650px] 
          bottom-[-250px]
          flex flex-col md:items-end items-center 
          md:text-right text-center w-full md:w-[800px] max-w-none"
      >
        <h1 className="text-[45px] text-black font-bold mb-6 uppercase font-europagrotesk 
          md:max-w-[70vw] max-md:w-full max-md:text-3xl"
        >
          Read the official attendee guide
        </h1>
        <p className="text-[20px] text-black mb-4 font-centurygothic 
          md:max-w-[70vw] max-md:w-full max-md:text-base"
        >
          Let a local offer you the best tips for travel, lodging, food, and everything in-between!
          Avoid timeloss from Greggs to Tesco so that you don&apos;t miss your favorite runs back at the venue!
        </p>
        <div className="md:absolute md:left-[-550px] md:top-1/2 md:transform md:-translate-y-1/2 max-md:w-full">
          <a
            href="https://gist.github.com/Joshimuz/d6584ef380e04447639c27b909003e52"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffea00] text-black py-3 px-6 font-black text-xl inline-block 
            hover:bg-yellow-300 transition uppercase font-europagrotesk 
            text-[40px] max-md:text-lg max-md:mt-4 max-md:w-full"
          >
            Jump to guide
          </a>
        </div>
      </div>
    ),
  },  
  {
    id: 'runs',
    backgroundColor: '#12222c',
    top: { left: 70, right: 80 },
    bottom: { left: 75, right: 65 },
    content: (
      <div className="relative bottom-[-350px] p-8 section-content px-4 flex flex-col items-center text-center">
        <h1 className="text-[50px] text-white font-bold uppercase max-md:text-3xl font-europagrotesk">
          It&apos;s your time to shine
        </h1>
        <p className="text-[20px] text-white mt-8 mb-8 max-md:text-base font-centurygothic">
          If you want to contribute to the event, either from the comfort of your home, or in person at the Eldon Building, we await your submissions with open arms!
          Submit your best and craziest ideas, let&apos;s make this one a truly special occasion!
        </p>
        <div className="mt-12">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffea00] text-black py-3 px-6 font-bold text-[40px] inline-block hover:bg-yellow-300 transition uppercase max-md:text-lg font-europagrotesk"
          >
            Submit
          </a>
        </div>
      </div>
    ),
  },
  {
    id: 'contact',
    backgroundColor: 'black',
    top: { left: 75, right: 65 },
    bottom: { left: 70, right: 80 },
    content: (
      <div className="relative bottom-[-350px] section-content mobile-scale w-[175%] left-[-400px]">
        <div className="flex w-full justify-between max-w-screen-2xl px-4">
          <div className="flex-1 pr-8 text-left">
            <h1 className="text-5xl text-[#1E90FF] font-bold mb-6 font-europagrotesk">Follow Us</h1>
            <p className="text-lg text-white mb-4 font-centurygothic w-5/6">
              Whether you consume GTAM on{' '}
              <a
                href="https://www.twitch.tv/gtamarathon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Twitch
              </a>
              , or after the fact on{' '}
              <a
                href="https://www.youtube.com/@gtamarathon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                YouTube
              </a>
              , you can find us here! For updates regarding the marathon, you can join our brand new{' '}
              <a
                href="https://discord.gg/QBM57q5M5E"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Discord server
              </a>
              , follow us on{' '}
              <a
                href="https://x.com/gtamarathon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                X (formerly Twitter)
              </a>
              , and now even on{' '}
              <a
                href="https://bsky.app/profile/gtamarathon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Bluesky
              </a>
              !
            </p>
          </div>
          <div className="flex-1 pl-10 text-right">
            <h1 className="text-5xl text-[#1E90FF] font-bold mb-8 font-europagrotesk">Contact Us</h1>
            <p className="text-lg text-white mb-4 font-centurygothic">
              For business and other inquiries: gta<span className="text-[#1E90FF]">marathon@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <BackToTop />
        </div>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar links={links} logoSrc="/images/logo.png" />
      {sections.map((section) => (
        <Section key={section.id} {...section}>
          {section.content}
        </Section>
      ))}
    </div>
  );
}
