/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(3);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var nodes = nodes || {};
	var methods = methods || {};
	var urls = urls || {};
	var ids = ids || {};
	var timer;
	var csrftoken;
	
	var t = __webpack_require__(4);
	
	urls = {
	  images: {
	    start: 'https://api.vk.com/method/photos.get?owner_id=',
	    end: '&album_id=profile&callback=callbackFunc',
	  },
	  casting: '/casting-users/',
	  choices: '/choices/'
	}
	
	nodes.body = $('body');
	
	methods = {
	  requests: function(url, type, callback, data, obj){
	    if(!url) {
	      console.log('Error: set url');
	      return false;
	    }
	
	    var params = params || {};
	    var support = support || {};
	
	    params = { // default params
	      url: url,
	      type: type || 'get',
	      success: function(data){
	        if(callback) callback(data);
	      }
	    }
	    
	    support = { // support params
	      contentType: "application/json",
	      dataType: 'json',
	      headers: {
	        'X-CSRFToken': csrftoken
	      }
	    };
	
	    obj = obj || support;
	
	    for(var prop in obj){
	      params[prop] = obj[prop];
	    }
	
	    if (data) params.data = data;
	
	    // console.log(params)
	
	    $.ajax(params);
	  },
	  getImages: function(){
	    //.choose
	    methods.requests(urls.images.start + ids.vk + urls.images.end, 'get', methods.viewImages, false, {dataType: 'jsonp'});
	  },
	  vote: function(el){
	    var item = el.parents('.vote-item');
	    var check = nodes.body.find('._choose-vote');
	
	    var id = nodes.vote_list.attr('data-vote-id');
	    var uuid = item.attr('data-uuid');
	
	    check.removeClass('_choose-vote');
	    item.toggleClass('_choose-vote');
	
	    methods.requests(urls.choices + id + '/', 'put', methods.reloadVote, '"' + uuid + '"');
	  },
	  reloadVote: function(){
	    if(timer) clearTimeout(timer);
	    timer = setTimeout(function(){
	      nodes.vote_list.html('');
	      methods.requests(urls.choices, 'post', methods.viewVote);
	    }, 250)
	    
	  },
	  choose: function(el){
	    var item = el.parents('.choose-item');
	    var check = nodes.body.find('._choose-choose');
	
	    check.removeClass('_choose-choose');
	    item.toggleClass('_choose-choose');
	
	    //ids.vk
	  },
	  viewImages: function(data){
	    var imgs = [];
	    var obj = data.response
	
	    for(var prop in obj){
	      // imgs.push(obj[prop].src)
	      imgs.push((function(){
	        if(obj[prop].src_xxxbig) return obj[prop].src_xxxbig;
	        if(obj[prop].src_xxbig) return obj[prop].src_xxbig;
	        if(obj[prop].src_xbig) return obj[prop].src_xbig;
	        if(obj[prop].src_big) return obj[prop].src_big;
	        if(obj[prop].src) return obj[prop].src;
	      }()));
	    }
	
	    for(var i = 0; i < 4; i++){
	      nodes.choose_list.append( $( t.images(imgs[i]) ) );
	    }
	  },
	  viewVote: function(data){
	    console.log(data);
	    var obj = data;
	    var tmp = {};
	    nodes.vote_list.attr('data-vote-id', obj.id);
	
	    for(var i = 0; i < obj.users.length; i++){
	      // nodes.vote_list.append( $( t.vote() ) );
	      var user = obj.users[i];
	      for(var prop in user){
	        console.log(user);
	        nodes.vote_list.append( $( t.vote(prop, user[prop]) ) );
	      }
	    }
	
	  },
	  viewTop: function(data){
	    var tmp = tmp || {};
	    var id = nodes.body.attr('data-cid');
	    var uid = nodes.body.attr('data-user');
	
	    var getUserInfo = function(obj){
	      var result;
	      for(var i = 0; i < data.length; i++){
	        if(data[i].info.id === obj.user) {
	          result = false;
	          break;
	        } else {
	          result = obj;
	        }
	      }
	      pars(result);
	    };
	
	    var pars = function(obj){
	      for(var i = 0; i < data.length; i++){
	        tmp[i] = data[i];
	      }
	
	      if(obj) {
	        var num = data.length;
	        tmp[num] = obj;
	      }
	
	      view();
	    };
	
	    var view = function(){
	      var count = 0;
	      for(var prop in tmp){
	        nodes.toplist.append( $(t.top(tmp[prop], count, parseInt(uid, 10))) );
	        count++;
	      }
	    }
	
	    methods.requests(urls.casting + id + '/', 'get', getUserInfo);
	  },
	  sendChoose: function(){
	    var item = nodes.body.find('._choose-choose');
	    var img = item.find('img');
	    var src = img.attr('src');
	    var obj = {url: src, user: ids.user};
	    var json = JSON.stringify(obj);
	
	    if(item.length < 1) return false;
	
	    var plzgo = function(){
	      window.open('/votes/','_self')
	    }
	
	    // methods.requests(urls.casting + ids.user + '/', 'post', json, plzgo());
	    methods.requests(urls.casting, 'post', plzgo(), json);
	
	    
	  },
	  eventSets: function(){
	    nodes.body.on({
	      click: function(event){
	        var $target = $( event.target );
	        if($target.hasClass('js-vote-image')) methods.vote($target);
	        if($target.hasClass('js-choose-image')) methods.choose($target);
	        if($target.hasClass('js-choose-send')) methods.sendChoose();
	      }
	    })
	  },
	  csrftoken: function(name) {
	    var matches = document.cookie.match(new RegExp(
	      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	    ));
	    return matches ? decodeURIComponent(matches[1]) : undefined;
	  },
	  init: function(){
	    csrftoken = methods.csrftoken('csrftoken');
	
	    this.eventSets();
	    nodes.toplist = nodes.body.find('.toplist-list');
	    nodes.choose_list = nodes.body.find('.choose-list');
	    nodes.vote_list = nodes.body.find('.vote-list');
	    nodes.choose = nodes.body.find('.choose');
	
	    ids.vk = nodes.choose.data('vk');
	    ids.user = nodes.choose.data('id');
	
	    if(nodes.choose.length > 0) methods.getImages();
	    if(nodes.vote_list.length > 0) methods.requests(urls.choices, 'post', methods.viewVote);
	    if(nodes.toplist.length > 0) methods.requests(urls.casting + 'top/', 'get', methods.viewTop);
	
	    
	  }
	}
	
	methods.init();
	
	function callbackFunc(result){
	  
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

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
	  var tmp = [];
	
	  // console.log(obj);
	
	  if(count === 3) {
	    tmp.push('<li class="toplist-item _dotted">',
	    '<i class="toplist-dotted">&hellip;</i>',
	    '</li>');
	  }
	
	  tmp.push('<li class="toplist-item');
	
	  if(count === 0) tmp.push(' _top');
	  if(obj.user === id) tmp.push(' _im');
	
	  tmp.push('"><i class="toplist-num">');
	
	  if(obj.position) tmp.push(obj.position);
	  else tmp.push(count + 1);
	
	  tmp.push('</i><i class="toplist-avatar"><img src="');
	  tmp.push(obj.url);
	  tmp.push('" class="toplist-avatar-img" /></i>');
	  tmp.push('<span class="toplist-info"><span class="toplist-name">');
	
	  if(obj.info) tmp.push(obj.info.first_name);
	
	  tmp.push('</span><span class="toplist-rating"><i class="toplist-rating-icon');
	
	  if(obj.stars > 0) {
	    tmp.push((function(){
	      return ' _' + parseInt(obj.stars, 10)
	    }()));
	  } else {
	    tmp.push(' _1');
	  }
	
	  tmp.push('"></i><i class="toplist-rating-num">');
	  tmp.push(obj.counter);
	  tmp.push(' голосов</i></span></span></li>');
	
	  return tmp.join('');
	  }
	
	}
	
	module.exports = templates;

/***/ }
/******/ ]);
//# sourceMappingURL=application.js.map