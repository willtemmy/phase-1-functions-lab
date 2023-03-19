function distanceFromHqInBlocks(loc){
    const hqLoc = 42;
    let dist;
    if (loc> hqLoc) {
        dist = loc - hqLoc;
    }else{
        dist = hqLoc - loc;
    }

    return dist;
}

function distanceFromHqInFeet(some){
    let feet = distanceFromHqInBlocks(some)*264;

    return feet;
}

function distanceTravelledInFeet(start,destination){
    let dist;
    if (destination>start) {
        dist = (destination-start)*264;
    } else {
        dist = (start-destination)*264;
    }

    return dist;
}

function calculatesFarePrice(start, destination){
    let dist = distanceTravelledInFeet(start,destination);
    let fare;
    if (dist<400) {
        fare = 0;
    } else if (dist>400 && dist<2000) {
        fare = (dist-400)*0.02;
    } else if(dist>2000 && dist<2500){
        fare = 25;
    }else {
        fare = "cannot travel that far";
    }

    return fare;
}