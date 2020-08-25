//find the acute angle between two clock hands given an hour and a minute for time

const time = [1, 5];

const getTheTimeAcuteAngle = (timeArray) => {
    const hour = timeArray[0];
    const minute = timeArray[1];
    const minuteFraction = (minute / 60);

    //360/12 and 360/60
    const anglePerHourDegrees = 30
    const anglePerMinuteDegrees = 6

    const minuteAngleDegrees = minute * anglePerMinuteDegrees;
    console.log("minute position: ", minuteAngleDegrees);
    const hourAngleDegrees = (hour * anglePerHourDegrees) +  anglePerHourDegrees * minuteFraction;
    console.log("hour position: ", hourAngleDegrees);

    const getAngle = (hourPosition, minutePosition) => {
        if (hourPosition === minutePosition) {
            return 0
        } else if (hourPosition > minutePosition) {
            return hourPosition - minutePosition;
        } else return minutePosition - hourPosition
    }

    const theAngle = getAngle(hourAngleDegrees, minuteAngleDegrees)

  if (theAngle < 180 || theAngle === 0) {
      return theAngle;
  } else {
      return 360 - theAngle;
  }
}

console.log(getTheTimeAcuteAngle(time));



// Here are other questions if you want a challenge.
// 1.Tell if an item is in a given array.
// Out of three Arrays create a new array with the numbers that appear in all three of the given arrays.
// Palindrome but you have to remove punctuation, spaces and all same case. It Cant work with numbers.
// Given a number work out its value in the fibonacci seq. Starting at one the next number is a total of the previous two. e.g given 5 would return 5 because 1 1 2 3 5. But 6 would be 8 because 1 1 2 3 5 8.