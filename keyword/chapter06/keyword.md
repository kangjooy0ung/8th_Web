- `Tanstack Query Devtools`는 무엇인가요?  🍠
    - **Tanstack Query Devtools는 무엇인가요?** 🍠
        
        **TanStack Query Devtools**는 [@tanstack/react-query]를 사용할 때 쿼리 상태를 시각적으로 디버깅하고 추 ****할 수 있도록 도와주는 개발자 도구입니다.
        
        React Query를 사용할 때 데이터 요청, 캐싱, 리페치, 에러 상태 등을 실시간으로 확인할 수 있어서 매우 유용합니다.

- `useCustomFetch` 커스텀 훅과 비교했을 떄       `useQuery`는 어떤 장점이 있나요? 🍠
    - useQuery는 요청-응답 흐름을 완전히 자동화하며, 상태/캐시까지 관리합니다.
    - useCustomFetch는 단순 래퍼 수준이고, 모든 로직을 직접 구현해야 합니다.

    - `gcTime`과 `staleTime`의 차이점에 대해 정리해보세요! 🍠
    
    ### `gcTime` vs `staleTime`
    
    <aside>
    ❓
    
    **gcTime**과 **staleTime**의 개념을 다시 정리해주시고, 두 값을 어떤 식으로 설정하면 캐싱 전략에 유리한지 설명해주세요!
    
    </aside>
    
    - `gcTime`은 무엇인가요? 🍠
        - 캐시된 데이터가 메모리에서 완전히 제거되기까지의 시간
        - 기본값은 5분이며 , staleTime과 달리 캐시 유효성 여부와는 무관함
    - `staleTime`은 무엇인가요? 🍠
        - 데이터가 신선하다고 간주되는 시간
        - staleTime이 지나기 전까지는 컴포넌트가 다시 마운트되거나 focus 돼도 refetch 하지 않음
    - 두 값을 어떤 식으로 설정하여야 `캐싱 전략에 유리`한가요? 🍠
    | 상황 | staleTime | gcTime | 설명 |
    | --- | --- | --- | --- |
    | 일반적인 리스트 | 5분 | 10분 | 재요청은 적게, 메모리도 일정 시간 후 해제 |
    | 실시간 데이터 | 0 | 2분 | 항상 최신, 캐시는   짧게 |
    | 민감한 정보 | 0 | 30초 | 안전성 중심 |
    | 정적 정보 | Infinity | Infinity | 캐싱 극대화 |

    - **`오프셋 기반 페이지네이션`**과 **`커서 기반 페이지네이션`**에 대해 정리해보세요! 🍠
    - `오프셋 기반 페이지네이션`의 장/단점 (`offset-based pagination`) 🍠
        - `오프셋 기반 페이지네이션`은 무엇인가요? 🍠
            
            page=2&limit=10과 같이 특정 페이지 번호와 아이템 수를 기준으로 데이터를 가져오는 방식입니다.
            
        - `오프셋 기반 페이지네이션`의 장점? 🍠
            - 구현이 간단하고 직관적이다.
            - 특정 페이지로 이동이 쉬움 (e.g., 5페이지로 바로 이동)
        - `오프셋 기반 페이지네이션`의 단점? 🍠
            - 데이터가 추가/삭제되면 결과가 밀려서 중복/누락이 생길 수 있음
            - 대용량 데이터일수록 성능이 느려짐 (DB에서 OFFSET N 이후 탐색이 느림)

            - `커서 기반 페이지네이션`의 장/단점 (`cursor-based pagination`) 🍠
    - `커서 기반 페이지네이션`은 무엇인가요? 🍠
        
        `?cursor=abc123`처럼 특정 항목의 고유 ID 등을 기준으로 다음 데이터를 이어받는 방식
        
    - `커서 기반 페이지네이션`의 장점 🍠
        - 데이터가 변해도 중복/누락이 거의 없음
        - 대용량 데이터에 강하고, 성능이 우수함
    - `커서 기반 페이지네이션`의 단점 🍠
        - 구현이 복잡하고, 중간 페이지 이동이 어려움
        - 특정 페이지 번호로 이동하는 UI와 궁합이 맞지 않음

        - `Skeleton UI`는 무엇인가요? 🍠
    - Skeleton UI는 무엇인가요? 🍠
        - Skeleton UI는 실제 콘텐츠가 로드되기 전, 회색 박스 형태의 미리보기 화면을 보여주는 UI 패턴
        - 로딩 스피너 대신, 콘텐츠의 레이아웃과 구조를 시각적으로 예측 가능하게 표현
    - Skeleton UI를 활용했을 때 장점에 대해 정리해주세요 🍠
        - 사용자 경험 향상: 빈 화면이나 스피너보다 사용자가 덜 답답함을 느낌
        - 기다리는 동안 정보 구조를 예측할 수 있어 콘텐츠의 형태를 미리 이해할 수 있음
        - 콘텐츠가 빠르게 보이는 것처럼 느껴지는 심리적 효과를 줌