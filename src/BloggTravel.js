


import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './BloggTravel.css';
import './global.css';
import Header from './Header';
import Readmore from './Readmore';

function BlogCard({ title, author, content, link, image, date, location }) {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="card" style={cardStyle}>
      <div className='card-content'>
        <Card.Body className="card-body">
          <Card.Title className="titlee">{title}</Card.Title>
          <Card.Subtitle className="titlee">Author: {author}</Card.Subtitle>
          <Card.Text>{content}</Card.Text>
          <Card.Text>Date: {date}</Card.Text>
          <Card.Text>Location: {location}</Card.Text>
          <Readmore link={link} />
        </Card.Body>
      </div>
      <div className='card-overlay'></div>
    </div>
  );
}

function BlogList() {
  const [selectedSector, setSelectedSector] = useState('All');
  const blogs = [
    {
      id: 1,
      title: 'Exploring the Serengeti',
      author: 'John Doe',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?3&w=996&t=st=1688655133~exp=1688655733~hmac=28de1604d54ed86c547e1be0e4aeab4710d629ad5ce4c48b81791b9632af80f1',
      date: '2022-08-15',
      location: 'Tanzania',
      sector: 'Travel',
      link: 'https://medium.com/@onetruekev/leicester-2023-moments-meanderings-and-memories-part-2-finding-food-156333c48da1',
    },
    {
      id: 2,
      title: 'Adventures in Bali',
      author: 'Jane Smith',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      image: 'https://img.freepik.com/free-photo/travel-concept-with-baggage_23-2149153260.jpg?2&w=826&t=st=1688741414~exp=1688742014~hmac=4d54476392254a8bb22c368d06ab39b8db38500bb1e3f3a819da4a91f3aaaaf0',
      date: '2022-07-22',
      location: 'Bali, Indonesia',
      sector: 'Travel',
      link: 'https://medium.com/the-expat-chronicles/people-are-leaving-these-european-countries-767a057c063a',
    },
    {
      id: 3,
      title: 'Exploring Paris',
      author: 'John Doe',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://img.freepik.com/premium-photo/travel-bag-with-airplane-generative-ai_936245-222.jpg?w=1060',
      date: '2022-08-20',
      location: 'Paris, France',
      sector: 'Travel',
      link: 'https://medium.com/life-tips/why-i-travel-solo-2164af7917d7',
    },
    {
      id: 4,
      title: 'The Wonders of Science',
      author: 'John Doe',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://img.freepik.com/premium-photo/investigations-defunct-chemistry-facility-laboratory-chemistry-instruction_410516-4221.jpg?w=900',
      date: '2022-09-10',
      location: 'Science Lab',
      sector: 'Science',
      link: 'https://medium.com/beyond-the-buffer/from-the-terrifying-sci-fi-horror-series-thats-silent-yet-screaming-for-recognition-4177ce07a8d6',
    },
    {
      id: 5,
      title: 'Gaming Adventures',
      author: 'Jane Smith',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      image: 'https://img.freepik.com/free-vector/skull-gaming-with-joy-stick-emblem-modern-style_32991-492.jpg?w=740&t=st=1688755656~exp=1688756256~hmac=879b95234912c3fb8ba56bf5289a43c580e48d01a1510e927e90416cf5f43201',
      date: '2022-09-15',
      location: 'Virtual World',
      sector: 'Gaming',
      link: 'https://medium.com/@seedifyfund/ideathon-for-nft-gaming-with-sfund-rewards-seed-funding-3fb24dbadf3e',
    },
    {
      id: 6,
      title: 'Delicious Food Journey',
      author: 'John Doe',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://img.freepik.com/free-photo/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.jpg?w=360&t=st=1688755712~exp=1688756312~hmac=73ae5ed70ca9458874afad7c067fac4392f0143c4c596ae3318225f456cc29f5',
      date: '2022-09-20',
      location: 'Food Paradise',
      sector: 'Food',
      link: 'https://medium.com/free-code-camp/how-i-went-from-selling-food-in-the-street-to-working-for-top-firms-in-tech-part-3-first-week-on-9b4486eb02ee',
    },
    

  ];
  

  const filteredBlogs = selectedSector === 'All' ? blogs : blogs.filter(blog => blog.sector === selectedSector);

  const handleSectorSelect = (sector) => {
    setSelectedSector(sector);
  };

  return (
    <div className='bg'>
      <Header onSectorSelect={handleSectorSelect} />
      <div className="bl og-list">
        {filteredBlogs.map(blog => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            author={blog.author}
            content={blog.content}
            link={blog.link}
            image={blog.image}
            date={blog.date}
            location={blog.location}
          />
        ))}
      </div>

    </div>
  );
}

export default BlogList;