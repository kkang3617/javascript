\\<<!-- 주석입니다. -->>

<!-- 마크다운 확인 사이트 https://dillinger.io/ -->
# 제목1 (h1)
## 제목2 (h2)
### 제목3 (h3)
#### 제목4 (h4)
##### 제목5 (h5)
###### 제목6 (h6)


이탤릭체는 *별표(asterisks)* 혹은 _언더바(underscore)_
두꺼운 글씨 **별 두개** 혹은 _언더바 두개_ 로 표기.
취소선은 ~~물결 두개~~를 사용
<u>밑줄</u> 긋기

1. 순서가 필요한 목록
1. 순서가 필요한 목록
    - 순서가 필요하지 않은 목록(서브)
    - 순서가 필요하지 않은 목록(서브)

- 순서가 필요하지 않은 목록(서브)
    - 순서가 필요하지 않은 목록(서브)
    - 순서가 필요하지 않은 목록(서브)

1. 순서가 필요한 목록
    1. 순서가 필요한 목록
    1. 순서가 필요한 목록
    1. 순서가 필요한 목록

[NAVER](https://www.naver.com)
[GOOGLE](https://www.google.com "링크설명(title) 작성")

[GitHub][1]

문서 안에서 [참조링크]를 그대로 사용하는 것도 가능하다.

[1]: https://github.com/kkang3617
[참조링크]: https://www.naver.com

![대체 텍스트를 작성합니다!](https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTVfMjA5%2FMDAxNjc4ODY0NDExODM2.RI7kvmNFTQYvFBCMqdCx6e-c7UwMop76Ka2oDGvULoIg.vaAWe9hDdyj1p7M-KVv7ff16kIEUj7Z0YcFozOu4C0cg.JPEG.africaamc%2FCK_yaytg1387533.jpg&type=sc960_832 "그림설명입니다.")

```javascript
     const block7 = setTimeout(() => {
        $tutorialBox7.style.display = 'none';
        $yellowBox7.style.display = 'none';
        $up7.style.display = 'none';
        
        /* 스코어 초기화 */
        const $scoreUp = document.querySelector('.scores');
        $scoreUp.innerHTML = '000';

        clearTimeout(block7);
    }, 14000);
```        
```css
.list > li {
        position: absolute;
}
```
```html
<a href="https://www.naver.com">네이버로 가자!</a>
```

***
---


|번호|이름|나이|
|---|---|---|
|1|홍길동|30세|
|2|홍길동|25세|

---
인용문 (blockQuote)

> 남의 말이나 다른 글에서 직접 또는 간접적으로 따온 문장
> _인용문 하나 더!_

> 인용문
>> 중첩된 인용문
>>> 중첩의 중첩된 인용문
>>> 중첩의 중첩된 인용문
>>> 중첩의 중첩된 인용문

<img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTVfMjA5%2FMDAxNjc4ODY0NDExODM2.RI7kvmNFTQYvFBCMqdCx6e-c7UwMop76Ka2oDGvULoIg.vaAWe9hDdyj1p7M-KVv7ff16kIEUj7Z0YcFozOu4C0cg.JPEG.africaamc%2FCK_yaytg1387533.jpg&type=sc960_832" alt="pic">