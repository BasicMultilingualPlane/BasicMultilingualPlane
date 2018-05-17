function change(_in, _out, _hax, _div, _arab, _azak, _stripe, _spike, _bol, _smallbol) {
    var s = "",
        hx = "",
        dv = "",
        ar = "",
        az = "",
        st = "",
        sp = "",
        bo = "",
        sb = "";
    var n = _in.value.toLowerCase();
    for (i = 0; i < n.length; i++) {
        var c = n.charAt(i);
        for (j = 0;
        (j < normal.length) && (c != normal.charAt(j)); j++) {}
        if (j < normal.length) {
            s += changed.charAt(j);
            hx += haxxor.charAt(j);
            dv += divchange.charAt(j);
            ar += arabchange.charAt(j);
            az += azakchange.charAt(j);
            st += stripechange.charAt(j);
            sp += spikechange.charAt(j);
            bo += bolchange.charAt(j);
            sb += smallbolchange.charAt(j)
        } else {
            s += c;
            hx += c;
            dv += c;
            ar += c;
            az += c;
            st += c;
            sp += c
        }
    }
    _out.value = s;
    _hax.value = hx;
    _div.value = dv;
    _arab.value = ar;
    _azak.value = az;
    _stripe.value = st;
    _spike.value = sp;
    _bol.value = bo;
    _smallbol.value = sb
}
function breezah(_in, _out) {
    var s = "";
    var n = _in.value.toLowerCase();
    for (i = 0; i < n.length; i++) {
        var c = n.charAt(i);
        s += i % 2 ? c : c.toUpperCase()
    }
    _out.value = s
}
function focusFirst() {
    if (els = oTD.getElementsByTagName("input")) {
        els[0].focus()
    }
}
function highlight(field) {
    field.focus();
    field.select()
}
function textin_focus(e, o) {
    if (o.firstTime) {
        return
    }
    o.firstTime = true;
    o.value = ""
};