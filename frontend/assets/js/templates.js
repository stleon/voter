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
  vote: function(uuid, img){
    var tmp = [];

    tmp.push('<li class="vote-item" data-uuid="');
    tmp.push(uuid);
    tmp.push('"><i class="vote-avatar">');
    tmp.push('<img src="');
    tmp.push(img);
    // tmp.push('http://orig01.deviantart.net/9824/f/2016/121/d/7/placeholder_2_by_sketchymouse-da0yiyl.png');
    tmp.push('" class="vote-avatar-icon js-vote-image"></img></i></li>');

    return tmp.join('');
  },
  top: function(obj, count, id){
    var tmp = []

    console.log(count)
    if(count === 2) {
      tmp.push('<li class="toplist-item _dotted">',
        '<i class="toplist-dotted">&hellip;</i>',
        '</li>');
      return false;
    }

    tmp.push('<li class="toplist-item');

    if(count === 0) tmp.push(' _top');
    if(obj.id === id) tmp.push(' _im');

    tmp.push('"><i class="toplist-num">');

    if(obj.position) tmp.push(obj.position);
    else tmp.push(count + 1);

    tmp.push('</i><i class="toplist-avatar"><img src="');
    tmp.push(obj.url);
    tmp.push('" class="toplist-avatar-img" /></i>');
    tmp.push('<span class="toplist-info"><span class="toplist-name">');
    tmp.push(obj.info.first_name);
    tmp.push('</span><span class="toplist-rating"><i class="toplist-rating-icon');

    if(obj.stars > 0) tmp.push((function(){
      return ' _' + parseInt(obj.stars, 10)
    }()));

    tmp.push('"></i><i class="toplist-rating-num">');
    tmp.push(obj.counter);
    tmp.push(' голосов</i></span></span></li>');

    return tmp.join('');
  }

}

module.exports = templates;