function fontChange(str, offset) {
    for (i = 0, l = str.length, n = ""; i < l; i++) {
        s = str.charCodeAt(i);
        if ((s > 64 && s < 123) || (s > 32 && 2 < 127 && offset < 100000)) {
            var metaOffset = (s > 96 && s < 122) ? -6 : 0;
            newOffset = (offset > 100000) ? parseInt(offset) + parseInt(s) + metaOffset : parseInt(offset) + parseInt(s);
            newOffset = newOffset.toString(16);
            newOffset = exceptionFilter(newOffset);
            console.log(s, newOffset, fixedFromCharCode("0x" + newOffset));
            s = fixedFromCharCode("0x" + newOffset)
        } else {
            s = str.charAt(i)
        }
        $("#output").append(s).fadeIn(500)
    }
}
function fixedFromCharCode(codePt) {
    if (codePt > 65535) {
        codePt -= 65536;
        return String.fromCharCode(55296 + (codePt >> 10), 56320 + (codePt & 1023))
    } else {
        return String.fromCharCode(codePt)
    }
}
function exceptionFilter(codePt) {
    switch (codePt) {
    case "1d455":
        return "210e";
    case "1d49d":
        return "212c";
    case "1d4a0":
        return "2130";
    case "1d4a1":
        return "2131";
    case "1d4a3":
        return "210b";
    case "1d4a4":
        return "2110";
    case "1d4a7":
        return "2112";
    case "1d4a8":
        return "2133";
    case "1d4ad":
        return "211b";
    case "1d4ba":
        return "212f";
    case "1d4bc":
        return "210a";
    case "1d4c4":
        return "2134";
    case "1d506":
        return "212d";
    case "1d50b":
        return "210c";
    case "1d50c":
        return "2111";
    case "1d515":
        return "211c";
    case "1d51d":
        return "2128";
    case "1d53a":
        return "2102";
    case "1d53f":
        return "210d";
    case "1d545":
        return "2115";
    case "1d547":
        return "2119";
    case "1d548":
        return "211a";
    case "1d549":
        return "211d";
    case "1d551":
        return "2124";
    default:
        return codePt;
        break
    }
    console.log(codePt);
    return codePt
};