import React from 'react';
import { LinkedInIcon } from '../Icons';

const teamMembers = [
  { name: 'Khushbu Kumari', title: 'Chief Executive Officer', img: 'https://picsum.photos/seed/khushbu/400/400' },
  { name: 'Roshan Kumar', title: 'Chief Operating Officer', img: 'https://picsum.photos/seed/roshan-coo/400/400' },
  { name: 'Pramod Kumar', title: 'Chief Strategy & Commercial Officer', img: 'https://picsum.photos/seed/pramod/400/400' },
  { name: 'Roshan Kumar', title: 'Chief Data Scientist', img: 'https://picsum.photos/seed/roshan-cds/400/400' },
  { name: 'Prince sha', title: 'VP Data Solutions', img: 'https://picsum.photos/seed/prince/400/400' },
  { name: 'Aparna singh', title: 'Human Resources Manager', img: 'https://picsum.photos/seed/aparna/400/400' },
];

interface TeamMemberCardProps {
    name: string;
    title: string;
    img: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, title, img }) => (
  <div className="text-center p-4 bg-aeonsbyte-light-dark rounded-lg">
    <div className="relative inline-block">
      <img src={img} alt={name} className="rounded-md w-full max-w-xs mx-auto shadow-lg" />
    </div>
    <h3 className="mt-4 text-xl font-bold text-white">{name}</h3>
    <p className="text-aeonsbyte-purple font-medium">{title}</p>
    <a href="#" className="text-aeonsbyte-gray hover:text-white transition-colors mt-2 inline-block">
      <LinkedInIcon className="w-8 h-8"/>
    </a>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="bg-aeonsbyte-dark py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Pioneering Digital and Data Frontiers</h1>
          <p className="mt-4 text-lg text-aeonsbyte-gray">
            aeonsbyte provides innovative solutions across the digital landscape. We merge data science with creative digital strategy, helping businesses uncover blind spots, optimize decision-making, and stay ahead of the competition.
          </p>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-white">aeonsbyte Executive team</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;