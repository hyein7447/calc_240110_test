const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const goals = document.querySelector('#goals')
const result_Btn = document.querySelector('#result')
console.log(height, weight, goals, result_Btn)

/* 
1. 위에서 만든 변수를 이용하여 현재 키와 현재 몸무게 값을 받는 자바스크립트를 구현하세요.
2. “적정체중 = (본인신장-100)*0.9” 이와 같은 계산식을 이용하여 자바스크립트를 구현하세요.
3. 버튼 클릭 시 팝업창으로 아래와 같은 결과가 출력될 수 있도록 자바스크립트를 구현하세요.
*/

result_Btn.addEventListener('click', function(){
    // 현재 키, 몸무게 값을 받는 변수 생성
    const height_input = Number(height.value)
    const weight_input = Number(weight.value)
    console.log(height_input, weight_input)
    // "적정체중" 변수 생성
    const normal_w = Number(height_input-100)*0.9
    // 결과보기 버튼 클릭 시 "팝업창"으로 결과 출력 이벤트 생성
    goals.value = `적정 체중은 ${normal_w} kg 이며 ${weight_input-normal_w} kg 초과 되셨습니다.`
    window.alert(goals.value)
    // 입력 후 초기화
    height.value = " "
    weight.value = " "
    goals.value = " "
})