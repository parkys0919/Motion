// 등가속도일 때 초기 속도 표기
document.getElementById('motion-type').addEventListener('change', function() {
    const motionType = this.value;
    const initialVelocitySection = document.getElementById('initial-velocity-section');
    if (motionType === 'uniform-acceleration') {
        initialVelocitySection.style.display = 'block';
    } else {
        initialVelocitySection.style.display = 'none';
    }
});

// 계산 함수 (수식 바꾸기)
function calculate() {
    const time = parseFloat(document.getElementById('time').value);
    const distance = parseFloat(document.getElementById('distance').value);
    const currunttime = parseFloat(document.getElementById('current time').value);
    const motionType = document.getElementById('motion-type').value;
    let velocity, acceleration;

    if (motionType === 'uniform') {
        // 등속도 운동일 때(계산)
        velocity = distance / time;
        acceleration = 0;
    } else if (motionType === 'uniform-acceleration') {
        // 등가속도 운동일 때(계산)
        const initialVelocity = parseFloat(document.getElementById('initial-velocity').value);
        acceleration = (2 * (distance - initialVelocity * time)) / (time * time);
        velocity = initialVelocity + acceleration * time;
    }
    velocity = velocity.toFixed(2)
    acceleration = acceleration.toFixed(2)

    // 결과 출력
    document.getElementById('velocity').textContent = `속도: ${velocity} m/s`;
    document.getElementById('acceleration').textContent = `가속도: ${acceleration} m/s²`;
}
