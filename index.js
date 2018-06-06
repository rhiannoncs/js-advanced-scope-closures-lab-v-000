function produceDrivingRange(blockRange) {
  return function(block1, block2){
    const distance = Math.abs(block1.slice(0, 1) - block2.slice(0, 1));
    if (distance <= blockRange) {
      return `within range by ${blockRange - distance}`
    }
  }
}