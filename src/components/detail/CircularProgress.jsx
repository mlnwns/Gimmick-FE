import React from 'react';
import Svg, {Circle} from 'react-native-svg';
import {scale} from 'react-native-size-matters';
import styled from 'styled-components/native';

const CircularProgress = ({icon, color, progress}) => {
  const radius = scale(110);
  const smallCircleRadius = scale(6.5);
  const circleCount = 8;
  const angleStep = (2 * Math.PI) / circleCount;

  // 원형 프로그레스 계산
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * progress; // progress가 1에서 0으로 감소

  // 작은 원들의 활성화 상태 계산
  const getSmallCircleOpacity = index => {
    // 각 작은 원의 위치에 해당하는 progress 값 계산 (0~1)
    const circleThreshold = 1 - (index + 1) / circleCount;
    // progress가 해당 원의 threshold보다 작으면 흐리게 표시
    return progress <= circleThreshold ? 0.3 : 1;
  };

  const circles = Array.from({length: circleCount}).map((_, index) => {
    const angle = index * angleStep;
    const x = radius + radius * Math.cos(angle);
    const y = radius + radius * Math.sin(angle);

    return (
      <Circle
        key={index}
        cx={x}
        cy={y}
        r={smallCircleRadius}
        fill={color}
        opacity={getSmallCircleOpacity(index)}
      />
    );
  });

  return (
    <Container>
      <Svg
        height={radius * 2.2}
        width={radius * 2.2}
        viewBox={`-${radius * 0.1} -${radius * 0.1} ${radius * 2.2} ${
          radius * 2.2
        }`}>
        {/* 배경 원 */}
        <Circle
          cx={radius}
          cy={radius}
          r={radius}
          stroke={color}
          opacity={0.3}
          strokeWidth="3"
          fill="none"
        />
        {/* 프로그레스 원 */}
        <Circle
          cx={radius}
          cy={radius}
          r={radius}
          stroke={color}
          opacity={0.64}
          strokeWidth="3"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${radius} ${radius})`} // 시작점을 12시 방향으로
        />
        {circles}
      </Svg>
      <ImageContainer>
        <FoodText>{icon}</FoodText>
      </ImageContainer>
    </Container>
  );
};

export default CircularProgress;

const Container = styled.View`
  justify-content: center;
  align-items: center;
  overflow: visible;
  margin-top: ${scale(40)}px;
`;

const ImageContainer = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
`;

const FoodText = styled.Text`
  font-size: 125px;
`;

const FoodImage = styled.Image`
  width: ${scale(140)}px;
  height: ${scale(140)}px;
`;
