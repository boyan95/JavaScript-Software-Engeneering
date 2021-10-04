function square(num){
    for(rows = 0; rows < Number(num); rows++){
        let result = ""
            for(cols = 0; cols < Number(num);cols++){
                result += "* "
            }
        console.log(result)
    }
}
square(1)
square(2)
square(5)