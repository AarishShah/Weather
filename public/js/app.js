console.log('Client side javascript is loaded.');

// fetch('https://puzzle.mead.io/puzzle').then((response) =>
// {
//     response.json().then((data) =>
//     {
//         console.log(data);
//     })
// })

// fetch('http://localhost:3000/weather?address=hi').then((response) =>
// {
//     response.json().then((data) =>
//     {
//         if (data.error)
//         {
//             console.log(data.error);
//         }
//         else
//         {
//             console.log(data.location);
//             console.log(data.forecast);
//         }
//     })
// })

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1'); // # is used to select by id
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) =>
{
    e.preventDefault(); // prevent the default behavior of refreshing the page

    const location = search.value;

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    console.log(location);

    fetch('http://localhost:3000/weather?address=' + location).then((response) =>
    {
        response.json().then((data) =>
        {
            if (data.error)
            {
                messageOne.textContent = data.error;
                // console.log(data.error);
            }
            else
            {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
                // console.log(data.location);
                // console.log(data.forecast);
            }
        })
    })
})