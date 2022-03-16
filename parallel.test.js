const func = require('./parallel');

it.concurrent('Samsung', async () => {

    const value = await func.test1("samsung","Android","11","Galaxy S21");

},100000);


it.concurrent('Google', async () => {

    const value = await func.test1("Google","Android","12","Google Pixel 6");

},100000);


it.concurrent('Iphone', async () => {

    const value = await func.test1("Iphone","iOS","14.0","iPhone 11");
},100000);


