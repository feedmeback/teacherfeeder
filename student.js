var xhr = new XMLHttpRequest();

document.getElementById('submit').addEventListener('click',function(e){
    e.preventDefault();
    var engagement = document.getElementById('engagement').value;
    var satisfaction = document.getElementById('satisfaction').value;
    var support = document.getElementById('support').value;


    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4 && xhr.status === 200){
            //document.write('Success!!');
            console.log(xhr.responseText);
        } else {
            console.log('error');
        }
    };

    var query = 'classcode=' + 'Math101' + '&date=19022016' + '&engagement=' + engagement + '&satisfaction=' + satisfaction + '&support=' + support;
    xhr.open('GET', '/studInp?' + query);
    xhr.send();


});
