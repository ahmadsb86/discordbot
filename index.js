//dependencies
const Discord = require('discord.js')
const ms = require("ms");
const KrunkerJS = require('krunker.io');

//assign dependencies
const bot = new Discord.Client
const krunker = new KrunkerJS();

//bot parameters
const token = 'NzYwNDI2Nzc3MDMzODM0NTI3.X3L4nw.kFH17UnUvidBqb7urgtConoJ-YE';
const PREFIX = '!';



var d = new Date();


//ready? print online
bot.on('ready',()=>{console.log("Online")});


//commands
try{
bot.on('message', msg => {
  if(msg.author.bot === false ||  msg.author.username != "Ahmad's son (The bot)"){
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {



        case 'mute':
            var person  = msg.guild.member(msg.mentions.users.first());
            if(!person) return  msg.reply("I CANT FIND THE USER " + person)

            let mainrole = msg.guild.roles.cache.find(role => role.name === "poeple");
            let role = msg.guild.roles.cache.find(role => role.name === "mute");


            if(!role) return msg.reply("Couldn't find the mute role.")


            //for some reason args 2 is a space
            let time = args[3];

            if(!time){
                return msg.reply("You didnt specify a time!");
            }

            person.roles.remove(mainrole.id)
            person.roles.add(role.id);


            msg.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`)

            setTimeout(function(){

                person.roles.add(mainrole.id)
                person.roles.remove(role.id);
                msg.channel.send(`@${person.user.tag} has been unmuted.`)
            }, ms(time));


            break;

        case 'krunkerprofile':
          player = args[1];

          if(!player){
            msg.reply('Please specify a player!')
          }

          krunker.getUser('bzFear').then(data => {
            msg.reply(data);
          }).catch(console.error);


          break;

        case 'market':
          msg.reply("https://fortnitetracker.com/shop");
          break;

        case 'say':
          msg.channel.send("no");
          break;

        case 'repeat':
          if(msg.content.includes('!repeat')){
            if(msg.content.includes('im ') || msg.content.includes('Im ') || msg.content.includes('i am ') || msg.content.includes('I am ')){
              msg.channel.send("yes we know");
            }
            else if(args[2]!="" && msg.author.username != "Ahmad's son (The bot)"){
              msg.channel.send(msg.content.substring(8));
              msg.delete();
            }
          }
          break;


        case 'insult':
          msg.channel.send("no");
          break;


        case 'insultother':
          msg.channel.send("no");
          break;


        case 'ily':
          msg.reply("ilyt");
          break;


        case 'gender':
          msg.reply("bot");
          break;

        case 'bonobo':
          msg.reply('bonobo: ', {files: ['./bonobo.jpg']});
          break;

        case 'coin':
          if(Math.random()*2 > 1){
            msg.reply("Heads!")
          }
          else {
            msg.reply("Tails!")
          }
          break;

        case 'legend':
          msg.channel.send(msg.author.username + " is a legend.")
          msg.delete();
          break;






        case 'help':
          msg.reply(helpmessage);
          break;



        case 'timetable':
          msg.reply('timetable: ', {files: ['./TIMETABLE.png']});
          break;




        case 'del':
          if(!args[2]){
            // if(args[2] === 'max'){
            //   msg.channel.bulkDelete(msg.channel.messages.cache.length, true)
            // }
            // else{
            //   msg.channel.bulkDelete(args[2], true)
            // }

            const deleteCount = parseInt(args[2]);
            msg.channel.bulkDelete(deleteCount)

          }
          break;


        case '':
          break;


    }}})




















//hi there
bot.on('message', (msg) =>{
         if(msg.content === "hi there"){
                 msg.channel.send("Hi")
                 console.log(msg.channel.id);
          }
})



//ping
bot.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

//im bored
bot.on('message', msg => {
  if (msg.content === 'im bored') {
    msg.channel.send('https://www.boredbutton.com/');
  }
});


//!link
bot.on('message', msg => {
  if (msg.content === ('!link'))
  {

    d = new Date();

    const h = d.getHours() + 5;
    const m = d.getMinutes();

    msg.reply("DEBUG: " + d.getHours + " , " + d.getMinutes);

    //monday

    if(d.getDay() === 1){
      if(h === 8){
        msg.channel.send('Pak Studies: https://meet.google.com/srg-vvyx-bra');
      }
      if(h === 9){
        msg.channel.send('Sciences: https://meet.google.com/xmf-hdts-xuf');
      }
      if(h === 10){
        msg.channel.send('Math: https://meet.google.com/fig-duct-ank');
      }
      if(h && m< 40){
        msg.channel.send('Break for 40 minutes :)');
      }
      if(h === 11 && m > 40 || h === 12 && m < 40){
        msg.channel.send('English: https://zoom.us/j/95162734853?pwd=MS9HVzQ3UkxUeVRZL0ZKMkY3VHE4Zz09');
      }
      if(h === 12 && m > 40  || h === 13 && m < 40){
        msg.channel.send('Islmaiat: https://meet.google.com/faq-oxmg-pqg');
      }
      if(h === 13 && m > 40  || h === 14 && m < 40){
        msg.channel.send('French: Check on managebac for link.');
      }
    }


      //tuesday

    else if(d.getDay() === 2){
      if(h === 8){
        msg.channel.send('Urdu: https://meet.google.com/yrp-jyfk-iwh');
      }
      if(h === 9){
        msg.channel.send('Sciences: https://meet.google.com/xmf-hdts-xuf');
      }
      if(d. === 10){
        msg.channel.send('IDU: https://meet.google.com/uek-joba-pnb');
      }
      if(h === 11 && m < 40){
        msg.channel.send('Break for 40 minutes :)');
      }
      if(h === 11 && m > 40 || h === 12 && m < 40){
        msg.channel.send('PE: https://meet.google.com/hrh-gaqa-fei');
      }
      if(h === 12 && m > 40  || h === 13 && m < 40){
        msg.channel.send('Pak Studies: https://meet.google.com/srg-vvyx-bra');
      }
      if(h === 13 && m > 40  || h === 14 && m < 40){
        msg.channel.send('English: https://zoom.us/j/95162734853?pwd=MS9HVzQ3UkxUeVRZL0ZKMkY3VHE4Zz09');
      }
    }

      //wednesday

    else if(d.getDay() === 3){
      if(h === 8){
        msg.channel.send('Urdu: https://meet.google.com/yrp-jyfk-iwh');
      }
      if(h === 9){
        msg.channel.send('Math: https://meet.google.com/fig-duct-ank');
      }
      if(h === 10){
        msg.channel.send('Art: https://meet.google.com/ron-kfnk-cux');
      }
      if(h === 11 && m < 40){
        msg.channel.send('Break for 40 minutes :)');
      }
      if(h === 11 && m > 40 || h === 12 && m < 40){
        msg.channel.send('Art: https://meet.google.com/ron-kfnk-cux');
      }
      if(h === 12 && m > 40  || h === 13 && m < 40){
        msg.channel.send('French: Check managebac for link');
      }
      if(h === 13 && m > 40  || h === 14 && m < 40){
        msg.channel.send('Pak Studies: https://meet.google.com/srg-vvyx-bra');
      }

    }

    //thrusday

  else if(d.getDay() === 4){
    if(h === 8){
      msg.channel.send('Design: https://meet.google.com/bmz-fhmg-wpy');
    }
    if(h === 9){
      msg.channel.send('Design: https://meet.google.com/bmz-fhmg-wpy');
    }
    if(h === 10){
      msg.channel.send('English: https://zoom.us/j/95162734853?pwd=MS9HVzQ3UkxUeVRZL0ZKMkY3VHE4Zz09');
    }
    if(h === 11 && m < 40){
      msg.channel.send('Break for 40 minutes :)');
    }
    if(h === 11 && m > 40 || h === 12 && m < 40){
      msg.channel.send('Science: https://meet.google.com/xmf-hdts-xuf');
    }
    if(h === 12 && m > 40  || h === 13 && m < 40){
      msg.channel.send('French: Check managebac for link');
    }
    if(h === 13 && m > 40  || h === 14 && m < 40){
      msg.channel.send('PSHE: https://meet.google.com/jmu-hqdb-bto?pli=1&authuser=1');
    }

  }

  //friday

  else if(d.getDay() === 5){
    if(h === 8){
      msg.channel.send('Math: https://meet.google.com/fig-duct-ank');
    }
    if(h === 9){
      msg.channel.send('Personal Project: https://us04web.zoom.us/j/7998241635?pwd=RnZTWFNxeDNPanBkaUp3ME41SW1uZz09');
    }
    if(h === 10){
      msg.channel.send('break for 1 hour');
    }
    if(h === 11){
      msg.channel.send('Islmaiat: https://meet.google.com/faq-oxmg-pqg');
    }
    if(h === 12){
      msg.channel.send('Urdu: https://meet.google.com/yrp-jyfk-iwh');
    }

  }

  else{
    msg.reply('no class rn :)');
  }

  console.log(d.getDay(), h)




}});


}

catch(err){
  console.log('rip')
}

bot.login(token)








//long vars
var helpmessage = `
**Here are a list of commands and their formats.**


**School:**
!timetable -> get the school timetabe
!link -> get the current virtual class link


**Gaming:**
!krunkerprofile [player ign] -> gives the krunker profile of a given player
!market -> fortnite daily market

**Useful:**
!help -> for this help
!mute [ms to mute] -> temporily mute a user preventing them from sending messages and talking in voice channels


**Messing around:**
!repeat -> make the bot say a message
!say -> ...
!insult -> ...
!insultother -> ...
!say -> ...
!ily -> send your love to me!
!coin -> flip a coin admist a heated debate
!gender -> dont
!bonobo -> your daily dose of monke-
!legend -> fulfill your eternal quench of being complimented.


**Here are a list of words that the bot looks for in messages**

im bored -> replies by giving a link to a helpful website
ping -> Pong
hi there -> bye.

`
