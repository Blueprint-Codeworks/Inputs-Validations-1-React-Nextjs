export const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }
  
  export const validatePassword = (password: string): boolean => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/
    return re.test(password)
  }
  
  export const validatePhone = (phone: string): boolean => {
    const re = /^\d{10}$/
    return re.test(phone)
  }
  
  export const validateCreditCard = (number: string): boolean => {
    return number.length === 16 && !isNaN(Number(number))
  }
  
  export const validateExpiryDate = (date: string): boolean => {
    const re = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/
    return re.test(date)
  }
  
  export const validateCVV = (cvv: string): boolean => {
    return /^\d{3}$/.test(cvv)
  }
  
  export const validatePostalCode = (code: string): boolean => {
    return /^\d{4,6}$/.test(code)
  }