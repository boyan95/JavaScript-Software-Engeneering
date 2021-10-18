function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      // parse JSON to array
       let input = JSON.parse(document.querySelector('#inputs textarea').value);
       // get the paragraph where to set the output for best restaurant
       let bestRestaurantOutput = document.querySelector('#bestRestaurant p');
        // get the paragraph where to set the output for best workers
       let workersOutput = document.querySelector('#workers p');
      // create a new object
       let obj = {};
      // split the input with forEach
       input.forEach(line => {
          // get restaurant name and workers data by splitting by " - "
           let [restaurantName, workersData] = line.split(' - ');
           // get workers name and salary from workers data by splitting by ", ", than map names and salaries and return an object
           let workerInput = workersData.split(', ').map(el => {
               let [name, salary] = el.split(' ');
               return { name, salary: Number(salary) };
           })
           // see if restaurant name existing in obj, if not create it
           if (!obj[restaurantName]) {
               obj[restaurantName] = {
                   workers: [],
                   // as second parameter average salary as function
                   getAverageSalary: function() {
                       return this.workers.reduce((a, b) => a + b.salary, 0) / this.workers.length;
                   }
               };
           }

           obj[restaurantName].workers = obj[restaurantName].workers.concat(workerInput);
       })

       let bestAverageSalary = Object.entries(obj).sort((a, b) => b[1].getAverageSalary() - a[1].getAverageSalary());
       let bestSalary = Object.values(bestAverageSalary[0][1].workers).sort((a, b) => b.salary - a.salary);

       bestRestaurantOutput.textContent = `Name: ${bestAverageSalary[0][0]} Average Salary: ${(bestAverageSalary[0][1].getAverageSalary().toFixed(2))} Best Salary: ${bestSalary[0].salary.toFixed(2)}`;
       workersOutput.textContent = Object.values(bestSalary).map(el => `Name: ${el.name} With Salary: ${el.salary}`).join(' ');
   }
}