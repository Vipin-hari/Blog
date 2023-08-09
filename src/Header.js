import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NewBlogForm from './Newblog';

const Header = ({ onSectorSelect }) => {
  const handleSectorSelect = (sector) => {
    onSectorSelect(sector);
  };

  const [showNewBlogForm, setShowNewBlogForm] = useState(false);

  const handleNewblog = () => {
    setShowNewBlogForm(true);
  };

  const handleAddBlog = (newBlog) => {
    // Pass the new blog data to the parent component or perform any necessary action
    console.log(newBlog);
    // Optionally, you can close the form after adding the blog
    setShowNewBlogForm(false);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="custom-navbar" fixed='top'>
        <Container>
          <Navbar.Brand href="#home">
            <span className="blog-text"><b>B</b>log</span>
            <span className="pool-text"><b>P</b>ool</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => handleSectorSelect('All')}>All</Nav.Link>
              <Nav.Link onClick={() => handleSectorSelect('Travel')}>Travel</Nav.Link>
              <Nav.Link onClick={() => handleSectorSelect('Science')}>Science</Nav.Link>
              <Nav.Link onClick={() => handleSectorSelect('Gaming')}>Gaming</Nav.Link>
              <Nav.Link onClick={() => handleSectorSelect('Food')}>Food</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={handleNewblog}><b>New Blog</b></Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <b>Login/Signup</b>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="body-container">
        {showNewBlogForm && <NewBlogForm onAddBlog={handleAddBlog} />} {/* Render the NewBlogForm if showNewBlogForm is true */}
      </div>
    </>
  );
};

export default Header;
