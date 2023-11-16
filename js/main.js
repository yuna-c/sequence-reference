const frame = document.querySelector('figure');
const imgNum = 200;
let tags = '';
// console.log(img);

for (let i = 0; i < imgNum; i++) {
	tags += `<img src = 'img/pic${i}.jpg' title='pic${i}'>`;
}
//console.log(tags);
frame.innerHTML = tags;
frame.addEventListener('mousemove', (e) => {
	const { pageX /*pageY*/ } = e;
	//console.log('x축', pageX);
	// 백분율 공식 : 현재수치값/ 전체수치값 * 100;
	const percent = parseInt((pageX / window.innerWidth) * imgNum);
	console.log(percent);
	// parseInt('숫자') : 인수로 전달된 값의 소수점 아래를 버리고 정수로 반한
	// parsFloat('숫자') : 인수로 전달된 값의 소수점까지 포함한 실수로 반환
});

/*
  1. 동적으로 200개의 img Dom 생성
  2. 마우스 무브시  포인터의 가로 좌표값을 200분율로 변환
  3. 200분율 중 현재 마우스 포인터 위치 순번에 따른 이미지만 보임 처리
  4. 이미지 돔이 생성되고 이미지 소수기 로딩될 때마다 로딩 순번을 백분율 처리
  5. 이미지 생성시 해당 이미지에 에러 발생시 대체 이미지 처리
  6. 이미지 소스가 모두 로딩되기 전 까지는 마스크 화면으로 가려 주면서 로딩 상황을 100분율 출력
  7. 모든 이미지 소스 로딩 완료시 마스크 제거
  */
