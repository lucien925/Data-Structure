'use strict';

function Link() {
	var head = {
		value: void 0,
		next: null
	};

	const ERROR = -1;
	const OK = 1;
	var _getElem = function(i) {
		
		if(_isEmpty() || !_isNumber(i) || i < 1 || i > _length()) return ERROR;
		let elem = head.next,
			k = 0;
		while(elem) {
			++k;
			if(k === i) return elem.value;
			elem = elem.next;
		}

		return ERROR;
	}

	var _addElem = function(i, v) {
		var temp = {
			value: v,
			next: null
		};
		if(_isEmpty()) {
			head.next = temp;
			return OK;
		}

		if(i >= 0 && i <= _length()) {
			if(i === 0) {
				temp.next = head.next;
				head.next = temp;
				return OK;
			} else {
				let t = head.next,
					k = 0;
				while(t) {
					++k;
					if(k === i) {
						temp.next = t.next;
						t.next = temp;
						return OK;
					}
					t = t.next;
				}
			}
		}

		return ERROR;
	}

	var _isEmpty = function() {
		return head.next === null;
	}
	var _length = function() {
		if(_isEmpty()) return 0;

		let i = 0,
			elem = head.next;
		while(elem) {
			++i;
			elem = elem.next;
		}
		return i;
	}

	function _isNumber(i) {
		return [].toString.call(i) === '[object Number]';
	}

	return {
		getElem: _getElem,
		isEmpty: _isEmpty,
		length: _length,
		addElem: _addElem
	}	
}

module.exports = Link();