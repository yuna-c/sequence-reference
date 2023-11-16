const frame = document.querySelector('figure');
const imgNum = 200;
let tags = '';

/*
  1. 동적으로 200개의 img Dom 생성
  2. 마우스 무브시  포인터의 가로 좌표값을 200분율로 변환
  3. 200분율 중 현재 마우스 포인터 위치 순번에 따른 이미지만 보임 처리
  4. 이미지 돔이 생성되고 이미지 소수기 로딩될 때마다 로딩 순번을 백분율 처리
  5. 이미지 생성시 해당 이미지에 에러 발생시 대체 이미지 처리
  6. 이미지 소스가 모두 로딩되기 전 까지는 마스크 화면으로 가려 주면서 로딩 상황을 100분율 출력
  7. 모든 이미지 소스 로딩 완료시 마스크 제거
  */

for (let i = 0; i < imgNum; i++) {
	tags += `<img src = 'img/pic${i}.jpg' title='pic${i}'>`;
}

frame.innerHTML = tags;
const imgs = frame.querySelectorAll('img');
console.log(imgs);

frame.addEventListener('mousemove', (e) => {
	const { pageX } = e;
	const percent = parseInt((pageX / window.innerWidth) * imgNum);

	console.log(percent);

	imgs.forEach((img) => (img.style.visibility = 'hidden'));
	imgs[percent].style.visibility = 'visible';
});
