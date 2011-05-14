// ==UserScript==
// @name            Support of facebook
// @namespace       http://userscripts.org/users/290001
// @description     facebook上でニコニコ動画を見るグリモン
// @include         *facebook*
// @exclude         
// @version         0.0.1.beta
// ==/UserScript==

(function () {

	//まずはyoutubeの映像の埋め込みでテスト！
	function youtube() {
		var uatNum = document.getElementsByClassName('uiAttachmentTitle').length;
	    for (var i=0; i < uatNum; i++){
			var uatNode = document.getElementsByClassName('uiAttachmentTitle')[i];
		//	var href = uatNode.firstChild.innerHTML.match(/https?:\/\/[-_.!~*'()a-zA-Z0-9;\/?:@&=+$,%#]+/g);
			var href = uatNode.firstChild.innerHTML.match(/(http:\/\/[a-zA-Z\.]+\.youtube\.com\/).*v=([^&]+)/g);
			var ytID = uatNode.firstChild.innerHTML.match(/v=([^&\s]+)/g);
			var scrNode = '<iframe width="265" height="228" src="http://www.youtube.com/embed/' + ytID + '" frameborder="0" allowfullscreen></iframe>';
			if(href){
				uatNode.innerHTML = uatNode.innerHTML + scrNode.replace(/v=/,"");
			}
		}
	}

	youtube();
	
}());



