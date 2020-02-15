import fs from "fs";

console.log("Hello world");
fs.readFile('example_log.txt', function (err, logData) {

    // Если возникла ошибка, мы кидаем исключение
    // и программа заканчивается
    if (err) throw err;

    // logData это объект типа Buffer, переводим в строку
    let text = logData.toString();
});