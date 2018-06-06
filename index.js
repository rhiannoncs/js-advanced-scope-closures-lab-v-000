function produceDrivingRange(blockRange) {
  return function(block1, block2){
    const distance = Math.abs(block1.slice(0, 2) - block2.slice(0, 2));
    if (distance <= blockRange) {
      return `within range by ${blockRange - distance}`
    } else {
      return ''
    }
  }
}