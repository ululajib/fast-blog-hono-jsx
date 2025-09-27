export const inspect = (value: unknown) => {
  try {
    return typeof value === 'string' ? value : JSON.stringify(value, null, 2)
  } catch (error) {
    return '[uninspectable value]'
  }
}

export default {
  inspect
}
