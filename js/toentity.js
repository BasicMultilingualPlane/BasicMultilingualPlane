function toEntity() {
    var aa = $('textarea[name$="unicode"]').val();
    var bb = "";
    for (i = 0; i < aa.length; i++) {
        if (aa.charCodeAt(i) > 127) {
            bb += "&#" + aa.charCodeAt(i) + ";"
        } else {
            bb += aa.charAt(i)
        }
    }
    $('textarea[name$="entity"]').val(bb);

}