import { Code2, Palette, Zap, Globe } from 'lucide-react';

export const PORTFOLIO_DATA = {
  hero: {
    firstName: "Sarath",
    lastName: "Unnikrishnan",
    role: "MERN Stack Dev",
    intro: "I'm a passionate MERN Stack Developer with hands-on experience in building responsive and scalable web applications using MongoDB, Express.js, React.js, and Node.js.",
    resumeLink: "/Sarath_Unnikrishnan_Resume.pdf"
  },
  about: {
    title: "Passionate MERN Stack Developer",
    stats: [
      { label: 'Years Experience', value: '1+', icon: Zap },
      { label: 'Projects Completed', value: '5+', icon: Globe },
      { label: 'Core Technologies', value: 'MERN', icon: Code2 },
      { label: 'Agile Teams', value: 'Yes', icon: Palette },
    ],
    paragraphs: [
      "Passionate and detail-oriented MERN Stack Developer with hands-on experience in building responsive and scalable web applications. Recently completed professional training and gained industry exposure through internship and full-time roles in software development. Skilled in developing modern full-stack applications using MongoDB, Express.js, React.js, and Node.js.",
      "Based in Cochin, Kerala, I have strong problem-solving abilities, a quick learning mindset, and experience collaborating within Agile development teams. Dedicated to creating efficient, user-friendly, and performance-driven web solutions while continuously improving technical expertise."
    ]
  },
  experience: [
    {
      id: 1,
      type: 'work',
      title: 'Associate Software Engineer',
      organization: 'Ginet Tech Software, Carnival Infopark',
      date: '2025 - Present',
      description: 'Developing and maintaining scalable full-stack web applications using the MERN stack. Implementing secure authentication using JWT and role-based access control. Optimizing performance and integrating third-party APIs.'
    },
    {
      id: 2,
      type: 'work',
      title: 'Associate Software Engineer Trainee',
      organization: 'Ginet Tech Software, Carnival Infopark',
      date: '2024 - 2025',
      description: 'Built responsive web applications using MongoDB, Express.js, React.js, and Node.js. Developed reusable React components and integrated RESTful APIs for dynamic functionality. Assisted in MongoDB database design.'
    },
    {
      id: 3,
      type: 'education',
      title: 'MERN Stack Developer Internship',
      organization: 'Camerinfolks Pvt Ltd',
      date: '2024',
      description: 'Completed intensive training in full-stack web development with practical exposure to MERN stack technologies and real-world projects.'
    },
    {
      id: 4,
      type: 'work',
      title: 'Pipeline Supervisor',
      organization: 'Ocean Dreams Marine, Cochin Shipyard',
      date: '2019 - 2023',
      description: 'Managed daily pipeline operations and ensured workflow efficiency. Led and mentored operational teams to achieve project targets.'
    },
    {
      id: 5,
      type: 'education',
      title: 'Diploma in Mechanical Engineering',
      organization: 'Indian Institution of Engineering',
      date: '2014 - 2017',
      description: 'Completed Diploma in Mechanical Engineering.'
    }
  ],
  projects: {
    categories: ['All', 'Full Stack', 'Frontend'],
    items: [
      {
        id: 1,
        title: 'Online Bridal Application',
        category: 'Full Stack',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
        description: 'A full-stack e-commerce style bridal shopping platform with secure user authentication and product management features. Includes shopping cart and responsive interface.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
        liveLink: '#',
        githubLink: 'https://github.com/sarathunnikrishnan'
      },
      {
        id: 2,
        title: 'Quiz App for Kids IQ Test',
        category: 'Frontend',
        image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop',
        description: 'An interactive quiz platform designed to improve children’s learning and IQ assessment experience with dynamic quiz rendering and smooth user experience.',
        tech: ['React.js', 'Node.js', 'Express.js', 'HTML/CSS'],
        liveLink: '#',
        githubLink: 'https://github.com/sarathunnikrishnan'
      }
    ]
  },
  skills: [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript (ES6)', level: 85 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
      ]
    },
    {
      title: 'Backend & DB',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'SQL', level: 75 },
      ]
    },
    {
      title: 'Other Skills',
      skills: [
        { name: 'Python', level: 70 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Agile Workflows', level: 85 },
        { name: 'Team Collaboration', level: 95 },
      ]
    }
  ],
  contact: {
    email: "sarathunnikrishnan18@gmail.com",
    location: "Cochin, Kerala",
    phone: "+91 987654321"
  },
  social: {
    github: "https://github.com/sarathunnikrishnan",
    linkedin: "https://www.linkedin.com/in/sarathunnikrishnan18/"
  },
  navLinks: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]
};
