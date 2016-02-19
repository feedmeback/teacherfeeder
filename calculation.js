var studentFeedback = require('./students.json');
engagementArr = studentFeedback.Math101["19/02/16"].engagement;
satisfactionArr = studentFeedback.Math101["19/02/16"].satisfaction;
supportArr  = studentFeedback.Math101["19/02/16"].support;

engagementTot = engagementArr.reduce(function(item1,item2){ return item1+item2 });
satisfactionTot = satisfactionArr.reduce(function(item1,item2){ return item1+item2 });
supportTot = supportArr.reduce(function(item1,item2){ return item1+item2 });

module.exports = {
    engagement: engagementTot,
    satisfaction: satisfactionTot,
    support: supportTot
}
