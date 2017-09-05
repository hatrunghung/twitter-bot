const Twitter = require('twitter');
const config = require('./config.default.js');
const T = new Twitter(config);

const followParams = {
    q: '#graphQL',
    lang: 'en',
    result_type: 'mixed',
    count: 10
}

T.get('search/tweets', followParams, (err, data) => {
    if (!err) {
        for (let i = 0; i < data.statuses.length; i++) {
            //console.log(data.statuses[i]);
            let screen_name = data.statuses[i].user.screen_name;
            let user_id = data.statuses[i].id_str;
            
            T.post('friendships/create', {screen_name, user_id}, (err, response) => {
                if (err) {
                    console.log(err[0].message);
                } else {
                    console.log(`${screen_name}: Followed with the id ${user_id}`);
                }
            })
        }
    }
    else {
        throw new Error;
        console.log(Error);
    }
});