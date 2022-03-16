const wd = require('wd');
const Driverfactory = require('./driverfactory');

async function test1(name,platform,version,device) {

        //Getting WebDriver Instance Through DriverFactory Function
         driver = await Driverfactory.createDriver(name,platform,version,device);
          //await driver.quit();

}

module.exports = {
    test1
}
