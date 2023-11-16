const frame = document.querySelector('figure');
const mask = document.querySelector('.mask');
const countEl = mask.querySelector('span');
const imgNum = 200;
let tags = '';

for (let i = 0; i < imgNum; i++) {
	tags += `<img src = 'img/pic${i}.jpg' title='pic${i}'>`;
}
frame.innerHTML = tags;

// 동적으로 200개의 DOM이 막 생성된 순간
const imgs = frame.querySelectorAll('img');
let count = 0;

// 각 동적 생성 이미지 요소를 반복 처리
imgs.forEach((img) => {
	img.addEventListener('error', (e) => {
		console.log('해당 이미지 로딩 실패', e);
		//특정 이미지의 소스 불러오는데에 실패하면(엑박) 대체이미지 출력
		e.currentTarget.setAtrribute('src', 'img/logo.png');
	});

	// 특정 이미지 렌더링 성공시 count값 증가 처리
	img.addEventListener('load', () => {
		// 카운트 값을 다시 백분율로 변환해서 로딩화면에 출력
		countEl.innerText = parseInt((count / imgNum) * 100) + 1;
		count++;
		// 카운트 갯수와 전체 이미지 갯수가 동일해지면 (모든 이미지소스가 랜더링 완료시 ) 마스크 제거
		if (count === imgNum) {
			mask.remove();
		}
	});
});

frame.addEventListener('mousemove', (e) => {
	const { pageX } = e;
	const percent = parseInt((pageX / window.innerWidth) * imgNum);

	imgs.forEach((img) => (img.style.visibility = 'hidden'));
	imgs[percent].style.visibility = 'visible';
});
