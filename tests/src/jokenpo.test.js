import jokenpo from '../../src/jokenpo'

test('pedra ganha de tesoura', () => {
  const playerVitinho = 'pedra'
  const playerFran = 'tesoura'
  expect(jokenpo(playerVitinho, playerFran)).toBe(playerVitinho)
});

test('Tesoura ganha de Papel', () => {
  const playerVitinho = 'papel'
  const playerFran = 'tesoura'
  expect(jokenpo(playerVitinho, playerFran)).toBe(playerFran)
});

test('Papel ganha de Pedra', () => {
  const playerVitinho = 'papel'
  const playerFran = 'pedra'
  expect(jokenpo(playerVitinho, playerFran)).toBe(playerVitinho)
});

test('Papel ganha de Pedra', () => {
  const playerVitinho = 'pedra'
  const playerFran = 'papel'
  expect(jokenpo(playerVitinho, playerFran)).toBe(playerFran)
});

test('tesoura perde para pedra', () => {
  const playerVitinho = 'tesoura'
  const playerFran = 'pedra'
  expect(jokenpo(playerVitinho, playerFran)).toBe(playerFran)
});
