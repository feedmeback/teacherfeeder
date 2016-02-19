var xhr = new XMLHttpRequest();

document.getElementById('submit').addEventListener('click',function(e){
    console.log('helllo');
    e.preventDefault();
    var date = document.getElementById('date').value;
    var year = document.getElementById('year').value;
    var classCode = document.getElementById('class').value;
    var learningObj1 = document.getElementById('lo1').value;
    var learningObj2 = document.getElementById('lo2').value;

    var query = 'classcode=' + classCode + '&date=' + date + '&objectives=' + learningObj1 + '::' + learningObj2;
    // 'teacherSub?date=20012016&year=7&classcode=301&lo1=learn what the tudors did&lo2=remeber how many wives Henry killed'

    xhr.onreadystatechange = function (){
        console.log(xhr);
        if(xhr.readyState === 4 && xhr.status === 200){
            document.write('Success!!');
        } else {
            console.log('error');
        }
    };
    console.log(query);
    xhr.open('POST', '/teachSub?' + query);
    xhr.send();


});
//
// <input id="date" type="text" name="name" value="" placeholder="Lesson Date DD/MM/YY">
// <input id="year" type="text" name="name" value="" placeholder="Year group">
// <input id="class" type="text" name="name" value="" placeholder="Class">
// <input class="lo" id="lo1" type="text" name="name" value="" placeholder="Learning objective 1">
// <input class="lo" id=
