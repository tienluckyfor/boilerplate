const translate = require('@vitalets/google-translate-api');

translate('Chào mừng bạn', { from: 'vi', to: 'en' }).then(res => {
    console.log(res.text);
    //=> I speak English
    console.log(res.from.language.iso);
    //=> nl
}).catch(err => {
    console.error(err);
});