function letterCount(str) {
  var dict = {};
  var re = /^[a-zA-Z_0-9]$/; // ignore spaces and punctuation
  for (var i=0;i<str.length;i++) {
    if (re.test(str.charAt(i))) {
      var char = str.charAt(i).toLowerCase();
      if (dict[char] == null) dict[char] = 0;
      dict[char]++;
    }

  }

  for (var pair in dict) {
    console.log(pair + " - " + dict[pair]);
  }
}

letterCount("helloHE LLO !1234");
