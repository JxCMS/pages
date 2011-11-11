/**
 * error controller
 */

/**
 * Dependencies
 */

var Controller_Main = require('../../../system/controller').Controller_Main,
    Settings = require('../../../system/settings').Settings,
    Promise = require('promise').Promise,
    Response = require('../../../system/response').Response;


(function(){

    var Controller = exports.Controller = new (new  Class({

        Extends: Controller_Main,

        'view_action': function(request, response) {
            var promise = new Promise();
            
            
            return promise;
        }

    }))();

    exports.routes = [
        //name, 'method regex', regex match keys, controller object, key defaults
        ['error','GET \\/error\\/(\\w+)', ['action'], Controller,{action: 'e404'}]
    ];
    
})();