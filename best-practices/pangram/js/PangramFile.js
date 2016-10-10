function pangramFile() {
    var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O','Q', 'P', 'R', 'S', 'T', 'U', 'W', 'X', 'Y', 'Z'];
    var sentence = 'zadwrad';
    
    sentence = sentence.toUpperCase();
    function checkSentence() {
        var letters = [];
        for (var i=0; i <= sentence.length; i++){
            letters.push(sentence[i]);
        }
    }
}
    function 
    function checkAlphabet(alphabet, letters) {
        for (var i = 0; i <= alphabet.length; i++) {
            if (alphabet[i] === letters) {
                return true;
            }
        }
        return false;
    }
}