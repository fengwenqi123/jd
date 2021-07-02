const CronJob = require('cron').CronJob
const JD = require('./JD-DailyBonus/JD_DailyBonus')

const JDJob = new CronJob('* * * * * *', JD.ReadCookie)
JDJob.start()
