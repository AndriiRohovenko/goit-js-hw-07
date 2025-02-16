const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url: 'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

const gallery = document.querySelector('.gallery');

gallery.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    width: 1128px;
    margin: 0px auto;
    padding: 0px;
    gap: 48px 24px;
`;

for (const img_obj of images) {
  const list_el = document.createElement('li');

  list_el.style.cssText = `
    margin: 0px;
    padding: 0px;
    width: 360px;
    height: 300px;
`;

  const list_img = document.createElement('img');

  list_img.src = img_obj.url;
  list_img.alt = img_obj.alt;

  list_img.style.cssText = `
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;`;

  gallery.appendChild(list_el).appendChild(list_img);
}
