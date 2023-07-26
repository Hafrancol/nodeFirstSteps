const fs = require('fs');
const colors = require('colors');


const createFile = async (base, list) => {
  console.log(base);
    let output = "==================================\n";
    output += "    Tabla del multiplicar \n";
    output += "==================================\n";
    
    
  if(list){
    for (let index = 1; index < 10; index++) {
      output += `${base} x ${index} = ${base * index}\n`;
    }

    try {
        fs.writeFileSync(`./outputFile/tabla-${base}.txt`, output);
        console.log(output.red);
        return `tabla-${base}.txt`;
      } catch (err) {
        console.error(err);
      }
  }
  return 'No esta '

}

module.exports = {
    createFile
}