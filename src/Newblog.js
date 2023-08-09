
import React, { useState } from 'react';

function NewBlogForm({ onAddBlog }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [sector, setSector] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new blog object with the captured form data
    const newBlog = {
      title,
      author,
      content,
      image,
      date,
      location,
      sector,
    };

    // Pass the new blog data to the parent component
    onAddBlog(newBlog);

    // Clear the form fields
    setTitle('');
    setAuthor('');
    setContent('');
    setImage('');
    setDate('');
    setLocation('');
    setSector('');
  };

  return (
    <div>
      <h2>New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <label htmlFor="image">Image URL</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <label htmlFor="sector">Sector</label>
        <input
          type="text"
          id="sector"
          value={sector}
          onChange={(e) => setSector(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewBlogForm;
