var fs = require('fs');

function updateClassInfo( classCode, dateString, objectivesArr ){
    console.log('updateClass is running');
    console.log(classCode);
    console.log(objectivesArr);
    var classesInfo = require('./classesInfo.json');
    var studentFeedback = require('./students.json');

    // if the students have not provided feedback do not run anything.
    // the db files will only update if the inputted class exists (no new class will be created!)
    if( classesInfo[classCode] ){
        // update the info available for the classes
        classesInfo[classCode].forms[dateString] = objectivesArr;
        var newClassesInfo = JSON.stringify(classesInfo);
        fs.writeFile('classesInfo.json', newClassesInfo, function(error){
            if( error ) throw error;
            console.log( 'classes file updated!' );
        });

        // create a new entry in the students' feedback "database"
        studentFeedback[classCode][dateString] = {
            "satisfaction":[],
            "engagement":[],
            "support":[]
        };
        console.log(studentFeedback);
        var newStudentFeedback = JSON.stringify(studentFeedback);
        // update the db file
        fs.writeFile('students.json', newStudentFeedback, function(error){
            if( error ) throw error;
            console.log( 'students file updated!' );
        });
    }
    else { console.log( 'It seems that the class is not in the system!' ); }
}

module.exports = updateClassInfo;

// updateClassInfo( 'classCode1', "2016-02-15", ["objective1","objective2"] );
