// create a length converter function

function lengthConverter(kilometer){
    //convert to kilometer to meter
    // conversion rate: 1 kilometer == 1000 meters
    
    const meter = kilometer * 1000
    return meter;
}
const meterEquivalent = lengthConverter(2);
console.log(meterEquivalent);