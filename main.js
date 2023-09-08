const slackUserName = document.querySelector(' [data-testid="slackUserName"]');
slackUserName.textContent = "Teitei Wisdom";



const currentDay = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const options = { weekday: 'long' };
currentDay.textContent = new Date().toLocaleDateString('en-US', options);



const currentUTCime = document.querySelector('[data-testid="currentUTCTime"]');

setInterval(()=>{
currentUTCime.textContent = Date.now();
}, 1000)

const githubURL = document.querySelector('[data-testid="githubURL"]');
githubURL.href = "https://github.com/Ajinormotor"; 




