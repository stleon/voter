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
	var ids = ids || {};
	
	var t = __webpack_require__(4);
	
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
	    console.log(arguments)
	    $.ajax({
	      url: url,
	      data: data,
	      type: type,
	      crossDomain: true,
	      success: function(data){
	        if(callback) callback(data);
	      }
	    })
	  },
	  getImages: function(){
	    //.choose
	    methods.requests(urls.images.start + ids.vk + urls.images.end, 'get', '', methods.viewImages);
	  },
	  fakeGetImages: function(){
	    data = {
	      "response": [
	        {
	        "pid": 215187843,
	        "aid": -6,
	        "owner_id": 1,
	        "src": "http://cs210.vk.me/v210001/2/XF7JgWq3Chc.jpg",
	        "src_big": "http://cs210.vk.me/v210001/3/7ZzaHxmob4A.jpg",
	        "src_small": "http://cs210.vk.me/v210001/1/fxqypKXX8Bg.jpg",
	        "src_xbig": "http://cs210.vk.me/v210001/4/6Ky-XWCj0LM.jpg",
	        "src_xxbig": "http://cs210.vk.me/v210001/5/3E2MaC_4Gm8.jpg",
	        "src_xxxbig": "http://cs210.vk.me/v210001/6/53_VwoACy4I.jpg",
	        "width": 2560,
	        "height": 1913,
	        "text": "",
	        "created": 1296326714
	        },
	        {
	        "pid": 263219656,
	        "aid": -6,
	        "owner_id": 1,
	        "src": "http://cs9591.vk.me/u00001/136592355/m_672c7bad.jpg",
	        "src_big": "http://cs9591.vk.me/u00001/136592355/x_dbfafe4c.jpg",
	        "src_small": "http://cs9591.vk.me/u00001/136592355/s_2606f012.jpg",
	        "src_xbig": "http://cs9591.vk.me/u00001/136592355/y_7c7b186e.jpg",
	        "src_xxbig": "http://cs9591.vk.me/u00001/136592355/z_17426819.jpg",
	        "src_xxxbig": "http://cs9591.vk.me/u00001/136592355/w_818d6f79.jpg",
	        "text": "",
	        "created": 1307883624
	        },
	        {
	        "pid": 263219735,
	        "aid": -6,
	        "owner_id": 1,
	        "src": "http://cs9591.vk.me/u00001/136592355/m_5f3fd6ac.jpg",
	        "src_big": "http://cs9591.vk.me/u00001/136592355/x_d51dbfac.jpg",
	        "src_small": "http://cs9591.vk.me/u00001/136592355/s_39db64b7.jpg",
	        "src_xbig": "http://cs9591.vk.me/u00001/136592355/y_8cc51452.jpg",
	        "src_xxbig": "http://cs9591.vk.me/u00001/136592355/z_90874cc2.jpg",
	        "src_xxxbig": "http://cs9591.vk.me/u00001/136592355/w_f6a60338.jpg",
	        "text": "",
	        "created": 1307883759
	        },
	        {
	        "pid": 278184324,
	        "aid": -6,
	        "owner_id": 1,
	        "src": "http://cs10408.vk.me/u4172580/-6/m_79ab6f4a.jpg",
	        "src_big": "http://cs10408.vk.me/u4172580/-6/x_ee97448e.jpg",
	        "src_small": "http://cs10408.vk.me/u4172580/-6/s_24887a5a.jpg",
	        "text": "",
	        "created": 1328126422,
	        "post_id": 45430
	        }
	      ]
	    }
	    methods.viewImages(data);
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
	
	    //ids.vk
	  },
	  viewImages: function(data){
	    var imgs = [];
	    var obj = data.response
	
	    for(var prop in obj){
	      imgs.push(obj[prop].src)
	    }
	
	    for(var i = 0; i < 4; i++){
	      nodes.choose_list.append( $( t.images(imgs[0]) ) );
	    }
	  },
	  viewVote: function(data){
	    console.log(data);
	    for(var i = 0; i < 2; i++){
	      nodes.vote_list.append( $( t.vote() ) );
	    }
	  },
	  viewTop: function(data){
	    console.log(data);
	  },
	  sendChoose: function(){
	    var item = nodes.body.find('._choose-choose');
	    var img = item.find('img');
	    var src = img.attr('src');
	    var obj = {url: src};
	    var json = JSON.stringify(obj);
	
	    if(item.length < 1) return false;
	
	    methods.requests(urls.casting + ids.user + '/', 'patch', json);
	    window.open('/votes/');
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
	  init: function(){
	    this.eventSets();
	    nodes.toplist = nodes.body.find('.toplist');
	    nodes.choose_list = nodes.body.find('.choose-list');
	    nodes.vote_list = nodes.body.find('.vote-list');
	    nodes.choose = nodes.body.find('.choose');
	
	    ids.vk = nodes.choose.data('vk');
	    ids.user = nodes.choose.data('id');
	
	    // if(nodes.choose.length > 0) methods.getImages();
	    if(nodes.choose.length > 0) methods.fakeGetImages();
	    // if(nodes.vote_list.length > 0) methods.viewVote();
	    if(nodes.vote_list.length > 0) methods.requests(urls.choices, 'post', '', methods.viewVote);
	    if(nodes.toplist.length > 0) methods.requests(urls.casting + 'top/', 'get', '', methods.viewTop);
	  }
	}
	
	methods.init();

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

/***/ }
/******/ ]);
//# sourceMappingURL=application.js.map