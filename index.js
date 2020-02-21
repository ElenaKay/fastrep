
function fastrep(str, num) {
  if (num >= 0) {
    var result = "";
    var cur = str;
    while (true) {
      if (num & 1)
        result += cur;
      num >>>= 1;
      if (num !== 0)
        cur += cur;
      else {
        return result;
      }
    }
    assert(false);
  }
  assert(false, 'invalid length value: {'+(num)+'}');
}

module.exports.fastrep = fastrep;
