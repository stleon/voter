'use strict';

var templates = templates || {};
templates = {
  images: function(item){
    var tmp = [];
    tmp.push('<span class="choose-item"><img class="choose-item-image js-choose-image" src="');
    tmp.push(item);
    tmp.push('" /></span>');
    return tmp.join('');
  },
  vote: function(obj){
    var tmp = [];

    tmp.push('<li class="vote-item" data-uuid="');
    tmp.push('"><i class="vote-avatar">');
    tmp.push('<img src="');
    tmp.push();
    // tmp.push('http://orig01.deviantart.net/9824/f/2016/121/d/7/placeholder_2_by_sketchymouse-da0yiyl.png');
    tmp.push('" class="vote-avatar-icon js-vote-image"></img></i></li>');

    return tmp.join('');
  }
}

module.exports = templates;