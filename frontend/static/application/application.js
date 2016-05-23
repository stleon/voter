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
	    console.log(url)
	    $.ajax({
	      url: url,
	      data: data,
	      type: type,
	      success: function(data){
	        if(callback) callback(data);
	      }
	    })
	  },
	  getImages: function(){
	    //.choose
	    var id = nodes.choose.data('vk');
	    methods.requests(urls.images.start + id + urls.images.end, 'get', methods.viewImages);
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
	  viewImages: function(data){
	    console.log(data);
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
	    nodes.choose = nodes.body.find('.choose');
	
	    if(nodes.choose.length > 0) methods.getImages();
	    if(nodes.vote_list.length > 0) methods.viewVote();
	  }
	}
	
	methods.init();

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	var templates = templates || {};
	templates = {
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