const postId = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async (event) => {
  event.preventDefault();

  const postTitle = document.querySelector('input[name="post-title"]').value;
  const postContent = document.querySelector('textarea[name="post-body"]').value;

  console.log(postTitle);
  console.log(postContent);

  const response = await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      postTitle,
      postContent,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to update your post');
  }
  document.location.replace('/dashboard');
};

const deleteClickHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const postId = event.target.getAttribute('data-id');
  
  await fetch(`/api/post/${postId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to delete post");
  }
  }
};

document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);

