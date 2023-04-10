
function createCookie(name) {
    const date = new Date();
    date.setDate(date.getDate + 1); //수명을 하루로 설정.
    let cookie = '';
    cookie += `${name}=true;`; //문자열로 세미콜론을 반드시 찍어야함!
    cookie += 'expires=' + date.toUTCString();
    document.cookie = cookie;
}

function getCookie(name) {
    const cookies = document.cookie.split(';');

    for(let c of cookies) {
        if(c.search(name) !== -1) {//쿠키가 존재한다면
            return true;
         }
    }
    //return false;
}
