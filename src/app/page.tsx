'use client';

import React, { useEffect, useState } from 'react';
import NavbarDesktop from '@/components/NavbarDesktop';
import NavbarMobile from '@/components/NavbarMobile';
import SectionDesktop from '@/components/SectionDekstop';
import SectionMobile from '@/components/SectionMobile';
import BackToTop from '@/components/BackToTop';
import Image from 'next/image';
import { AutoTextSize } from 'auto-text-size'

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
    content: (
      <h1 className="text-5xl text-white uppercase font-europagrotesk">
        It&apos;s time to <span className="text-[#ffea00]">meet</span>.
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
      <div className="relative flex flex-col items-center text-center bottom-[-50px]">
        <AutoTextSize>
          <h1 className="text-[150px] text-[#ffea00] max-xl:text-[84px] font-bebasneue">
            April 7-11
          </h1>
        </AutoTextSize>
        <div className="mt-[-25px] max-xl:mt-4 flex flex-col items-center w-full">
          <div className="inline-block py-1 px-2 font-centurygothic xl:text-[44px] w-full">
            <p className="text-4xl text-[#4fbafe] max-xl:text-5xl">Eldon Building</p>
            <p className="text-2xl text-white mt-1 max-xl:text-2xl">University of Portsmouth</p>
          </div>
        </div>
        <div className="mt-2 w-full flex justify-center">
          <a
            href="https://maps.app.goo.gl/ShWvsanb4n4XRynJ8"
            target="_blank"
            className="font-black text-xl underline inline-block text-[#4fbafe] hover:text-white font-europagrotesk uppercase"
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
      <div className="relative p-8 xl:bottom-[-300px] bottom-[-205px] w-full section-content mobile-scale px-4 flex justify-center xl:block">
        <div className="w-full max-w-screen-lg text-center xl:text-left">
          <h1 className="text-4xl xl:text-6xl text-white font-bold uppercase font-europagrotesk">
            Tickets available&nbsp;<span className="text-[#ffea00]">now</span>!
          </h1>
  
          <p className="text-[18px]/[24px] text-white mb-4 mt-9 font-centurygothic xl:text-[21px]/[27px]">
            Whether you&apos;d like to just pop in for a day, or stick around and have fun for the
            entire duration, we have ticket options that accommodate all! Browse and choose the
            one that suits your needs best!
          </p>
  
          <div className="mt-[100px] max-xl:mt-[70px]">
            <a
              href="https://tickets.gtamarathon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffea00] text-black py-[3px] px-4 font-bold xl:text-[40px] text-[20px] inline-block uppercase font-europagrotesk transition duration-300 ease-in-out hover:bg-white hover:scale-110"
            >
              Get Your Tickets here!
            </a>
          </div>
        </div>
      </div>
    ),
  },  
  {
    id: 'charity',
    imageSrc: '/images/website_warchild_bg.png',
    backgroundColor: '#12222c',
    backgroundOffset: "center 650px",
    top: { left: 75, right: 65 },
    bottom: { left: 80, right: 90 },
    content: (
      <div className="relative bottom-[-260px] right-[50px] p-8 section-content mobile-scale px-4">
        <div className="w-full max-w-screen-lg text-right">
          <h1 className="text-[90px] text-white font-bold mb-12 uppercase font-bebasneue max-lg:text-5xl tracking-wide">
            Aiding the less fortunate
          </h1>
          <p className="text-[18px]/[24px] text-white mb-8 mt-[-20px] font-centurygothic">
            Children every year are affected by war, and this situation is far from improving. As such, every donation contributed to
            <span className="font-slopeopera"> GTA<span className="font-slopeopera text-[#4fbafe]">M</span> 2025</span> is directly forwarded to War Child, 
            a charitable organization that aims to protect and aid the most innocent, and by far most vulnerable victims of war; the children. 
            Help us in supporting their cause by donating to the marathon, or directly to them through&nbsp;
            <a 
            href="https://www.warchild.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className='underline text-[#4fbafe]'>their website</a>.
          </p>
          <div className="flex items-center justify-end mt-12 mb-4">
          <div>
              <a
                href="https://www.warchild.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ffea00] text-black py-3 px-6 text-xl inline-block uppercase font-europagrotesk text-[60px] font-black transition duration-300 ease-in-out hover:bg-white hover:scale-110"
              >
                Donate
              </a>
            </div>
            <div className="ml-12 w-[15%] h-auto">
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
  },  
  {
    id: 'merch',
    backgroundColor: '#12222c',
    top: { left: 80, right: 80 },
    bottom: { left: 75, right: 65 },
    content: (
      <div className="relative bottom-[-250px] p-8 section-content mobile-scale px-4">
        <h1 className="text-4xl text-[#4fbafe] font-bold mb-6 uppercase font-europagrotesk">
          Feel like repping the brand?
        </h1>
        <p className="text-[16px]/[21px] text-white mb-4 font-centurygothic xl:text-[18px]/[23px]">
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
            className="bg-[#ffea00] text-black py-3 px-6 font-bold text-xl inline-block uppercase font-europagrotesk text-[40px] transition duration-300 ease-in-out hover:bg-white hover:scale-110"
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
    content: (
      <div 
        className="relative p-8 section-content px-4 
          xl:absolute xl:bottom-[-515px] xl:right-[-650px] 
          bottom-[-230px]
          flex flex-col xl:items-end items-center 
          xl:text-right text-center w-full xl:w-[800px] max-w-none"
      >
        <h1 className="text-4xl text-black font-bold mb-0 uppercase font-europagrotesk">
          Read the official attendee guide
        </h1>
        <p className="text-[16px]/[21px] text-black mb-4 font-centurygothic xl:text-[19px]/[27px]">
          Let a local offer you the best tips for travel, lodging, food, and everything in-between!
          Avoid timeloss from Greggs to Tesco so that you don&apos;t miss your favorite runs back at the venue!
        </p>
        <div className="xl:absolute xl:left-[-550px] xl:top-1/2 xl:transform xl:-translate-y-1/2 max-xl:w-full">
          <a
            href="https://gist.github.com/Joshimuz/d6584ef380e04447639c27b909003e52"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffea00] text-black py-3 px-6 font-bold text-xl inline-block uppercase font-europagrotesk text-[40px] transition duration-300 ease-in-out hover:bg-white hover:scale-110"
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
      <div className="relative bottom-[-210px] p-8 section-content px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl text-white font-bold uppercase font-europagrotesk">
          SCHEDULE
        </h1>
        <p className="xl:text-[24x]/[27px] text-white mt-8 mb-8 font-centurygothic">
        The long awaited list is here. Click to see the official schedule for the first ever in-person iteration of <span className="font-slopeopera"> GTA<span className="font-slopeopera text-[#4fbafe]">M</span></span>! Times are subject to change, so check back here occasionally to stay up to date with the runs on show!
        </p>
        <div className="mt-12">
          <a
            href="https://oengus.fun/gtam2025/gtam2025"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffea00] text-black py-3 px-6 font-bold text-[40px] inline-block uppercase max-xl:text-lg font-europagrotesk transition duration-300 ease-in-out hover:bg-white hover:scale-110"
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
      <div className="section-content mx-auto w-full max-w-screen-lg px-4 bottom-[-200px]">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl text-center mb-16">
            <h1 className="text-5xl text-[#4fbafe] font-bold mb-6 font-europagrotesk uppercase">Follow Us</h1>
            <p className="text-lg text-white mb-4 font-centurygothic mx-auto">
              Whether you consume GTAM on{' '}
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
          <div className="w-full max-w-2xl text-center mb-16">
            <h1 className="text-5xl text-[#4fbafe] font-bold mb-6 font-europagrotesk uppercase">Contact Us</h1>
            <p className="text-lg text-white mb-4 font-centurygothic">
              For business and other inquiries: gta<span className="text-[#4fbafe]">marathon</span>@gmail.com
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
    content: (
      <h1 className="text-5xl text-white uppercase font-europagrotesk mx-auto max-w-[100%] translate-x-[-50%] relative left-1/2">
        It&apos;s time to <span className="text-[#ffea00]">meet</span>.
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
      <div className="relative flex flex-col items-center text-center bottom-[-50px]">
        <AutoTextSize>
          <h1 className="text-[150px] text-[#ffea00] max-xl:text-[84px] font-bebasneue">
            April 7-11
          </h1>
        </AutoTextSize>
        <div className="mt-[-25px] max-xl:mt-4 flex flex-col items-center w-full">
          <div className="inline-block py-1 px-2 font-centurygothic xl:text-[44px] w-full">
            <p className="text-4xl text-[#4fbafe] max-xl:text-5xl">Eldon Building</p>
            <p className="text-2xl text-white mt-1 max-xl:text-2xl">University of Portsmouth</p>
          </div>
        </div>
        <div className="mt-2 w-full flex justify-center">
          <a
            href="https://maps.app.goo.gl/ShWvsanb4n4XRynJ8"
            target="_blank"
            className="font-black text-xl underline inline-block text-[#4fbafe] hover:text-white font-europagrotesk uppercase"
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
        <div className="w-full max-w-screen-lg text-center xl:text-left">
          <h1 className="text-6xl xl:text-6xl text-white font-bold uppercase font-europagrotesk">
            Tickets available&nbsp;<span className="text-[#ffea00]">now</span>!
          </h1>

          <p className="text-[21px]/[28px] text-white mb-4 mt-9 font-centurygothic xl:text-[21px]/[27px]">
            Whether you&apos;d like to just pop in for a day, or stick around and have fun for the
            entire duration, we have ticket options that accommodate all! Browse and choose the
            one that suits your needs best!
          </p>
          <div className="mt-[100px] max-xl:mt-[70px]">
            <a
              href="https://tickets.gtamarathon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffea00] text-black py-[3px] px-4 font-bold xl:text-[45px] text-[25px] inline-bloc uppercase font-europagrotesk transition duration-300 ease-in-out hover:bg-white hover:scale-110"
            >
              Get Your Tickets here!
            </a>
          </div>

          <div className="hidden xl:block absolute left-[975px] top-[-450px] w-[600px] h-[500px]">
            <Image src="/images/website_landing_ticket.png" alt="Tickets Example" className="w-[275%] h-[275%] object-contain" width={687} height={368} />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'charity',
    imageSrc: '/images/website_warchild_bg.png',
    backgroundColor: '#12222c',
    backgroundOffset: "center 650px",
    top: { left: 75, right: 65 },
    bottom: { left: 80, right: 90 },
    content: (
      <div className="relative bottom-[-300px] flex justify-center items-center p-8 section-content mobile-scale px-4 left-[350px]">
        <div className="w-full max-w-screen-lg px-4 text-left lg:text-right">
        <h1 className="text-[min(90px,8vw)] text-white font-bold mb-12 uppercase font-bebasneue tracking-wide whitespace-nowrap w-full">
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
              className="bg-[#ffea00] text-black py-[3px] px-4 inline-block uppercase font-europagrotesk text-[45px] font-black max-xl:text-6xl transition duration-300 ease-in-out hover:bg-white hover:scale-110"
            >
              Donate
            </a>
            <div className="ml-12 w-[15%] h-auto max-xl:hidden">
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
  },
  {
    id: 'merch',
    backgroundColor: '#12222c',
    top: { left: 80, right: 80 },
    bottom: { left: 75, right: 65 },
    content: (
      <div className="relative left-[-350px] lg:bottom-[-370px] bottom-[-370px] p-8 section-content mobile-scale px-4">
        <div className="max-lg:text-center max-lg:w-full">
          <h1 className="text-[30px] xl:text-[48px] text-[#4fbafe] font-bold mb-6 uppercase font-europagrotesk">
            Feel like repping the brand?
          </h1>
          <p className="text-[18px]/[23px] text-white mb-4 font-centurygothic xl:text-[21px]/[27px]">
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
              className="bg-[#ffea00] text-black py-[3px] px-4 font-bold inline-block uppercase font-europagrotesk text-[45px] transition duration-300 ease-in-out hover:bg-white hover:scale-110"
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
        <div className="xl:absolute xl:left-[-784px] xl:top-1/2 xl:transform xl:-translate-y-1/2 max-xl:w-full">
          <a
            href="https://gist.github.com/Joshimuz/d6584ef380e04447639c27b909003e52"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffea00] text-black py-[3px] px-4 font-black inline-block uppercase font-europagrotesk 
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
      <div className="relative lg:bottom-[-350px] bottom-[-350px] p-8 section-content px-4 flex flex-col items-center text-center">
        <h1 className="text-[50px] text-white font-bold uppercase max-xl:text-3xl font-europagrotesk">
          SCHEDULE
        </h1>
        <p className="text-[20px] text-white mt-5 mb-8 max-xl:text-base font-centurygothic">
        The long awaited list is here. Click to see the official schedule for the first ever in-person iteration of <span className="font-slopeopera"> GTA<span className="font-slopeopera text-[#4fbafe]">M</span></span>! Times are subject to change, so check back here occasionally to stay up to date with the runs on show!
        </p>
        <div className="mt-12">
          <a
            href="https://oengus.fun/gtam2025/gtam2025"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffea00] text-black py-[3px] px-4 font-bold text-[45px] inline-block uppercase max-xl:text-lg font-europagrotesk transition duration-300 ease-in-out hover:bg-white hover:scale-110"
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
