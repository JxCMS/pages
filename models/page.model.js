
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.ObjectId;


var Stamp = new Schema({
    user: ObjectId,
    at: Date
});

var Page = new Schema({
    title: String,
    publish: {
        start: Date,
        end: Date
    },
    content: String,
    updated: Stamp,
    created: Stamp
    

});

Page.pre('save',function(next){
    core.log('in save middleware');
    this.updated.at = Date.now();
    core.debug('model after update in save middleware',this);
    next();
});


mongoose.model('Setting', Settings);