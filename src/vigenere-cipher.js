const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = !reverse;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];
      const messageCharCode = this.alphabet.indexOf(messageChar);

      if (messageCharCode === -1) {
        result += messageChar;
        continue;
      }

      const keyChar = key[keyIndex % key.length];
      const keyCharCode = this.alphabet.indexOf(keyChar);

      const encodedCharCode = (messageCharCode + keyCharCode) % this.alphabet.length;
      const encodedChar = this.alphabet[encodedCharCode];

      result += encodedChar;
      keyIndex++;
    }

    if (this.reverse) {
      result = result.split('').reverse().join('');
    }

    return result;
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];
      const messageCharCode = this.alphabet.indexOf(messageChar);

      if (messageCharCode === -1) {
        result += messageChar;
        continue;
      }

      const keyChar = key[keyIndex % key.length];
      const keyCharCode = this.alphabet.indexOf(keyChar);

      const decodedCharCode = (messageCharCode + this.alphabet.length - keyCharCode) % this.alphabet.length;
      const decodedChar = this.alphabet[decodedCharCode];

      result += decodedChar;
      keyIndex++;
    }

    if (this.reverse) {
      result = result.split('').reverse().join('');
    }

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
