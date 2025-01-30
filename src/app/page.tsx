import React from 'react';
import Image from 'next/image';
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
    imageSrc: '/images/website_landing_eldon.png',
    backgroundColor: '#4fbafe',
    top: { left: 25, right: 15 },
    bottom: { left: 65, right: 75 },
    content: (
      <div className="relative flex flex-col items-center md:items-start md:-translate-x-[100%] bottom-[-50px]">
        <h1 className="text-[150px] text-[#ffea00] md:ml-[10vw] max-md:text-[84px] text-center md:text-left font-bebasneue">
          April 7-11
        </h1>
        <div className="mt-[-25px] md:ml-[10vw] max-md:mt-4 text-center md:text-left">
          <div
            className="md:bg-gradient-to-r from-[#000000cc] to-transparent max-md:bg-none inline-block py-1 px-2 font-centurygothic md:text-[44px]"
            style={{ maxWidth: 'fit-content' }}
          >
            <p className="text-4xl text-[#4fbafe] max-md:text-5xl">Eldon Building</p>
            <p className="text-2xl text-white mt-1 max-md:text-2xl">University of Portsmouth</p>
          </div>
        </div>
        <div className="mt-2 text-center md:text-left md:ml-[10vw]">
          <a
            href="https://maps.app.goo.gl/ShWvsanb4n4XRynJ8"
            target="_blank"
            className="font-black text-xl underline inline-block text-[#4fbafe] hover:text-white font-europagrotesk uppercase"
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
      <div className="relative p-8 lg:bottom-[-300px] lg:left-[-350px] bottom-[180px] w-full section-content mobile-scale px-4 flex justify-center lg:block">
        <div className="w-full max-w-screen-lg text-center md:text-left">
          <h1 className="text-6xl md:text-6xl text-white font-bold uppercase font-europagrotesk">
            Tickets available&nbsp;<span className="text-[#ffea00]">now</span>!
          </h1>
  
          <p className="text-[21px]/[28px] text-white mb-4 mt-9 font-centurygothic md:text-[21px]/[27px]">
            Whether you&apos;d like to just pop in for a day, or stick around and have fun for the
            entire duration, we have ticket options that accommodate all! Browse and choose the
            one that suits your needs best!
          </p>
          <div className="mt-[100px] max-md:mt-[70px]">
            <a
              href="https://tickets.gtamarathon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffea00] text-black py-[3px] px-4 font-bold md:text-[45px] text-[25px] inline-block hover:bg-yellow-300 transition uppercase font-europagrotesk"
            >
              Get Your Tickets here!
            </a>
          </div>
  
          <div className="hidden md:block absolute left-[975px] top-[-450px] w-[600px] h-[500px]">
            <Image src="/images/website_landing_ticket.png" alt="Tickets Example" className="w-[275%] h-[275%] object-contain" width={687} height={368} />
          </div>
        </div>
      </div>
    ),
  },  
  {
    id: 'charity',
    imageSrc: '/images/website_warchild_bg.png',
    backgroundColor: '#4fbafe',
    backgroundOffset: "center 650px",
    top: { left: 75, right: 65 },
    bottom: { left: 80, right: 90 },
    content: (
      <div className="relative bottom-[-300px] flex justify-center items-center p-8 section-content mobile-scale px-4">
        <div className="w-full max-w-screen-lg px-4 text-left lg:text-right">
          <h1 className="text-[90px] text-white font-bold mb-12 uppercase font-bebasneue max-lg:text-6xl tracking-wide">
            Aiding the less fortunate
          </h1>
          <p className="text-[21px]/[27px] text-white mb-8 mt-[-20px] font-centurygothic">
            Children every year are affected by war, and this situation is far from improving.<br /> As such, every donation contributed to
            <span className="font-slopeopera"> GTA<span className="font-slopeopera text-[#4fbafe]">M</span> 2025</span> is directly forwarded to War Child, 
            a charitable organization that aims to protect and aid the most innocent, and by far most vulnerable victims of war; the children. 
            Help us in supporting their cause by donating to the marathon, or directly to them through&nbsp;
            <a 
              href="https://www.warchild.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400"
            >
              their website
            </a>.
          </p>
          <div className="flex items-center justify-center lg:justify-end mt-12 mb-4">
            <a
              href="https://www.warchild.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffea00] text-black py-[3px] px-4 inline-block hover:bg-yellow-300 transition uppercase font-europagrotesk text-[45px] font-black max-md:text-6xl"
            >
              Donate
            </a>
            <div className="ml-12 w-[15%] h-auto max-md:hidden">
              <Image
                src="/images/website_warchild_logo.png"
                alt="War Child Logo"
                className="w-full h-full object-contain"
                width={198} height={198}
              />
            </div>
          </div>
        </div>
      </div>
    ),
  }
  ,
  {
    id: 'merch',
    backgroundColor: '#12222c',
    top: { left: 80, right: 80 },
    bottom: { left: 75, right: 65 },
    content: (
      <div className="relative left-[-350px] lg:bottom-[-370px] bottom-[-370px] p-8 section-content mobile-scale px-4">
        <div className="max-lg:text-center max-lg:w-full">
          <h1 className="text-[30px] md:text-[48px] text-[#4fbafe] font-bold mb-6 uppercase font-europagrotesk">
            Feel like repping the brand?
          </h1>
          <p className="text-[18px]/[23px] text-white mb-4 font-centurygothic md:text-[21px]/[27px]">
            If you like what we do, check out our wide selection of merchandise ranging from hoodies and T-shirts, all the way through mugs and deskmats!
            Every purchase directly supports us in staying afloat, and thus being able to bring you these productions year after year.
            Not to mention, according to our customers, they look stylish as hell!
            <br /> <br />
            Browse our all-year-round selection, or wait a little for the seasonal arrivals coming soon!
          </p>
          <div className="mt-[100px]">
            <a
              href="https://merch.gtamarathon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffea00] text-black py-[3px] px-4 font-bold inline-block hover:bg-yellow-300 transition uppercase font-europagrotesk text-[45px]"
            >
              Go to store
            </a>
          </div>
        </div>
        <div className="lg:absolute max-lg:hidden left-[1030px] top-[10px] w-[600px] h-[450px]">
          <Image
            src="/images/website_merch.png"
            alt="Merch Example"
            className="w-full h-full object-contain"
            width={530} height={454}
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
      <div className="relative p-8 section-content px-4 
          lg:absolute lg:bottom-[-470px] 
          bottom-[-300px]
          flex flex-col lg:items-end items-center 
          lg:text-right text-center w-full lg:w-[800px] max-w-none">
        <h1 className="text-[48px] text-black font-bold mb-6 uppercase font-europagrotesk 
          md:max-w-[70vw] max-md:w-full max-md:text-3xl"
        >
          Read the official attendee guide
        </h1>
        <p className="text-[20px] text-black mb-4 font-centurygothic 
          md:max-w-[70vw] max-md:w-full max-md:text-base w-[125%] md:text-[21px]/[27px]"
        >
          Let a local offer you the best tips for travel, lodging, food, and everything in-between!
          Avoid timeloss from Greggs to Tesco so that you don&apos;t miss your favorite runs back at the venue!
        </p>
        <div className="md:absolute md:left-[-784px] md:top-1/2 md:transform md:-translate-y-1/2 max-md:w-full">
          <a
            href="https://gist.github.com/Joshimuz/d6584ef380e04447639c27b909003e52"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffea00] text-black py-[3px] px-4 font-black inline-block 
            hover:bg-yellow-300 transition uppercase font-europagrotesk 
            text-[45px] max-md:text-lg max-md:mt-4 max-md:w-full"
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
      <div className="relative lg:bottom-[-350px] bottom-[-350px] p-8 section-content px-4 flex flex-col items-center text-center">
        <h1 className="text-[50px] text-white font-bold uppercase max-md:text-3xl font-europagrotesk">
          It&apos;s your time to shine
        </h1>
        <p className="text-[20px] text-white mt-5 mb-8 max-md:text-base font-centurygothic">
          If you want to contribute to the event, either from the comfort of your home, or in person at the Eldon Building, make sure to keep an eye on our socials for updates regarding submission dates!
        </p>
        <div className="mt-12">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffea00] text-black py-[3px] px-4 font-bold text-[45px] inline-block hover:bg-yellow-300 transition uppercase max-md:text-lg font-europagrotesk pointer-events-none"
          >
            Coming soon
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
      <div className="relative p-8 lg:bottom-[-350px] bottom-[-350px] section-content mobile-scale">
        <div className="flex w-full flex-col lg:flex-row justify-start max-w-screen-2xl px-4">
          <div className="flex-1 text-left max-lg:text-center lg:left-[-550px]">
            <h1 className="text-5xl text-[#4fbafe] font-bold mb-6 font-europagrotesk uppercase">Follow Us</h1>
            <p className="text-lg text-white mb-4 font-centurygothic w-5/6">
              Whether you consume <span className="font-slopeopera"> GTA<span className="font-slopeopera text-[#4fbafe]">M</span></span> on{' '}
              <a
                href="https://www.twitch.tv/gtamarathon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4fbafe] underline"
              >
                Twitch
              </a>
              , or after the fact on{' '}
              <a
                href="https://www.youtube.com/@gtamarathon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4fbafe] underline"
              >
                YouTube
              </a>
              , you can find us here! For updates regarding the marathon, you can join our brand new{' '}
              <a
                href="https://discord.gg/QBM57q5M5E"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4fbafe] underline"
              >
                Discord server
              </a>
              , follow us on{' '}
              <a
                href="https://x.com/gtamarathon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4fbafe] underline"
              >
                X (formerly Twitter)
              </a>
              , and now even on{' '}
              <a
                href="https://bsky.app/profile/gtamarathon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4fbafe] underline"
              >
                Bluesky
              </a>
              !
            </p>
          </div>
          <div className="flex-1 lg:pl-10 mt-8 lg:mt-0 text-right max-lg:text-center">
            <h1 className="text-5xl text-[#4fbafe] font-bold mb-8 font-europagrotesk uppercase">Contact Us</h1>
            <p className="text-lg text-white mb-4 font-centurygothic">
              For business and other inquiries: gta<span className="text-[#4fbafe]">marathon</span>@gmail.com
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
