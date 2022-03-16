
async function teardown(driver){
    await driver.quit();
}

module.exports = {
    teardown
}