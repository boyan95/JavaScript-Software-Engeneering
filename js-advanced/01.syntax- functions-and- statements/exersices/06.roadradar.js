function roadRadar(speed, area){
    let motorwaySpeed = 130;
    let interstateSpeed = 90;
    let citySpeed = 50;
    let residentialSpeed = 20;

    let speedAsInt = Number(speed);
    let speedZone = 0;
    if (speed > speedZone){
        
        difference = speed - speedZone;
    }
    

    switch(area){
        case "motorway": speedZone = motorwaySpeed; break;
        case "interstate": speedZone = interstateSpeed; break;
        case "city": speedZone = citySpeed; break;
        case "residential": speedZone = residentialSpeed; break;
    }

    difference = speed - speedZone;

    if (difference > 0){
        if (difference <= 20){
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedZone} - speeding`)
        }else if (difference > 20 && difference <=40){
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedZone} - excessive speeding`)
        }else{
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedZone} - reckless driving`)
        }
    }else{
        console.log(`Driving ${speed} km/h in a ${speedZone} zone`)
    }

}
roadRadar("40", "city")
roadRadar("21","residential")
roadRadar("120", "interstate")
roadRadar("200", "motorway")