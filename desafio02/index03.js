class Device {
    turnOn() {}
    turnOff() {}
  }
  
  class TV extends Device {
    turnOn() {
      console.log("TV ligada.");
    }
    turnOff() {
      console.log("TV desligada.");
    }
  }
  
  class Radio extends Device {
    turnOn() {
      console.log("Rádio ligado.");
    }
    turnOff() {
      console.log("Rádio desligado.");
    }
  }
  
  class RemoteControl {
    constructor(device) {
      this.device = device;
    }
  
    pressPowerButton(on) {
      if (on) this.device.turnOn();
      else this.device.turnOff();
    }
  }
  
  const tv = new TV();
  const radio = new Radio();
  
  const tvRemote = new RemoteControl(tv);
  const radioRemote = new RemoteControl(radio);
  
  tvRemote.pressPowerButton(true);
  tvRemote.pressPowerButton(false);
  
  radioRemote.pressPowerButton(true);
  radioRemote.pressPowerButton(false);