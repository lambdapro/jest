var wd = require('wd');
var assert = require('assert');

const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY //Fetching BROWSERSTACK_ACCESS_KEY FROM THE ENVIRONMENT
const LT_USERNAME = process.env.LT_USERNAME //Fetching BROWSERSTACK_USERNAME FROM THE ENVIRONMENT


async function createDriver(name,platform,version,device) {
    if(platform === 'Android'){
        var capabilities = {
            'platform' : 'Android',
            'deviceName' : device,
            'isRealMobile' : true,
            'platformVersion' : version,
            'name': name, // test name
            'build': 'Android Build', // CI/CD job or build name
            'app': 'Android' //Pass custom id for the app
        }
    }
    
    //If test is not a Local Test, do this
    else{
        var capabilities = {
            'platform' : 'iOS',
            'deviceName' : device,
            'isRealMobile' : true,
            'platformVersion' : version,
            'name': name, // test name
            'build': 'IOS Build', // CI/CD job or build name
            'app': 'ios' //Pass custom id for the app
        }
    }

    const driver = wd.promiseChainRemote('http://'+LT_USERNAME+':'+LT_ACCESS_KEY+'@beta-hub.lambdatest.com/wd/hub');
    
    test('appium renders', async () => {
        jest.setTimeout(50000);
        await driver.init(capabilities);
        await driver.sleep(20000); 
        await driver.quit();
      //expect(await driver.hasElementByAccessibilityId('testview')).toBe(true);
      //expect(await driver.hasElementByAccessibilityId('notthere')).toBe(false);
    },50000);


    return driver;
    
 
};




//Exported Modules
module.exports = {
    createDriver
}