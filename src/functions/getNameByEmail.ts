
export function getNameByEmail(email: string) {
  const parts = email.split('@')[0].split('.')
  const firstName = parts[0].charAt(0).toUpperCase() + parts[0].slice(1)
  const lastName = parts[1] ? parts[1].charAt(0).toUpperCase() + parts[1].slice(1) : '' // Verifica se parts[1] existe antes de acessar sua primeira letra

  return `${firstName} ${lastName}`
}


