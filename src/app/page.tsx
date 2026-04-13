'use client';

import React, { useEffect, useState } from 'react';
import NavbarDesktop from '@/components/NavbarDesktop';
import NavbarMobile from '@/components/NavbarMobile';
import SectionDesktop from '@/components/SectionDesktop';
import SectionMobile from '@/components/SectionMobile';
import BackToTop from '@/components/BackToTop';
import Image from 'next/image';

const links = [
  { id: 'dates', label: 'Dates' },
  { id: 'tickets', label: 'Tickets' },
  { id: 'charity', label: 'Charity' },
  { id: 'merch', label: 'Merch' },
  { id: 'guide', label: 'Attendee Guide' },
  { id: 'runs', label: 'Schedule' },
  { id: 'contact', label: 'Stay in Touch' },
];

const sectionsMobile = [
  {
    id: 'hero',
    backgroundColor: '#12222c',
    top: { left: 0, right: 0 },
    bottom: { left: 25, right: 15 },
    verticalOffset: 3,
    content: (
      <h1 className="text-5xl text-white uppercase font-europagrotesk">
        We are <span className="text-gtam-yellow">back</span>.
      </h1>
    ),
  },
  {
    id: 'dates',
    imageSrc: '/images/website_landing_eldon.png',
    backgroundColor: '#12222c',
    top: { left: 25, right: 15 },
    bottom: { left: 65, right: 75 },
    content: (
      <div className="flex flex-col items-center text-center w-full">
        <h1 className="text-[84px] text-gtam-yellow font-bebasneue leading-none">
          April 13-17
        </h1>
        <div className="mt-4 flex flex-col items-center w-full">
          <div className="inline-block py-1 px-2 font-centurygothic xl:text-[44px] w-full">
            <p className="text-5xl text-gtam-blue">Eldon Building</p>
            <p className="text-2xl text-white mt-1">University of Portsmouth</p>
          </div>
        </div>
        <div className="mt-2 w-full flex justify-center">
          <a
            href="https://maps.app.goo.gl/ShWvsanb4n4XRynJ8"
            target="_blank"
            rel="noopener noreferrer"
            className="font-black text-xl underline inline-block text-gtam-blue hover:text-white font-europagrotesk uppercase"
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
      <div className="w-full section-content px-4">
        <h1 className="text-4xl text-white font-bold uppercase font-europagrotesk">
          Tickets available&nbsp;<span className="text-gtam-yellow">now</span>!
        </h1>
        <p className="text-[18px]/[24px] text-white mb-4 mt-9 font-centurygothic">
          Whether you&apos;d like to just pop in for a day, or stick around and have fun for the
          entire duration, we have ticket options that accommodate all! Browse and choose the
          one that suits your needs best!
        </p>

        <div className="mt-[70px]">
          <a
            href="https://tickets.gtamarathon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gtam-yellow text-black py-[3px] px-4 font-bold text-[20px] inline-block uppercase font-europagrotesk transition duration-300 ease-in-out hover:bg-white hover:scale-110"
          >
            Get Your Tickets here!
          </a>
        </div>
      </div>
    ),
  },  
  {
    id: 'charity',
    imageSrc: '/images/website_redcross_bg.png',
    backgroundColor: '#12222c',
    backgroundOffset: "center 650px",
    top: { left: 75, right: 65 },
    bottom: { left: 80, right: 90 },
    contentAlign: 'right' as const,
    content: (
      <div className="w-full section-content px-4 text-right">
        <h1 className="text-5xl text-white font-bold mb-8 uppercase font-bebasneue tracking-wide">
          Aiding the less fortunate
        </h1>
        <p className="text-[18px]/[24px] text-white mb-8 font-centurygothic">
          Communities every year are affected by conflict, disasters and humanitarian emergencies, with the need for support remaining as urgent as ever. As such, every donation contributed to
          <span className="font-slopeopera"> GTA<span className="font-slopeopera text-gtam-blue">M</span> 2026</span> is directly forwarded to British Red Cross,
          a humanitarian organization that provides vital assistance to people in crisis around the world, offering emergency aid and medical support to those most vulnerable.
          Help us in supporting their cause by donating to the marathon, or directly to them through&nbsp;
          <a 
          href="https://www.redcross.org.uk/"
          target="_blank"
          rel="noopener noreferrer"
          className='underline text-gtam-blue'>their website</a>.
        </p>
        <div className="flex flex-col items-end gap-6">
          <div className="flex items-center justify-end gap-12">
            <div className="w-[39%] h-auto">
              <Image
                src='/images/website_redcross_logo.png'
                alt="British Red Cross Logo"
                className="w-full h-full object-contain"
                width={198}
                height={198}
              />
            </div>
            <div className="w-[15%] h-auto">
              <Image
                src='/images/website_q4k_logo.png'
                alt="British Red Cross Logo"
                className="w-full h-full object-contain"
                width={198}
                height={198}
              />
            </div>
          </div>
          <div>
            <a
              href="https://tilt.fyi/WLchNfsBFS"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gtam-yellow text-black py-3 px-6 text-[40px] font-black inline-block uppercase font-europagrotesk transition duration-300 ease-in-out hover:bg-white hover:scale-110"
            >
              Donate
            </a>
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
      <div className="w-full section-content px-4">
        <h1 className="text-4xl text-gtam-blue font-bold mb-6 uppercase font-europagrotesk">
          Feel like repping the brand?
        </h1>
        <p className="text-[16px]/[21px] text-white mb-4 font-centurygothic">
          If you like what we do, check out our wide selection of merchandise ranging from hoodies and T-shirts, all the way through mugs and deskmats!
          Every purchase directly supports us in staying afloat, and thus being able to bring you these productions year after year.
          Not to mention, according to our customers, they look stylish as hell!
          <br /> <br />
          Browse our all-year-round selection, or check out our seasonal exclusives now!
        </p>

        <div className="mt-8">
          <a
            href="https://gtamarathon-shop.fourthwall.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gtam-yellow text-black py-3 px-6 font-bold text-[40px] inline-block uppercase font-europagrotesk transition duration-300 ease-in-out hover:bg-white hover:scale-110"
          >
            Go to store
          </a>
        </div>
      </div>
    ),
  },
  {
    id: 'guide',
    backgroundColor: '#4fbafe',
    top: { left: 75, right: 65 },
    bottom: { left: 50, right: 60 },
    contentAlign: 'center' as const,
    content: (
      <div className="flex flex-col items-center text-center w-full section-content px-4">
        <h1 className="text-4xl text-black font-bold mb-4 uppercase font-europagrotesk">
          Read the official attendee guide
        </h1>
        <p className="text-[16px]/[21px] text-black mb-4 font-centurygothic">
          Let a local offer you the best tips for travel, lodging, food, and everything in-between!
          Avoid timeloss from Greggs to Tesco so that you don&apos;t miss your favorite runs back at the venue!
        </p>
        <div className="mt-4 w-full">
          <a
            href="https://gist.github.com/Joshimuz/7241b552c078157eab93b2db3c056738"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gtam-yellow text-black py-3 px-6 font-bold text-[40px] inline-block uppercase font-europagrotesk transition duration-300 ease-in-out hover:bg-white hover:scale-110"
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
      <div className="flex flex-col items-center text-center section-content px-4">
        <h1 className="text-4xl text-white font-bold uppercase font-europagrotesk">
          SCHEDULE
        </h1>
        <p className="text-[18px]/[24px] text-white mt-8 mb-8 font-centurygothic">
          The long awaited list is here. Click to see the official schedule for 
          <span className="font-slopeopera"> GTA<span className="font-slopeopera text-gtam-blue">M</span> 2026</span>!
          Times are subject to change, so check back here occasionally to stay up to date with the runs on show!
        </p>
        <div className="mt-12">
          <a
            href="https://oengus.io/marathon/gtam2026/schedule/main"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gtam-yellow text-black py-3 px-6 font-bold text-[40px] inline-block uppercase font-europagrotesk transition duration-300 ease-in-out hover:bg-white hover:scale-110"
          >
            go to schedule
          </a>
        </div>
      </div>
    ),
  },
  {
    id: 'contact',
    backgroundColor: 'black',
    top: { left: 75, right: 65 },
    bottom: { left: 100, right: 110 },
    content: (
      <div>
        <div className="w-full section-content px-4 flex flex-col items-center">
          <div className="w-full max-w-2xl text-center mb-12">
            <h1 className="text-5xl text-gtam-blue font-bold mb-6 font-europagrotesk uppercase">Follow Us</h1>
            <p className="text-lg text-white mb-4 font-centurygothic">
              Whether you consume GTAM on{' '}
              <a
                href="https://www.twitch.tv/gtamarathon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gtam-blue underline"
              >
                Twitch
              </a>
              , or after the fact on{' '}
              <a
                href="https://www.youtube.com/@gtamarathon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gtam-blue underline"
              >
                YouTube
              </a>
              , you can find us here! For updates regarding the marathon, you can join our brand new{' '}
              <a
                href="https://discord.gg/QBM57q5M5E"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gtam-blue underline"
              >
                Discord server
              </a>
              , follow us on{' '}
              <a
                href="https://x.com/gtamarathon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gtam-blue underline"
              >
                X (formerly Twitter)
              </a>
              , and now even on{' '}
              <a
                href="https://bsky.app/profile/gtamarathon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gtam-blue underline"
              >
                Bluesky
              </a>
              !
            </p>
          </div>
          <div className="w-full max-w-2xl text-center mb-12">
            <h1 className="text-5xl text-gtam-blue font-bold mb-6 font-europagrotesk uppercase">Contact Us</h1>
            <p className="text-lg text-white mb-4 font-centurygothic">
              For business and other inquiries: gta<span className="text-gtam-blue">marathon</span>@gmail.com
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <BackToTop />
        </div>
      </div>
    ),
  },
];

const sectionsDesktop = [
  {
    id: 'hero',
    backgroundColor: '#12222c',
    top: { left: 0, right: 0 },
    bottom: { left: 25, right: 15 },
    verticalOffset: 3,
    content: (
      <h1 className="text-5xl text-white uppercase font-europagrotesk">
        We are<span className="text-gtam-yellow"> back</span>.
      </h1>
    ),
  },
  {
    id: 'dates',
    imageSrc: '/images/website_landing_eldon.png',
    backgroundColor: '#12222c',
    top: { left: 25, right: 15 },
    bottom: { left: 65, right: 75 },
    content: (
      <div className="flex flex-col items-center text-center w-full">
        <h1 className="text-[150px] text-gtam-yellow font-bebasneue leading-none">
          April 13-17
        </h1>
        <div className="mt-4 flex flex-col items-center w-full">
          <div className="inline-block py-1 px-2 font-centurygothic xl:text-[44px] w-full">
            <p className="text-4xl text-gtam-blue max-xl:text-5xl">Eldon Building</p>
            <p className="text-2xl text-white mt-1 max-xl:text-2xl">University of Portsmouth</p>
          </div>
        </div>
        <div className="mt-2 w-full flex justify-center">
          <a
            href="https://maps.app.goo.gl/ShWvsanb4n4XRynJ8"
            target="_blank"
            rel="noopener noreferrer"
            className="font-black text-xl underline inline-block text-gtam-blue hover:text-white font-europagrotesk uppercase"
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
      <div className="w-full section-content px-8 grid grid-cols-2 items-center gap-16">
        <div>
          <h1 className="text-6xl text-white font-bold uppercase font-europagrotesk">
            Tickets available&nbsp;<span className="text-gtam-yellow">now</span>!
          </h1>
          <p className="text-[21px]/[28px] text-white mb-4 mt-9 font-centurygothic">
            Whether you&apos;d like to just pop in for a day, or stick around and have fun for the
            entire duration, we have ticket options that accommodate all! Browse and choose the
            one that suits your needs best!
          </p>
          <div className="mt-[100px]">
            <a
              href="https://tickets.gtamarathon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gtam-yellow text-black py-[3px] px-4 font-bold xl:text-[45px] text-[25px] inline-block uppercase font-europagrotesk transition duration-300 ease-in-out hover:bg-white hover:scale-110"
            >
              Get Your Tickets here!
            </a>
          </div>
          </div>
          <div className="flex justify-center">
            <Image src="/images/website_landing_ticket.png" alt="Tickets Example" className="w-full h-auto object-contain" width={687} height={368} />
          </div>
        </div>
    ),
  },
  {
    id: 'charity',
    imageSrc: '/images/website_redcross_bg.png',
    backgroundColor: '#12222c',
    backgroundOffset: "center 650px",
    top: { left: 75, right: 65 },
    bottom: { left: 80, right: 90 },
    contentAlign: 'right' as const,
    content: (
      <div className="flex justify-center items-center section-content px-8">
        <div className="w-full max-w-screen-lg px-4 text-left lg:text-right">
        <h1 className="text-[min(90px,8vw)] text-white font-bold mb-12 uppercase font-bebasneue tracking-wide whitespace-nowrap w-full">
            Aiding the less fortunate
          </h1>
          <p className="text-[21px]/[27px] text-white mb-8 mt-[-20px] font-centurygothic">
            Communities every year are affected by conflict, disasters and humanitarian emergencies, with the need for support remaining as urgent as ever. As such, every donation contributed to
            <span className="font-slopeopera"> GTA<span className="font-slopeopera text-gtam-blue">M</span> 2026</span> is directly forwarded to British Red Cross,
            a humanitarian organization that provides vital assistance to people in crisis around the world, offering emergency aid and medical support to those most vulnerable.
            Help us in supporting their cause by donating to the marathon, or directly to them through&nbsp;
            <a
              href="https://www.redcross.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400"
            >
              their website
            </a>.
          </p>
          <div className="flex flex-col items-center lg:items-end mt-12 mb-4 gap-6">
            <div className="flex items-center justify-center lg:justify-end gap-14 max-xl:gap-6">
              <div className="w-[39%] h-auto max-xl:w-[22%]">
                <Image
                  src='/images/website_redcross_logo.png'
                  alt="British Red Cross Logo"
                  className="w-full h-full object-contain"
                  width={198}
                  height={198}
                />
              </div>
              <div className="w-[15%] h-auto max-xl:w-[22%]">
                <Image
                  src='/images/website_q4k_logo.png'
                  alt="British Red Cross Logo"
                  className="w-full h-full object-contain"
                  width={198}
                  height={198}
                />
              </div>
            </div>
            <a
              href="https://tilt.fyi/WLchNfsBFS"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gtam-yellow text-black py-[3px] px-8 inline-block uppercase font-europagrotesk text-[45px] font-black max-xl:text-6xl transition duration-300 ease-in-out hover:bg-white hover:scale-110"
            >
              Donate
            </a>
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
      <div className="w-full section-content px-8 flex flex-row items-center gap-16">
        <div className="flex-1">
          <h1 className="text-[48px] text-gtam-blue font-bold mb-6 uppercase font-europagrotesk">
            Feel like repping the brand?
          </h1>
          <p className="text-[21px]/[27px] text-white mb-4 font-centurygothic">
            If you like what we do, check out our wide selection of merchandise ranging from hoodies and T-shirts, all the way through mugs and deskmats!
            Every purchase directly supports us in staying afloat, and thus being able to bring you these productions year after year.
            Not to mention, according to our customers, they look stylish as hell!
            <br /> <br />
            Browse our all-year-round selection, or check out our seasonal exclusives now!
          </p>
          <div className="mt-[100px]">
            <a
              href="https://gtamarathon-shop.fourthwall.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gtam-yellow text-black py-[3px] px-4 font-bold inline-block uppercase font-europagrotesk text-[45px] transition duration-300 ease-in-out hover:bg-white hover:scale-110"
            >
              Go to store
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 w-[500px]">
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
      <div className="flex flex-col lg:items-end items-center lg:text-right text-center w-full section-content px-8">
        <h1 className="text-[48px] text-black font-bold mb-6 uppercase font-europagrotesk 
          xl:max-w-[70vw] max-xl:w-full max-xl:text-3xl"
        >
          Read the official attendee guide
        </h1>
        <p className="text-[20px] text-black mb-4 font-centurygothic 
          xl:max-w-[70vw] max-xl:w-full max-xl:text-base w-[125%] xl:text-[21px]/[27px]"
        >
          Let a local offer you the best tips for travel, lodging, food, and everything in-between!
          Avoid timeloss from Greggs to Tesco so that you don&apos;t miss your favorite runs back at the venue!
        </p>
        <div className="w-full lg:w-auto mt-4">
          <a
            href="https://gist.github.com/Joshimuz/7241b552c078157eab93b2db3c056738"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gtam-yellow text-black py-[3px] px-4 font-black inline-block uppercase font-europagrotesk 
            text-[45px] max-xl:text-lg max-xl:mt-4 max-xl:w-full transition duration-300 ease-in-out hover:bg-white hover:scale-110"
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
      <div className="flex flex-col items-center text-center section-content px-8">
        <h1 className="text-[50px] text-white font-bold uppercase max-xl:text-3xl font-europagrotesk">
          SCHEDULE
        </h1>
        <p className="text-[20px] text-white mt-5 mb-8 max-xl:text-base font-centurygothic">
          The long awaited list is here. Click to see the official schedule for 
          <span className="font-slopeopera"> GTA<span className="font-slopeopera text-gtam-blue">M</span> 2026</span>!
          Times are subject to change, so check back here occasionally to stay up to date with the runs on show!
        </p>
        <div className="mt-12">
          <a
            href="https://oengus.io/marathon/gtam2026/schedule/main"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gtam-yellow text-black py-[3px] px-4 font-bold text-[45px] inline-block uppercase max-xl:text-lg font-europagrotesk transition duration-300 ease-in-out hover:bg-white hover:scale-110"
          >
            go to schedule
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
      <div className="section-content w-full px-8 flex flex-col items-center">
        <div className="flex w-full flex-row justify-between max-w-screen-lg px-4">
          <div className="flex-1 text-left max-lg:text-center">
            <h1 className="text-5xl text-gtam-blue font-bold mb-6 font-europagrotesk uppercase">Follow Us</h1>
            <p className="text-lg text-white mb-4 font-centurygothic w-5/6">
              Whether you consume <span className="font-slopeopera"> GTA<span className="font-slopeopera text-gtam-blue">M</span></span> on{' '}
              <a
                href="https://www.twitch.tv/gtamarathon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gtam-blue underline"
              >
                Twitch
              </a>
              , or after the fact on{' '}
              <a
                href="https://www.youtube.com/@gtamarathon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gtam-blue underline"
              >
                YouTube
              </a>
              , you can find us here! For updates regarding the marathon, you can join our brand new{' '}
              <a
                href="https://discord.gg/QBM57q5M5E"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gtam-blue underline"
              >
                Discord server
              </a>
              , follow us on{' '}
              <a
                href="https://x.com/gtamarathon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gtam-blue underline"
              >
                X (formerly Twitter)
              </a>
              , and now even on{' '}
              <a
                href="https://bsky.app/profile/gtamarathon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gtam-blue underline"
              >
                Bluesky
              </a>
              !
            </p>
          </div>
          <div className="flex-1 lg:pl-10 mt-8 lg:mt-0 text-right max-lg:text-center">
            <h1 className="text-5xl text-gtam-blue font-bold mb-8 font-europagrotesk uppercase">Contact Us</h1>
            <p className="text-lg text-white mb-4 font-centurygothic">
              For business and other inquiries: gta<span className="text-gtam-blue">marathon</span>@gmail.com
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
  const [width, setWidth] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])
  
  return (
    <div className="overflow-x-hidden">
      {width > 1752 ? (
        <>
          <NavbarDesktop links={links} logoSrc="/images/logo.png" />
          {sectionsDesktop.map((section) => (
            <SectionDesktop key={section.id} {...section}>
              {section.content}
            </SectionDesktop>
          ))}
        </>
      ) : (
        <>
          <NavbarMobile logoSrc="/images/logo.png" />
          {sectionsMobile.map((section) => (
            <SectionMobile key={section.id} {...section}>
              {section.content}
            </SectionMobile>
          ))}
        </>
      )}
    </div>
  );
}  
