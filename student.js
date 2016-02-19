var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function (){
    if (xhr.readyState === 4 && xhr.status === 200){
        //document.write('Success!!');
        console.log(xhr.responseText);
        var h3 = document.createElement('h3');
        h3.innerHTML = xhr.responseText;
        document.body.appendChild(h3);
    } else {
        console.log('error');
    }
};

document.getElementById('submit').addEventListener('click',function(e){
    e.preventDefault();
    var engagement = document.getElementById('engagement').value;
    var satisfaction = document.getElementById('satisfaction').value;
    var support = document.getElementById('support').value;


    var query = 'classcode=' + 'Math101' + '&date=19/02/16' + '&engagement=' + engagement + '&satisfaction=' + satisfaction + '&support=' + support;
    xhr.open('GET', '/studInp?' + query);
    xhr.send();


});
