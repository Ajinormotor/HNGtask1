const slackUserName = document.querySelector(' [data-testid="slackUsername"]');
slackUserName.textContent = "I'm Teitei Wisdom";



const currentDay = document.querySelector('[data-testid="currentDayOfTheWeek"]')

 currentDay.textContent = new Date().toLocaleDateString({weekday: 'long'});



const currentUTCime = document.querySelector('[data-testid="currentUTCTime"]');

setInterval(()=>{
currentUTCime.textContent = Date.now();
}, 1000)






