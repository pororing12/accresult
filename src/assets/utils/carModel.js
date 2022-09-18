const carModel = (car) => {
  const result = {
    carName: '',
    carLogo: ''
  }
  switch (car) {
    case 0:
      result.carName = 'Porsche 991 GT3 R'
      result.carLogo = require('@/assets/img/mark/porsche_logo.png')
      break
    case 1:
      result.carName = 'Mercedes-AMG GT3'
      result.carLogo = require('@/assets/img/mark/amg_logo.png')
      break
    case 6:
      result.carName = 'Nissan GT-R Nismo GT3'
      result.carLogo = require('@/assets/img/mark/nissan_logo.png')
      break
    case 16:
      result.carName = 'Lamborghini Huracan GT3 Evo'
      result.carLogo = require('@/assets/img/mark/lamborghini_logo.png')
      break
    case 20:
      result.carName = 'AMR V8 Vantage'
      result.carLogo = require('@/assets/img/mark/astonMartin_logo.png')
      break
    case 23:
      result.carName = 'Porsche 991 II GT3 R'
      result.carLogo = require('@/assets/img/mark/porsche_logo.png')
      break
    case 30:
      result.carName = 'BMW M4 GT3'
      result.carLogo = require('@/assets/img/mark/bmw_logo.png')
      break
    default:
      break
  }
  return result
}

export default carModel
