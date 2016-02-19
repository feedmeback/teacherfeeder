(function(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(req,res){
        if(req.readyState===4 && req.status === 200){
            var resObj = JSON.parse(req.responseText);
            var resultsRow = document.getElementById('results');

            var engagementCell = document.createElement('td');
            engagementCell.innerHTML = resObj.engagement;

            var satisfactionCell = document.createElement('td');
            satisfactionCell.innerHTML = resObj.satisfaction;

            var supportCell = document.createElement('td');
            supportCell.innerHTML = resObj.support;

            resultsRow.appendChild(engagementCell);
            resultsRow.appendChild(satisfactionCell);
            resultsRow.appendChild(supportCell);
        }
    }
    xhr.open('GET','/results');
    xhr.send();


})();
