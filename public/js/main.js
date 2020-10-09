const fetchStories = async () => {
  const res = await fetch('/api/stories', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('READIUM_ACCESS_TOKEN', 'READIUM_CURRENT_USER_ID')}`
    }
  });
  const stories = await res.json();
  console.log(stories)
}


document.addEventListener('DOMContentLoaded', async () => {
  fetchStories();
});