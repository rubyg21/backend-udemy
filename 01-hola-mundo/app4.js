

const input = [9,1,6,10,78,2,77,3,5]


// const input = ['z','a','r','v','c','b','q','c']


const burbuja = (entrada) =>{
    for (let i = 0; i < entrada.length; i++) {
        for (let j = 0; j < entrada.length; j++) {
             if (entrada[j] > entrada[j+1]) {
                 let tpm = entrada[j]
                 entrada[j] = entrada[j+1]
                 entrada[j+1] = tpm
             }
        }
        
    } return  entrada
}


const input2 = burbuja(input)

console.log(input2);