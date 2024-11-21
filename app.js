
const axios = require('axios');

async function buscarCEP(cep) {
  try {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    
    const response = await axios.get(url);

    if (response.data.erro) {
      console.log('❌ CEP não encontrado!');
      return;
    }

    console.log('📦 Dados do CEP:');
    console.log(`CEP: ${response.data.cep}`);
    console.log(`Logradouro: ${response.data.logradouro}`);
    console.log(`Bairro: ${response.data.bairro}`);
    console.log(`Cidade: ${response.data.localidade}`);
    console.log(`Estado: ${response.data.uf}`);
  } catch (error) {
    console.error('⚠️ Erro ao buscar o CEP:', error.message);
  }
}

const cep = '08285190';
buscarCEP(cep);
