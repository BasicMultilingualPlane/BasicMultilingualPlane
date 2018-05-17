  function strikethroughText(text) {
    var result = '';
    $.each(text.split(''), function() {
      result += this + '\u0336';
    });
    $('#striked').val(result)
  }