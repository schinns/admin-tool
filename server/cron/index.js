import cron from 'cron';

const mainCron = new cron.CronJob({
  cronTime: '* * * * * *',
  onTick: function() {
    console.log('tick');
  },
  start: false,
  timeZone: 'America/Boise'
})


const runCrons = () => {
 mainCron.start();
 console.log('CRON -- main cron running:', mainCron.running);
};

export default runCrons;
