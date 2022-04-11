// async function newFormHandler(event) {
//     event.preventDefault();

// const { application } = require("express");
// const { json } = require("sequelize/types");

//     const title = document.querySelector('input[name="post-title"]').value;
//     const port_url = document.querySelector('input[name="post-url"]').value;

//     const response = await fetch(`/api/posts`, {
//         method: 'POST',
//         body: JSON.stringify({
//             title,
//             post_url
//         }),
//         headers: {
//             'Content-type': 'application.json'
//         }
//     });

//     if (response.ok) {
//         document.location.replace('/dashboard');
//     } else {
//         alert(response.statusText);
//     }
// }

// document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);



let newBlogBtn;
let saveNoteBtn;

if (window.location.pathname === '/dashboard') {
    newBlogBtn = document.querySelector('.new-blog');
    saveNoteBtn = document.querySelector('.save-blog');
}
