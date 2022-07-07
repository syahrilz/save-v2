const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const GoStumble = (auth) => new Promise((resolve, reject) => {

  fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {
    method: 'GET',
    headers: {
      'authorization': auth
    }
  })
    .then(res => res.text())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });

});

(async () => {

  console.log(`


                   ${chalk.underline.whiteBright.bold('HACK TROPY AND CROWN SAFE')}

${chalk.red(' Note : Delay 7 Detik' )}

     ${chalk.blueBright('By : Syahril')}
     ${chalk.green('Website')} : ${chalk.white.underline('syahrilz.github.io')}
`);

  const auth = rs.question('[+] Enter Authentication Code! : ');
  console.log('');

  while (true) {


    const result = await GoStumble(auth);
    if (!result) {

    } else if (result.includes('User')) {

      const data = JSON.parse(result);
      const username = data.User.Username;
      const country = data.User.Country;
      const trophy = data.User.SkillRating;
      const crown = data.User.Crowns;

console.log(chalk.bgBlack(`\r
[ ${moment().format('HH:mm:ss')} ]
 ${chalk.red('- USER ')} : ${chalk.bgRed(`${username}`)} 
 ${chalk.red('- TROPY')} : ${chalk.bgRed(`${trophy}`)} 
 ${chalk.red('- CROWN')} : ${chalk.bgRed(`${crown}`)}`));
 await sleep (7000); 
     
      
    } else if (result == 'BANNED') {
      console.log(chalk.bgRed(`BANNED !!`));
     break;
    }
  }


})();
