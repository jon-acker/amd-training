require.config({
    deps: ['main'],
    baseUrl: 'src/',
    paths: {
        'jquery': '../node_modules/jquery/dist/jquery.min'
    }
});

define('vendor/jquery', ['jquery'], function (jq) {
    return jq.noConflict( true );
});
