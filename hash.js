(function (ext) {
  // Define custom hashing block using Caesar cipher
  ext.customHash = function (input) {
    let hashedResult = '';
    for (let i = 0; i < input.length; i++) {
      const charCode = input.charCodeAt(i);
      // Shift each character code by 3 positions forward (Caesar cipher)
      const hashedCharCode = charCode + 3;
      hashedResult += String.fromCharCode(hashedCharCode);
    }
    return hashedResult;
  };

  // Define custom dehashing block for Caesar cipher
  ext.customDehash = function (hashedInput) {
    let originalResult = '';
    for (let i = 0; i < hashedInput.length; i++) {
      const charCode = hashedInput.charCodeAt(i);
      // Shift each character code by 3 positions backward to dehash (reverse Caesar cipher)
      const originalCharCode = charCode - 3;
      originalResult += String.fromCharCode(originalCharCode);
    }
    return originalResult;
  };

  // Describe your extension
  var descriptor = {
    blocks: [
      ['r', 'Hash %s', 'customHash', ''],
      ['r', 'Dehash %s', 'customDehash', '']
    ],
  };

  // Register the extension
  ScratchExtensions.register('Custom Hash Extension', descriptor, ext);
})(this);
