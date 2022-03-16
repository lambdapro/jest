const func = require('./parallel');

it.concurrent('Samsung', async () => {

    const value = await func.test1("samsung","Android","11","Galaxy S21");

},100000);


it.concurrent('Google', async () => {

    const value = await func.test1("Google","Android","11","Galaxy S21");

},100000);


it.concurrent('Iphone', async () => {

    const value = await func.test1("Iphone","Android","11","Galaxy S21");
},100000);


