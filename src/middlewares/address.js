import axios from 'axios'

export const getUfs = async () => {
  let ufs = []

  await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
    ufs = response.data.map(uf => uf.sigla)
    ufs.sort()
  })

  return ufs
}

export const getAddress = async (postalCode) => {
  let uf, localidade, bairro, logradouro

  const postal = String(postalCode).replace(/-/g, '').replace(/\s/g, '')
  if (postal.length !== 8) return
  
  const { data } = await axios.get(`https://viacep.com.br/ws/${postal}/json/`)

  if (!data) return

  uf = data.uf
  localidade = data.localidade
  bairro = data.bairro
  logradouro = data.logradouro

  return { uf, localidade, bairro, logradouro }
}