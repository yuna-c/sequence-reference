const frame = document.querySelector('figure');
const mask = document.querySelector('.mask');
const countEl = mask.querySelector('span');
const imgNum = 200;

const imgs = createImgs(frame, imgNum);
imgLoadedCheck(imgs);
frame.addEventListener('mousemove', showImg);
//이벤트 객체가 함수에 호출할 때 인수 전달 하지 않더라도 직계자식함수로 연결되어 있기 때문에 자동으로 연결이 된다(다른 인수 들어갈 시 감싸야댐)

// 동적으로 이미지 생성 함수 분리(돔 생성하자마자 바로 리턴해서 활용가능하도록 처리)
function createImgs(frame, imgNum, imgName = 'pic') {
	let tags = '';
	for (let i = 0; i < imgNum; i++) tags += `<img src = 'img/${imgName}${i}.jpg' title='pic${i}'>`;

	frame.innerHTML = tags;
	return frame.querySelectorAll('img');
}

// 이미지 소스 로딩 유무 체크함수
function imgLoadedCheck(imgs) {
	let count = 0;
	imgs.forEach((img) => {
		img.addEventListener('error', (e) => {
			e.currentTarget.setAtrribute('src', 'img/logo.png');
		});

		img.addEventListener('load', () => {
			countEl.innerText = parseInt((count / imgNum) * 100) + 1;
			count++;
			if (count === imgNum) mask.remove();
		});
	});
}

// 현재 마우스 포인터 위치에 따른 이미지 보임 함수
function showImg(e) {
	const { pageX } = e;
	const percent = parseInt((pageX / window.innerWidth) * imgNum);

	imgs.forEach((img) => (img.style.visibility = 'hidden'));
	imgs[percent].style.visibility = 'visible';
}
