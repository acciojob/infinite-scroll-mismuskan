// //your code here!
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Infinite Scroll Example</title>
//   <style>
//     #container {
//       width: 80%;
//       margin: auto;
//     }

//     .item {
//       border: 1px solid #ccc;
//       margin: 10px;
//       padding: 20px;
//       text-align: center;
//     }
//   </style>
// </head>
// <body>

// <div id="container"></div>

// <script>
  const container = document.getElementById('container');
  let page = 1;

  function fetchData() {
    // Simulate fetching data from an API
    // Replace this with your actual data fetching logic
    const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`;

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return data;
      });
  }

  function appendDataToContainer(data) {
    data.forEach(item => {
      const newItem = document.createElement('div');
      newItem.classList.add('item');
      newItem.innerText = item.title;
      container.appendChild(newItem);
    });
  }

  function loadMoreData() {
    fetchData()
      .then(data => {
        appendDataToContainer(data);
        page++;
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  // Initial load with 10 items
  fetchData()
    .then(data => {
      appendDataToContainer(data);
      page++;
    })
    .catch(error => console.error('Error fetching initial data:', error));

  // Infinite scroll logic
  window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      loadMoreData();
      loadMoreData(); // Load 2 more items automatically
    }
  });
// </script>

// </body>
// </html>

