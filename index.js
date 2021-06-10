const Discord = require('discord.js')

var d = new Date();

const bot = new Discord.Client

bot.on('ready',()=>{console.log("Online")});


//say
bot.on('message', (msg) =>{
  if(msg.content == ('!say')){
    msg.reply("fuck");
  }
})

//insult
bot.on('message', (msg) =>{
  if(msg.content == ('!insult')){
    msg.reply("fuck you");
  }
})


//repeat
bot.on('message', (msg) =>{
  if(msg.content.includes('!repeat')){
    if(msg.content.includes('im ') || msg.content.includes('Im ') || msg.content.includes('i am ') || msg.content.includes('I am ')){
      msg.channel.send("yes we know");
    }
    else if(msg.content.substring(8) != "" && msg.author.username != "Ahmad's son (The bot)"){
      msg.channel.send(msg.content.substring(8));
      msg.delete();
    }
  }
})

//insultother
bot.on('message', (msg) =>{
  if(msg.content.includes('!insultother')){
    if(msg.content.substring(13) != "" && msg.author.username != "Ahmad's son (The bot)"){
      msg.channel.send("fuck you, " + msg.content.substring(13));
      msg.delete();
    }
  }
})

//ily
bot.on('message', (msg) =>{
  if(msg.content === ('!ily')){
    msg.reply('ilyt!');
  }
})

//gender
bot.on('message', (msg) => {
  if(msg.content == ('!gender')){
    msg.reply("khusra");
  }
})

//bonobo
bot.on('message', (msg) => {
  if(msg.content === ('!bonobo')){
    msg.reply("https://www.pinterest.com/pin/358458451585308131/");
  }
})


//coin
bot.on('message', (msg) =>{
  if(msg.content === ('!coin')){
    if(Math.random()*2 > 1){
      msg.channel.send("Heads!")
    }
    else{
      msg.channel.send("Tails!")
    }
  }
})

//legend
bot.on('message', (msg) =>{
  if(msg.content === ('!me')){
    msg.channel.send(msg.author.username + " Is a legend.");
    msg.delete()
  }
})


//ping
bot.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});


//!link
bot.on('message', msg => {
  if (msg.content === ('!link'))
  {

    d = new Date();

    //monday

    if(d.getDay() === 1){
      if(d.getHours() === 8){
        msg.channel.send('Pak Studies: https://meet.google.com/srg-vvyx-bra');
      }
      if(d.getHours() === 9){
        msg.channel.send('Sciences: https://meet.google.com/xmf-hdts-xuf');
      }
      if(d.getHours() === 10){
        msg.channel.send('Urdu: https://meet.google.com/yrp-jyfk-iwh');
      }
      if(d.getHours() === 11 && d.getMinute() < 40){
        msg.channel.send('Break for 40 minutes :)');
      }
      if(d.getHours() === 11 && d.getMinutes() > 40 || d.getHours() === 12 && d.getMinutes() < 40){
        msg.channel.send('English: https://zoom.us/j/95162734853?pwd=MS9HVzQ3UkxUeVRZL0ZKMkY3VHE4Zz09');
      }
      if(d.getHours() === 12 && d.getMinutes() > 40  || d.getHours() === 13 && d.getMinutes() < 40){
        msg.channel.send('Islmaiat: https://meet.google.com/faq-oxmg-pqg');
      }
      if(d.getHours() === 13 && d.getMinutes() > 40  || d.getHours() === 14 && d.getMinutes() < 40){
        msg.channel.send('French: Check on managebac for link.');
      }
    }

      //tuesday

    else if(d.getDay() === 2){
      if(d.getHours() === 8){
        msg.channel.send('Math: https://meet.google.com/fig-duct-ank');
      }
      if(d.getHours() === 9){
        msg.channel.send('Sciences: https://meet.google.com/xmf-hdts-xuf');
      }
      if(d.getHours() === 10){
        msg.channel.send('IDU: https://meet.google.com/uek-joba-pnb');
      }
      if(d.getHours() === 11 && d.getMinute() < 40){
        msg.channel.send('Break for 40 minutes :)');
      }
      if(d.getHours() === 11 && d.getMinutes() > 40 || d.getHours() === 12 && d.getMinutes() < 40){
        msg.channel.send('PE: https://meet.google.com/hrh-gaqa-fei');
      }
      if(d.getHours() === 12 && d.getMinutes() > 40  || d.getHours() === 13 && d.getMinutes() < 40){
        msg.channel.send('Pak Studies: https://meet.google.com/srg-vvyx-bra');
      }
      if(d.getHours() === 13 && d.getMinutes() > 40  || d.getHours() === 14 && d.getMinutes() < 40){
        msg.channel.send('English: https://zoom.us/j/95162734853?pwd=MS9HVzQ3UkxUeVRZL0ZKMkY3VHE4Zz09');
      }
    }

      //wednesday

    else if(d.getDay() === 3){
      if(d.getHours() === 8){
        msg.channel.send('Urdu: https://meet.google.com/yrp-jyfk-iwh');
      }
      if(d.getHours() === 9){
        msg.channel.send('English: https://zoom.us/j/95162734853?pwd=MS9HVzQ3UkxUeVRZL0ZKMkY3VHE4Zz09');
      }
      if(d.getHours() === 10){
        msg.channel.send('Art: https://meet.google.com/ron-kfnk-cux');
      }
      if(d.getHours() === 11 && d.getMinute() < 40){
        msg.channel.send('Break for 40 minutes :)');
      }
      if(d.getHours() === 11 && d.getMinutes() > 40 || d.getHours() === 12 && d.getMinutes() < 40){
        msg.channel.send('Art: https://meet.google.com/ron-kfnk-cux');
      }
      if(d.getHours() === 12 && d.getMinutes() > 40  || d.getHours() === 13 && d.getMinutes() < 40){
        msg.channel.send('French: Check managebac for link');
      }
      if(d.getHours() === 13 && d.getMinutes() > 40  || d.getHours() === 14 && d.getMinutes() < 40){
        msg.channel.send('Pak Studies: https://meet.google.com/srg-vvyx-bra');
      }

    }

    //thrusday

  else if(d.getDay() === 4){
    if(d.getHours() === 8){
      msg.channel.send('Design: https://meet.google.com/bmz-fhmg-wpy');
    }
    if(d.getHours() === 9){
      msg.channel.send('Design: https://meet.google.com/bmz-fhmg-wpy');
    }
    if(d.getHours() === 10){
      msg.channel.send('Math: https://meet.google.com/fig-duct-ank');
    }
    if(d.getHours() === 11 && d.getMinute() < 40){
      msg.channel.send('Break for 40 minutes :)');
    }
    if(d.getHours() === 11 && d.getMinutes() > 40 || d.getHours() === 12 && d.getMinutes() < 40){
      msg.channel.send('Science: https://meet.google.com/xmf-hdts-xuf');
    }
    if(d.getHours() === 12 && d.getMinutes() > 40  || d.getHours() === 13 && d.getMinutes() < 40){
      msg.channel.send('French: Check managebac for link');
    }
    if(d.getHours() === 13 && d.getMinutes() > 40  || d.getHours() === 14 && d.getMinutes() < 40){
      msg.channel.send('Urdu: https://meet.google.com/yrp-jyfk-iwh');
    }

  }

  //friday

  else if(d.getDay() === 4){
    if(d.getHours() === 8){
      msg.channel.send('Urdu: https://meet.google.com/yrp-jyfk-iwh');
    }
    if(d.getHours() === 9){
      msg.channel.send('Personal Project: https://us04web.zoom.us/j/7998241635?pwd=RnZTWFNxeDNPanBkaUp3ME41SW1uZz09');
    }
    if(d.getHours() === 10){
      msg.channel.send('PSHE: On bookmarks');
    }
    if(d.getHours() === 11 && d.getMinutes() < 20){
      msg.channel.send('Break for 20 minutes :)');
    }
    if(d.getHours() === 11 && d.getMinutes() > 20){
      msg.channel.send('Islamiat: https://meet.google.com/faq-oxmg-pqg');
    }

  }

  else{
    msg.reply('no class rn :)');
  }




}});



var prefix = '!';

bot.on('message', msg =>{
  if(msg.content.substring(0,1) == prefix){
    var arr = msg.content.substrin(1).split(" ");
    var cmd = arr[0];
    switch (cmd) {
      case 'hi':
        msg.channel.send("hi");
        break;
      default:
        msg.channel.send("...");
    }
  }
})

bot.login('NzYwNDI2Nzc3MDMzODM0NTI3.X3L4nw.kFH17UnUvidBqb7urgtConoJ-YE')
