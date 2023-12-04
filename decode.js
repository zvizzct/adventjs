/*
En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: 
las letras dentro de los paréntesis deben ser leídas al revés

Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una
función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis,
eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los 
caracteres en el orden correcto.
*/

function decode(message) {
  while (message.includes('(')) {
    let start = message.lastIndexOf('(')
    let end = message.indexOf(')', start)
    console.log(start, end)

    let reversed = message
      .substring(start + 1, end)
      .split('')
      .reverse()
      .join('')

    message =
      message.substring(0, start) + reversed + message.substring(end + 1)
  }
  return message
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
