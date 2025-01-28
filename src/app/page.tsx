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
      <h1 className="text-5xl text-white uppercase">
        It's time to <span className="text-[#fcf403]">meet</span>.
      </h1>
    ),
  },
  {
    id: 'dates',
    imageSrc: '/images/building_background.png',
    backgroundColor: '#12222c',
    top: { left: 25, right: 15 },
    bottom: { left: 65, right: 75 },
    content: (
      <div
        className="relative"
        style={{
          left: '-48vw',
          marginRight: '-48vw',
          isolation: 'isolate',
          pointerEvents: 'auto',
          zIndex: 9999,
        }}
      >
        <h1 className="text-[#fcf403] text-9xl ml-[5vw]">April 7-11</h1>
        <div
          className="mt-6 ml-[5vw]"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.8) 30%, transparent 100%)',
            display: 'inline-block',
            padding: '2px 2px',
          }}
        >
          <p className="text-4xl text-blue-500">Eldon Building</p>
          <p className="text-2xl text-white mt-1">University of Portsmouth</p>
        </div>
        <div className="ml-[5vw] mt-2">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-xl underline inline-block text-blue-500 hover:text-blue-400"
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
    backgroundColor: '#4fbafe',
    top: { left: 65, right: 75 },
    bottom: { left: 75, right: 65 },
    content: (
      <div className="relative p-8 bottom-[-200px] w-full">
        <h1 className="text-5xl text-white font-bold mb-6 uppercase">Tickets available <span className="text-[#fcf403]">now</span>!</h1>
  
        <p className="text-lg text-white mb-4">
          Whether you'd like to just pop in for a day, or stick around and have fun for the
          entire duration, we have ticket options that accommodate all! Browse and choose the
          one that suits your needs best!
        </p>
  
        <div className="mt-8">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black py-3 px-6 font-bold text-xl inline-block hover:bg-yellow-300 transition uppercase"
          >
            Get Your Tickets here!
          </a>
        </div>
        <div className="absolute left-[900px] top-[10px] w-[400px] h-[300px]">
          <img
            src="/images/logo.png"
            alt="Tickets Example"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'charity',
    backgroundColor: '#12222c',
    top: { left: 75, right: 65 },
    bottom: { left: 65, right: 75 },
    content: (
      <div className="relative bottom-[-200px] p-8">
        <h1 className="text-5xl text-white font-bold mb-6 uppercase">Aiding the less fortunate</h1>
        <p className="text-lg text-white mb-4">
          Children every year are affected by war, and not only has this not gotten better recently, but as we know, it's gotten a lot, lot, worse. 
          Every donation contributed to GTAM 2025 is directly forwarded to War Child, a charitable organization that aims to protect and aid the most innocent, 
          and by far most vulnerable victims of war; the children. Help us in supporting their cause by donating to the marathon, or directly to them through their website.
        </p>
        <div className="mt-8">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black py-3 px-6 font-bold text-xl inline-block hover:bg-yellow-300 transition uppercase"
          >
            Donate
          </a>
        </div>
        <div className="absolute left-[900px] top-[10px] w-[400px] h-[300px]">
          <img
            src="/images/logo.png"
            alt="Tickets Example"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'merch',
    backgroundColor: '#4fbafe',
    top: { left: 65, right: 75 },
    bottom: { left: 75, right: 60 },
    content: (
      <div className="relative bottom-[-200px] p-8">
        <h1 className="text-5xl text-white font-bold mb-6 uppercase">Feel like repping the brand?</h1>
        <p className="text-lg text-white mb-4">
          If you like what we do, check out our wide range of merchandise ranging from hoodies and T-shirts, all the way through mugs and deskmats!
          Every purchase directly supports us in staying afloat, and thus being able to bring you these productions year after year.
          Not to mention, according to our customers, they look stylish as hell!
          <br />
          Browse our all-year-round selection, or wait a little for the seasonal arrivals coming soon!
        </p>
        <div className="mt-8">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black py-3 px-6 font-bold text-xl inline-block hover:bg-yellow-300 transition uppercase"
          >
            Go to store
          </a>
        </div>
        <div className="absolute left-[900px] top-[10px] w-[400px] h-[300px]">
          <img
            src="/images/logo.png"
            alt="Tickets Example"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'guide',
    backgroundColor: '#12222c',
    top: { left: 75, right: 60 },
    bottom: { left: 30, right: 50 },
    content: (
      <div className="relative bottom-[-300px] p-8">
        <h1 className="text-5xl text-white font-bold mb-6 uppercase">Read the official attendee guide</h1>
        <p className="text-lg text-white mb-4">
          Let a local offer you the best tips for travel, lodging, food, and everything in-between!
          Avoid timeloss from Greggs to Tesco so that you don't miss your favorite runs back at the venue!
        </p>
      
        <div className="absolute left-[-250px] top-1/2 transform -translate-y-1/2">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black py-3 px-6 font-bold text-xl inline-block hover:bg-yellow-300 transition uppercase"
          >
            Jump to guide
          </a>
        </div>
      </div>
    ),
  },  
  {
    id: 'runs',
    backgroundColor: '#4fbafe',
    top: { left: 30, right: 50 },
    bottom: { left: 60, right: 30 },
    content: (
      <div className="relative bottom-[-150px] p-8">
        <h1 className="text-5xl text-white font-bold mb-6 uppercase">It's your time to shine</h1>
        <p className="text-lg text-white mb-4">
          If you want to contribute to the event, either from the comfort of your home, or in person at the Eldon Building, we await your submissions with open arms!
          Submit your best and craziest ideas, let's make this one a truly special occasion!
        </p>
        <div>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black py-3 px-6 font-bold text-xl inline-block hover:bg-yellow-300 transition uppercase"
          >
            Submit
          </a>
        </div>
      </div>
    ),
  },
  {
    id: 'contact',
    backgroundColor: '#12222c',
    top: { left: 40, right: 30 },
    bottom: { left: 110, right: 120 },
    content: (
      <div className="relative p-8 flex flex-col">
        <div className="flex justify-between">
          <div className="w-1/2 pr-8">
            <h1 className="text-5xl text-white font-bold mb-6">Follow Us</h1>
            <p className="text-lg text-white mb-4">
              Whether you consume GTAM on Twitch, or after the fact on YouTube, you can find us here! 
              For updates regarding the marathon, you can join our brand new Discord server, follow us on X (formerly Twitter), and now even on Bluesky!
            </p>
          </div>

          <div className="w-1/2 pl-8">
            <h1 className="text-5xl text-white font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-white mb-4">
              For business and other inquiries: gtamarathon@gmail.com
            </p>
          </div>
        </div>
        <div className="mt-12">
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
