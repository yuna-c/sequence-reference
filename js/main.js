const frame = document.querySelector('figure');
let tags = '';
// console.log(img);

for (let i = 0; i < 200; i++) {
	tags += `<img src = 'img/pic${i}.jpg' title='pic${i}'>`;
}
console.log(tags);
frame.innerHTML = tags;
