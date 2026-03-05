
export async function delay(delayMs = 0) {
  return new Promise((resolve, __) => {
    setTimeout(() => resolve(true), delayMs)
  })
}