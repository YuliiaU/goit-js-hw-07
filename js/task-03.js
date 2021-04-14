const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const textEl = document.querySelector('.text');
textEl.insertAdjacentHTML('afterend', '<ul id="gallery"></ul>');

const listEl = document.querySelector('#gallery');
console.log(listEl);


const imagesCreatorEl = images.map(({url, alt}) => {
    const imageEl = document.createElement('img');
    imageEl.src = url;
    imageEl.alt = alt;
    imageEl.width = 320;
    imageEl.height = 200;
    // console.log(imageEl);
    
    
    const itemEl = document.createElement('li');
    itemEl.appendChild(imageEl);
    // console.log(itemEl);
    
    return itemEl;
});

listEl.append(...imagesCreatorEl);