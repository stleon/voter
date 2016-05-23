'https://api.vk.com/method/photos.get?owner_id=' + 'VKID' + '&album_id=profile' // VKID from API GET photo user

'/casting-users/id' // - ID USER 

'/choices/' // - list POST
'/choices/id' // + uuid (data) from /choices/ PUT


'/casting-users/top/' // for list.html

'/casting-users/1/' //

'use strict';

var nodes = nodes || {};
var methods = methods || {};
var urls = urls || {};

var t = require('./templates');

urls = {
  images: {
    start: 'https://api.vk.com/method/photos.get?owner_id=',
    end: '&album_id=profile'
  },
  casting: '/casting-users/',
  choices: '/choices/'
}

nodes.body = $('body');

methods = {
  requests: function(url, type, data, callback, el){
    $.ajax({
      url: url,
      data: data,
      type: type,
      success: function(data){
        if(callback) callback(data);
      }
    })
  },
  vote: function(el){
    var item = el.parents('.vote-item');
    var check = nodes.body.find('._choose-vote');

    check.removeClass('_choose-vote');
    item.toggleClass('_choose-vote');
    
  },
  choose: function(el){
    var item = el.parents('.choose-item');
    var check = nodes.body.find('._choose-choose');

    check.removeClass('_choose-choose');
    item.toggleClass('_choose-choose');
    
  },
  viewVote: function(){
    for(var i = 0; i < 2; i++){
      nodes.vote_list.append( $( t.vote() ) );
    }
  },
  eventSets: function(){
    nodes.body.on({
      click: function(event){
        var $target = $( event.target );
        if($target.hasClass('js-vote-image')) methods.vote($target);
        if($target.hasClass('js-choose-image')) methods.choose($target);
      }
    })
  },
  init: function(){
    this.eventSets();
    nodes.vote_list = nodes.body.find('.vote-list');
    if(nodes.vote_list.length > 0) methods.viewVote();
  }
}

methods.init();