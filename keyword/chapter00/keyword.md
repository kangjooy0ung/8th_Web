#html
- 시맨틱 태그란?
    - div 태그로만 페이지를 구조화 하는 것이 좋은가? 🍠
        -div는 비시맨틱 태그로 페이지를 나누는 건 좋지만 따로 의미를 가지지 않기 때문에 시맨틱 태그와 div 태그그를 적절히 섞어가며 페이지를 구조화 하는 것이 좋다.

- 기타 태그 추가 정리해보기 🍠
    - 텍스트 태그를 가장 쉽고 많이 접하게 되는 것 같다. 폰트의 크기를 조절하는 <hn>태그나 단락을 구분하는 <p>태그나 줄바꿈을 하는 <br>태그를 가장 많이 보고 사용한 것 같다.
    [html 태그 모음]https://inpa.tistory.com/entry/HTML-%F0%9F%8F%B7%EF%B8%8F-%ED%83%9C%EA%B7%B8-%EC%9A%94%EC%95%BD%ED%91%9C#%3Chn%3E

#css
- border vs outline의 차이점 🍠
    - border는 css 박스 모델의 일부이며 그 크기와 위치는 요소의 레이아웃 크기 및 정렬의 영향을 줌.
    - outline은 박스 모델의 일부가 아니며 요소의 레이아웃이나 크기에 영향을 주지 않음.
    [참고]https://persistent-weed-dev.tistory.com/entry/CSS-border-%EC%86%8D%EC%84%B1%EA%B3%BC-outline-%EC%86%8D%EC%84%B1

-  ### transition  🍠

- transition-property
    - 어떤 CSS 속성을 애니메이션할지 지정하는 속성
        div {
         transition-property: background-color, transform;
        }
- transition-duration
    -애니메이션이 실행되는 시간을 설정하는 속성
        div {
            transition-duration: 0.5s;
        }
- transition-timing-function
    - 애니메이션 속도를 조절하는 가속도 곡선을 설정함 기본값은 ease이다
- transition-delay
    - 애니메이션이 시작되기 전 대기하는 시간을 설정
    div {
     transition-delay: 1s;
    }
- transition-behavior
    - 사용자의 선호도에 따라 애니메이션을 조절하는 속성

- ### animation 🍠
- animation-name
    - 사용할 애니메이션의 이름을 설정
    div {
     animation-name: fadeIn;
    }
- animation-duration
    - 애니메이션이 실행되는 시간을 설정
    div {
     animation-duration: 2s;
    }
- animation-delay
    - 애니메이션 시작 전에 대기하는 시간을 설정
    div {
     animation-delay: 1s;
    }
- anim ation-direction
    - 애니메이션의 진행 방향을 설정
    div {
     animation-direction: alternate;
    }   
- animation-iteration-count
    - 애니메이션이 몇 번 반복될지 설정(infinite를 사용하면 무한 반복)
    div {
     animation-iteration-count: 3;
    }
- animation-play-state
    - 애니메이션을 재생하거나 정지하는 속성
    div {
     animation-play-state: paused;
    }
- animation-timing-function
    - 애니메이션 속도의 변화를 설정(transition-timing-function과 동일)
- animation-fill-mode
    - 애니메이션 실행 전후 상태를 지정
    div {
     animation-fill-mode: forwards;
    }
- @keyframes
    - 애니메이션의 단계별 스타일 변화를 정의하는 규칙
- 축약형
    - 위의 속성을 한 줄로 작성 가능

# TypeScript
- null과 undefined의 차이 점에 대해 직접 작성해주세요! 🍠
    - null은 의도적으로 값이 없음을 명시
    - undefined는 초기화되지 않은 변수의 기본값

- 함수 선언식의 특징에 대해 정리해주세요! 🍠
    - 선언된 함수가 코드 실행 전에 메모리에 올라감
      함수를 선언 전에 호출할 수 있음
    - this가 호출 방식에 따라 동적으로 결정
      일반 함수의 this는 호출된 객체에 따라 결정됨
    - 매개변수 arguments 사용 가능
      함수 내부에서 arguments 객체를 사용해 모든 인자를 접근 가능

- 화살표 함수의 특징에 대해 정리해주세요! 🍠
    - 함수 표현식처럼 변수에 저장되므로 함수 선언 전 호출이 안 됨
    - this가 정적으로 결정됨
      화살표 함수의 this는 선언된 위치의 this를 그대로 유지
    - arguments 객체 사용 불가
      arguments 대신 rest parameter(...)를 사용해야 함
    - 줄여 쓸 수 있음

- 타입 스크립트에만 존재하는 타입 🍠
    - any 
        - 모든 타입을 허용하는 타입
        - 컴파일러의 타입 검사를 회피 (타입 안정성이 떨어짐)
        - 변수 타입을 모르거나 일시적으로 타입 체크를 피하고 싶을 때 사용
        - any는 타입 체크가 아예 없기 때문에 타입스크립트를 쓰는 의미가 약해짐
    - unknown 
        - 안전한 any 타입 / any처럼 모든 타입을 저장 가능하지만, 직접 사용하려면 타입 검사가 필요
        - 다른 타입에 바로 할당할 수 없음 (타입 안정성 증가)
        - 안전한 타입 체크가 필요한 경우 any 대신 사용
    - void 
        - 함수가 값을 반환하지 않을 때 사용
        - return을 사용하면 안 됨
        - 변수에는 잘 사용되지 않음
    - never 
        - 절대 값을 반환하지 않는 함수에서 사용
        - 예외를 던지는 함수 (throw) 또는 무한 루프를 도는 함수에서 사용
        - 타입이 확정될 수 없는 경우에도 활용 가능