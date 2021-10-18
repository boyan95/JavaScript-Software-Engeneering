function search() {
   // TODO
   const towns = Array.from(document.querySelectorAll("ul li"));
   const searchedLine = document.getElementById("searchText").value;
   let counter = 0;

   towns.forEach((town) =>{
      if(town.textContent.includes(searchedLine)){
         town.style.fontWeight = "bold";
         town.style.textDecoration = "underline";
         counter++;
      }else{
         town.style.fontWeight = "normal";
         town.style.textDecoration = "";
      }
   });
   let result = document.getElementById("result");
   result.innerHTML = `${counter} matches found`
}