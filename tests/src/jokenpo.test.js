import jokenpo from '../../src/jokenpo'

test('pedra ganha de tesoura', () => {
  const playerVitinho = 'pedra'
  const playerFran = 'tesoura'
  expect(jokenpo([playerVitinho, playerFran])).toBe(playerVitinho)
});

test('Tesoura ganha de Papel', () => {
  const playerVitinho = 'papel'
  const playerFran = 'tesoura'
  expect(jokenpo([playerVitinho, playerFran])).toBe(playerFran)
});

test('Papel ganha de Pedra', () => {
  const playerVitinho = 'papel'
  const playerFran = 'pedra'
  expect(jokenpo([playerVitinho, playerFran])).toBe(playerVitinho)
});

test('Papel ganha de Pedra', () => {
  const playerVitinho = 'pedra'
  const playerFran = 'papel'
  expect(jokenpo([playerVitinho, playerFran])).toBe(playerFran)
});

test('tesoura perde para pedra', () => {
  const playerVitinho = 'tesoura'
  const playerFran = 'pedra'
  expect(jokenpo([playerVitinho, playerFran])).toBe(playerFran)
});

test('Pedra perde para Papel', () => {
  const playerVitinho = 'papel'
  const playerFran = 'pedra'
  expect(jokenpo([playerVitinho, playerFran])).toBe(playerVitinho)
});

test('Pedra empata com pedra', () => {
  const playerVitinho = 'pedra'
  const playerFran = 'pedra'
  expect(jokenpo([playerVitinho, playerFran])).toBe('Empate')
});

test('Estao inventando moda', () => {
  const playerVitinho = 'agulha'
  const playerFran = 'agulha'
  expect(jokenpo([playerVitinho, playerFran])).toBe('Empate')
});


test('tres malucos no pedaço', () => {
  const playerVitinho = 'tesoura'
  const playerFran = 'tesoura'
  const playerAntonio = 'pedra'
  expect(jokenpo([playerVitinho, playerFran, playerAntonio])).toBe(playerAntonio)
});

test('tesoura e tesoura deve retornar pedra', () => {
  const playerVitinho = 'tesoura'
  const playerFran = 'papel'
  const playerAntonio = 'pedra'
  expect(jokenpo([playerVitinho, playerFran, playerAntonio])).toBe('Empate')
});
