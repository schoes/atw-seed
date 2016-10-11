/**
 * Created by U112586 on 20.05.2016.
 */
module.exports = {
    x: [{
        contexts: [
            '/yourapplication/*'
        ],
        target: 'https://google.ch'
    }],
    w: [{
        contexts: [
            '/yourapplication/*'
        ],
        target: 'https://google.com'
    },
        {
            contexts: [
                '/anotherApplication/*'
            ],
            target: 'https://yahoo.com'
        },
    ],

};