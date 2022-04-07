async function newFormHandler(event) {
    event.preventDefault();

const { application } = require("express");
const { json } = require("sequelize/types");

    const title = document.querySelector('input[name="post-title"]').value;
    const post_url = document.querySelector('input[name="post-url"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_url
        }),
        headers: {
            'Content-type': 'application.json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);



// let newBlogBtn;
// let saveNoteBtn;

// if (window.location.pathname === '/dashboard') {
//     newBlogBtn = document.querySelector('.new-blog');
//     saveNoteBtn = document.querySelector('.save-blog');
// }

// let activeBlog = {};

// const getBlog = () => 
// fetch('/api/blog', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// const saveNote = () => {
//     fetch('/api/blog', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(blog),
//     });

// const deleteBlog = (id) => {
//     fetch(`/api/notes/${id}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });

//     // sets the active blog and displays it
//     const handleBlogView = (e) => {
//         e.preventDefault();
//         activeNote = JSON.parse(e.target.parentElement.getAttribute('data-blog'));
//         renderActiveNote();
//     };

//     // sets the activeBlog to an empty object and allows user to create a new blog
//     const handleBlogView = (e) => {
//         activeNote = {};
//         renderActiveNote();
//     }

//     // render list of note titles
//     const renderBlogList = async (blogs) => {
//         let jsonBlogs = await blogs.json();
//         if (window.location.pathname === '/dashboard') {
//             noteList.forEach((el) => (el.innerHTML = ''));
//         }
//     }
// }}