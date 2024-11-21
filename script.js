// 등가속도일 때 초기 속도 표기
document.getElementById('motion-type').addEventListener('change', function() {
    const motionType = this.value;
    const uniformacceleration = document.getElementById('uniform-acceleration');
    if (motionType === 'uniform-acceleration') {
        uniformacceleration.style.display = 'block';
    } else {
        uniformacceleration.style.display = 'none';
    }
});

// 계산 함수 (수식 바꾸기)
function calculate() {
    const time = parseFloat(document.getElementById('time').value);
    const distance = parseFloat(document.getElementById('distance').value);
    const currenttime = parseFloat(document.getElementById('current time').value);
    const motionType = document.getElementById('motion-type').value;
    const initialVelocity = parseFloat(document.getElementById('initial-velocity').value);
    let velocity, acceleration, currentvelocity, distancetraveled, currentdistancetraveled;

    if (motionType === 'freefall') {
        // 자유낙하 운동일 때(계산)
        velocity = 9.8 * time;
        acceleration = 9.8;
        currentvelocity = 9.8 * currenttime;
        distancetraveled = 9.8 * time + 0.5 * acceleration * (time * time);
        currentdistancetraveled = 0.5 * acceleration * (currenttime * currenttime);
    } else if (motionType === 'uniform-acceleration') {
        // 등가속도 운동일 때(계산)
        acceleration = (2 * (distance - initialVelocity * time)) / (time * time);
        velocity = initialVelocity + acceleration * time;
        currentvelocity = initialVelocity + acceleration * currenttime;
        distancetraveled = distance;
        currentdistancetraveled = initialVelocity * currenttime + 0.5 * acceleration * (currenttime * currenttime);
    }
    velocity = velocity.toFixed(2)
    acceleration = acceleration.toFixed(2)
    currentvelocity = currentvelocity.toFixed(2)
    distancetraveled = distancetraveled.toFixed(2)
    currentdistancetraveled = currentdistancetraveled.toFixed(2)

    // 결과 출력
    document.getElementById('currentdistancetraveled').textContent = `현재 이동 거리: ${currentdistancetraveled} m`;
    document.getElementById('distancetraveled').textContent = `이동 거리: ${distancetraveled} m`;
    document.getElementById('currentvelocity').textContent = `순간 속도: ${currentvelocity} m/s`;
    document.getElementById('velocity').textContent = `속도: ${velocity} m/s`;
    document.getElementById('acceleration').textContent = `가속도: ${acceleration} m/s²`;

}
