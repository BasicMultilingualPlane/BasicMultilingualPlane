var _rawtable = {
A: ["Д", "Ѧ", "Å", "Ⓐ", "Λ"], B: ["Б", "Ъ", "♭", "Ⓑ", "β"], C: ["℃", "☾", "Ç", "Ɔ", "ℂ", "Ⓒ"], D: ["ℶ", "Ð", "Ⓓ", "Δ"], E: ["Є", "℮", "ℇ", "Ǝ", "Ⓔ", "Ξ", "ξ"], F: ["℉", "Ⅎ", "Ƒ", "ƒ", "Ⓕ"], G: ["Ҁ", ["⅁", "i"], "Ⓖ"], H: ["ℋ", "ℍ", "⑁", "♄", "Ⓗ"], I: [ ["⚕", "i"], "Ⅰ", "Ⓘ"], J: ["ℐ", "Ĵ", "Ⓙ"], K: ["Ķ", "ĸ", "Ƙ", "Ḵ", "Ḱ", "Ⓚ"], L: ["ℒ", "ℓĹ", "Ĺ", "Ⓛ"], M: ["ʍ", "Ṃ", "Ḿ", "ℳ", "Ⓜ"], N: ["И", "ℏ", "ℕ", "Ñ", "ŋ", "Ɲ", "Ⓝ", "Ѝ"], O: ["О", "Ф", "Ö", "☺", ["⚆", "i"], "Ⓞ", "θ"], P: ["ℙ", "♇", "Ⓟ", "Ϸ"], Q: ["ℚ", ["℺", "i"], "Ⓠ"], R: ["ℝ", "℞", "Ŕ", "Ⓡ", "Я"], S: ["5", "☡", ["⚡", "i"], "Ƨ", "Ⓢ"], T: ["Г", ["♰", "i"], ["♰", "i"], "Ŧ", "Ṯ", "Ⓣ"], U: ["Ц", "℧", "Ⓤ", "μ"], V: ["Ѵ", "℣", "Ⓥ"], W: ["Ѡ", "Ш", "Ⓦ"], X: ["Ж", "Х", "☓", ["⚒", "i"], "ℵ", "Ⓧ"], Y: ["Ч", "Ѱ", ["⅄", "i"], "⑂", "Ⓨ"], Z: ["☡", "Ƶ", "Ȥ", "Ⓩ"], "1": ["ḷ"], "2": ["ƻ"], "3": ["Ƹ", "Ǯ", "℥"], "4": ["Ч"], "5": ["Ƽ", "S"], "6": ["Б", "♭"], "7": ["Г", "7"], "8": ["8", "θ"], "0": ["О", "☺", ["⚆", "i"], "Ⓞ"]
};

function _isString(s) {
    return s.constructor == "".constructor
}
function _isArray(s) {
    return s.constructor == [].constructor
}
function _maketable(b) {
    var ret = {};
    for (var c in _rawtable) {
        var out = [];
        for (var i in _rawtable[c]) {
            var entry = _rawtable[c][i];
            if (_isString(entry)) {
                out.push(entry)
            } else {
                if (entry[1].indexOf(b) == -1) {
                    out.push(entry[0])
                }
            }
        }
        ret[c] = out
    }
    return ret
}
var _agent = navigator.userAgent.toLowerCase();
var _browserFlag = "a";
if (_agent.indexOf("iphone") != -1) {
    _browserFlag = "i"
}
var _ctable = _maketable(_browserFlag);

function _c2c(c) {
    var na = _ctable[c.toUpperCase()];
    if (na) {
        return na[Math.floor(na.length * Math.random())]
    } else {
        return c
    }
}
function motlify(s) {
    return s.split("").map(_c2c).join("")
}
if (![].map) {
    Array.prototype.map = function (mapFunc) {
        var mapped = [];
        for (var i = 0; i < this.length; i++) {
            mapped.push(mapFunc(this[i]))
        }
        return mapped
    }
}
function forceUpdate() {

    $("#motout").val(motlify($("#motin").val()))
};