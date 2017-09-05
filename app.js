const Twitter = require('twitter');
const config = require('./config.default.js');
const twitterScreenName = require('twitter-screen-name');
const T = new Twitter(config);

const params = {
    q: '#nodejs',
    lang: 'en',
    result_type: 'popular',
    count: 15
}

const newParams = {
    q: 'http://youtu.be/mCzyad-L-7s?a',
    lang: 'en',
    result_type: 'recent',
    count: 10
}

const user_fav = {
    screen_name: twitterScreenName('https://twitter.com/code_everyday'),
    count: 10,
    include_entities: false,
}

/*
T.get('search/tweets', params, (err, data, response) => {
    if (!err) {
        //console.log(data);
        for (let i = 0; i < data.statuses.length; i++) {
            //Get the tweet ID from the returned data
            let id = {id: data.statuses[i].id_str};
            //post request to 'favorites/create' to favorite selected tweet
            T.post('favorites/create', id, (err, response) => {
                //log error message if fail
                if (err) {
                    console.log(err[0].message);
                }
                //log the url of the tweet if success
                else {
                    let username = response.user.screen_name;
                    let tweetId = response.id_str;
                    console.log("Favorited: ", 
                        `https://twitter.com/${username}/status/${tweetId}`);
                }
            })
        }
    }
    else {
        throw new Error;
        console.log(Error);
    }
});

T.get('favorites/list', user_fav, (err, data) => {
    if (!err) {
        //console.log(data);
        for (let i = 0; i < data.length; i++) {
            let id = {id: data[i].id_str};

            T.post('favorites/create', id, (err, response) => {
                if (err) {
                    console.log(err[0].message);
                }
                else {
                    let username = response.user.screen_name;
                    let tweetId = response.id_str;
                    console.log("Favorited: ", 
                        `https://twitter.com/${username}/status/${tweetId}`);
                }
            });
        }
    }
    else {
        throw new Error;
        console.log(Error);
    }
});
*/