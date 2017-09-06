const Twitter = require('twitter');
const config = require('./config.default.js');
const twitterScreenName = require('twitter-screen-name');
const T = new Twitter(config);

const params = {
    q: 'http://youtu.be/GjUDI-AhHfI?a',
    lang: 'en',
    count: 10,
    result_type: 'recent',
}

T.get('search/tweets', params, (err, data) => {
    if (!err) {
        for (let i = 0; i < data.statuses.length; i++) {
            //let screen_name = data.statuses[i].user.screen_name;
            let user_id = data.statuses[i].user.id_str;
            let filtered_screen_name = data.statuses.filter((screen_name) => {
                return data.statuses[i].user.screen_name === twitterScreenName('https://twitter.com/code_everyday');
            });
            let text = 'This is a bot message, cool video, not so cool news, Sed!';
            T.post('direct_messages/new', {user_id, filtered_screen_name, text}, (err, response) => {
                if (err) {
                    console.log(err[0].message);
                }
                else {
                    console.log(`Message delivered to user ${filtered_screen_name}`);
                    console.log(`The message is ${text}`);
                }
            });
        }
    }
    else {
        throw new Error;
        console.log(Error);
    }
})