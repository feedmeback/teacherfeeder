var fs = require('fs');

function updateStudentData( classCode, dateString, feedbackObj ){
    console.log('student data running');
    var studentFeedback = require('./students.json');
    // run function only if classCode exists and if teacher has entered data for the specific date
    if( studentFeedback[classCode][dateString] ){
        // add the values in the respective json arrays
        studentFeedback[classCode][dateString].satisfaction.push( Number(feedbackObj.satisfaction ) );
        studentFeedback[classCode][dateString].engagement.push( Number( feedbackObj.engagement ) );
        studentFeedback[classCode][dateString].support.push( Number( feedbackObj.support ) );
        var newStudentFeedback = JSON.stringify( studentFeedback )
        // update the json file with the updated students object
        fs.writeFile('students.json', newStudentFeedback, function(error){
            if( error ) throw error;
            console.log( 'students file updated!' );
        });
    } else { console.log( 'classCode or date is not stored yet.')}
}

// updateStudentData( "classCode1", "2016-02-15",{"satisfaction":5,"engagement":2,"support":1} );

module.exports = updateStudentData;
