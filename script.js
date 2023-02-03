const container = document.querySelector('#container');

const content = document.createElement('div');
content.style.color = 'red';
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const content2 = document.createElement('id');
content2.classList.add('content2');
content2.textContent = 'test';

const content3 = document.createElement('div');
content3.style.color = 'green';
content3.classList.add('content');
content3.textContent = 'This is the glorious text-content!';


container.appendChild(content);
container.appendChild(content2);
container.appendChild(content3);
