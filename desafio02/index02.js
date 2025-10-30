class Message {
    constructor(text) {
      this.text = text;
    }
  
    getText() {
      return this.text;
    }
  }
  
  
  class MessageDecorator {
    constructor(message) {
      this.message = message;
    }
  
    getText() {
      
      return this.message.getText();
    }
  }
  

  class UpperCaseDecorator extends MessageDecorator {
    getText() {
      return this.message.getText().toUpperCase();
    }
  }
  

  class PositiveEmojiDecorator extends MessageDecorator {
    getText() {
      return this.message.getText() + " 😊";
    }
  }
  
 
  class CensorshipDecorator extends MessageDecorator {
    getText() {
      return this.message
        .getText()
        .replace(/horrível/gi, "*****");
    }
  }
  

  const msg = new Message("hoje o dia está horrível");
  console.log("Original:", msg.getText());

  const censored = new CensorshipDecorator(msg);
  console.log("Censurado:", censored.getText());
  
  const upper = new UpperCaseDecorator(censored);
  console.log("Maiúsculo + censurado:", upper.getText());
  
  const positive = new PositiveEmojiDecorator(upper);
  console.log("Final (decorado):", positive.getText());
  