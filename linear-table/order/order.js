'use strict';

function order(opt) {
	// state
	const ERROR = -1;
	const OK  = 1;
	opt = opt || {};
	if(!opt.max_size || !_isNumber(opt.max_size)) {
		opt.max_size = 10;
	}

	const store = new Array(opt.max_size);
	let length = 0;

	var _getElem = function(i) {

		if(!_isNumber(i) || i > opt.max_size || i < 1 ) return ERROR;

		return store[i - 1];
	}

	var _insertElem = function(i, v) {

		if(length >= opt.max_size) return ERROR;

		if(!v || !_isNumber(i) || i > opt.max_size + 1 || i < 1) return ERROR;

		if(i > length) store[i - 1] = v;
		else {
			for(let k = length; k < n - 1; k--) {
				store[k] = store[k - 1];
			}
		}
		length ++;

		return OK;
	}
	var _removeElem = function(i) {

		if(!_isNumber(i) || i < 1 || i > length) return ERROR;

		for(let k = i - 1; k < length - 1; k++) {
			store[k] = store[k + 1];
		}

		store[length - 1] = null;
		length--;
		return OK;
	}
	var _modified = function(i, v) {
		if(!v || !_isNumber(i) || i < 1 || i > opt.max_size) return ERROR;

		store[i - 1] = v;

		return OK;
	}

	var _isEmpty = function() {
		return length === 0;
	}

	var _clear = function() {
		store.length = 0; 
		length = 0;
	}


	function _isNumber(v) {
		return [].toString.call(v) === '[object Number]';
	}

	return {
		get: _getElem,
		insert: _insertElem,
		remove: _removeElem,
		modified: _modified,
		isEmpty: _isEmpty,
		clear: _clear,
		length: length
	}
}