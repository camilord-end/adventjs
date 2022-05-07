const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' }
]

const contarOvejas = (ovejas) => {
  const ovejasFiltered = ovejas.filter((c) => {
    const containN = c.name.toLowerCase().includes('n')
    const containA = c.name.toLowerCase().includes('a')
    if (c.color === 'rojo' && containN && containA) { return true }
  })
  return ovejasFiltered
}

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)
