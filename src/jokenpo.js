const elements = ['tesoura', 'papel', 'pedra']

export default (player1, player2) => {
  if (player1 === player2) return 'Empate'

  const choice1Index = elements.indexOf(player1)
  const choice2Index = elements.indexOf(player2)
  const diff = choice1Index - choice2Index
  if (Math.abs(diff) === 1) return choice1Index < choice2Index ? player1 : player2
  return player1 === 'pedra' ? player1 : player2
}
