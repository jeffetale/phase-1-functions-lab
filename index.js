function distanceFromHqInBlocks(pickUpBlock) {
    const hqBlock = 42;

    return Math.abs(pickUpBlock-hqBlock)
    }
 console.log(distanceFromHqInBlocks(34))

 function distanceFromHqInFeet(pickUpBlock) {
  let distanceInBlocks = distanceFromHqInBlocks(pickUpBlock)
  let distanceInFeet = distanceInBlocks * 264;
  return distanceInFeet
 } 
 console.log(distanceFromHqInFeet(34))

 function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264
    }
 console.log(distanceTravelledInFeet(42,34))

 function calculatesFarePrice(start, destination) {
    let distanceTravelled = distanceTravelledInFeet(start, destination);
    let farePrice;
  
    if (distanceTravelled <= 400) {
      farePrice = 0;
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
      farePrice = (distanceTravelled - 400) * 0.02;
    } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
      farePrice = 25;
    } else {
      farePrice = 'cannot travel that far';
    }
  
    return farePrice;
  }
console.log(calculatesFarePrice(42,41))
  