import { PRIZES } from '@/data/constant'

function callApi(round: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const prizes = PRIZES.map((x, i) => ({
        index: i,
        ...x
      })).filter(x => x.level <= round && round <= x.level2)

      let randomNumber = Math.floor(Math.random() * prizes.length)
      const prizeItem = prizes[randomNumber];
      
      randomNumber = prizeItem.index;
      
      resolve(randomNumber)
    }, 3000)
  })
}

export async function delayedApiCall(round: number) {
  try {
    const result = await callApi(round)
    return result
  } catch (error) {
    throw error
  }
}
