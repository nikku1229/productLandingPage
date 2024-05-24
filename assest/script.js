function openWindow(url,index){
    window.location.href = url;
    localStorage.removeItem('productIndex');
    localStorage.setItem('productIndex',index);
}

