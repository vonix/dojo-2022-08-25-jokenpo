import jokenpo from '../../src/jokenpo'

test('pedra ganha de tesoura', () => {
  const playerVitinho = 'pedra'
  const playerFran = 'tesoura'
  expect(jokenpo(playerVitinho, playerFran)).toBe(playerVitinho)
});

test('Tesoura e ganha de Papel', () => {
  const playerVitinho = 'papel'
  const playerFran = 'tesoura'
  expect(jokenpo(playerVitinho, playerFran)).toBe(playerFran)
});
