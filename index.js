function produceDrivingRange(blockRange) {
  return function(block1, block2){
    const distance = Math.abs(block1.slice(0, 2) - block2.slice(0, 2));
    if (distance <= blockRange) {
      return `within range by ${blockRange - distance}`
    } else {
      return `${distance - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(fare) {
    return fare * percentage;
  }
}

function createDriver() {
  let driverId = 0;
  
  return class Driver {
    constructor (name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}