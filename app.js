const CronJob = require('cron').CronJob
const JD = require('./JD-DailyBonus/JD_DailyBonus')

const JDJob = new CronJob('* 41 8 * * *', JD.ReadCookie)
JDJob.start()
