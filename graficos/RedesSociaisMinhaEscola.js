async function redesSociaisFavoritasMinhaEscola(params) {
    const url = 'https://script.google.com/macros/s/AKfycbwSdcxxUm__VT5RCLGnr2hz15_jTxzlPx8CJilW8EAiyo0y9-_Z0uGyEqFHP1YKiPSv9A/exec'
    const res = await fetch(url)
    const dados = await res.json
    const redesSociais = dados.slice(1).map(redes => redes[1])
    console.log(redesSociais)
}
redesSociaisFavoritasMinhaEscola()