function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) {
        return blocks - 42;
    } else if (blocks < 42) {
        return 42 - blocks;
    }
}

const feet = 264;

function distanceFromHqInFeet(blocks) {
    if (blocks > 42) {
        return (blocks - 42) * feet;
    } else if (blocks < 42) {
        return (42 - blocks) * feet;
    }
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start-destination) * feet;
    } else if(destination > start) {
        return (destination-start) * feet;
    }
}

function calculatesFarePrice(start, destination) {
    let totalFeet = Math.abs((start-destination)*feet);
    if (totalFeet < 400) {
        return 0;
    } else if ((totalFeet > 400) && (totalFeet < 2000)) {
        return (totalFeet - 400) * 0.02;
    } else if ((totalFeet > 2000) && (totalFeet < 2500)) {
        return 25;
    } else if (totalFeet > 2500) {
        return 'cannot travel that far';
    }
}