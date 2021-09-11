function apiRequest() {
    let request = new XMLHttpRequest;
request.open("GET","https://www.boredapi.com/api/activity");
request.send();
request.onload = () => {
    try {
        console.log(request);
        debugger
        document.getElementsByClassName('activity')[0].innerText=JSON.parse(request.responseText).activity;
    }
    catch {
        console.log(request.status);
    }
}
}