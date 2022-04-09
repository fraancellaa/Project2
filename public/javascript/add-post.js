document.querySelector('.btn-save').addEventListener('submit', addFormHandler);
async function addFormHandler(event) {
    event.preventDefault();

    const post_text = document.querySelector('textarea[name="btn-save"]').value;

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            blog_title,
            blog_text,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

