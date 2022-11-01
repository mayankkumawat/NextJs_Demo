/* eslint-disable react/jsx-key */
import Image from 'next/image';
import React from 'react';
import { Facebook, Instgram, Logo, YouTube } from '../../assets';

const FooterData = [
  {
    name: 'About',
    subtittle: [
      ' About Us',
      'Meet the Staff',
      'Meet our Founders',
      'Board of Directors',
      'Newsroom',
      'Testimonials',
      'Blog',
    ],
  },
  {
    name: 'Education',
    subtittle: [
      'Literature',
      'Podcast',
      'Videos',
      'Speaking',
      'Education Tool',
    ],
  },
  {
    name: 'Resources',
    subtittle: [
      'Mental Health',
      'Addiction',
      'Crisis',
      'Literature',
      'Counselors',
      'Eating Disorder',
      'Veteran / First Responder',
      'Community Services',
    ],
  },
  {
    name: 'Get Involved',
    subtittle: [
      'Fundraising',
      'Special Events',
      'Admin / Marketing',
      'Creative',
      'Careers',
      'Task Force',
    ],
  },
];

const Footer = () => {
  return (
    <>
      <div>
        <div className="xxs:w-11/12 lg:w-4/5 mx-auto py-6">
          <footer className="w-full text-black">
            <div>
              <div className="grid lg:grid-cols-4  justify-items-start	 xxs:grid-cols-1 md:gap-3 md:grid-cols-2 xxs:gap-4">
                {FooterData.map((item, index) => {
                  return (
                    <div>
                      <div className="lg:h-10 xxs:h-10">
                        <h1 className="not-italic font-semibold text-lg text-left text-black">
                          {item.name}
                        </h1>
                      </div>
                      <ul className="text-left text-lg">
                        {item?.subtittle.map((subtittle, index) => {
                          return (
                            <li className="py-0.5">
                              <a
                                className="text-[#5F5F60] hover:text-[#5F5F60]"
                                href="#"
                              >
                                {subtittle}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </footer>
        </div>
        <div className="bg-[#F0F0EF] lg:h-32 xxs:h-auto  flex justify-center">
          <div className="xxs:w-11/12 lg:w-4/5  mx-auto flex xxs:items-start lg:flex-row xxs:flex-col lg:items-center xxs:py-6 lg:py-0">
            <div className="w-32">
              <Image src={Logo} alt="logo" className="w-16 h-auto" />
            </div>
            <div className="w-full lg:ml-4 xxs:py-2 lg:py-0">
              <div>
                33114 Forest West Street | Magnolia, TX 77354 | Phone: (346)
                703-0051
              </div>
              <span>Copyright @ 2022</span>&nbsp;
              <a
                href="/"
                className="text-black"
                aria-label="privacy"
                target="_blank"
                rel="noreferrer"
              >
                Privacy policy
              </a>
              &nbsp;
              <span> | Website by HUBCODESPACE</span>
            </div>
            <div className="flex lg:justify-end xxs:pt-2 lg:py-0 w-full">
              <a href="#">
                <Image src={Facebook} alt="" className="lg:ml-4" />
              </a>
              <a href="#">
                <Image src={YouTube} alt="" className="ml-4" />
              </a>
              <a href="#">
                <Image src={Instgram} alt="" className="ml-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
