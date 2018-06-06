function produceDrivingRange(range) {
  return function(block1, block2){
    return Math.abs(block1.slice(0, 1) - block2.slice(0, 1)) <= range;
  }
}