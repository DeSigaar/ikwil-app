export const isToday = (date: Date): boolean => {
  const today = new Date()
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  )
}

export const getMonthByNumber = (number: number): string => {
  switch (number) {
    case 0:
      return 'Januari'
    case 1:
      return 'Februari'
    case 2:
      return 'Maart'
    case 3:
      return 'April'
    case 4:
      return 'Mei'
    case 5:
      return 'Juni'
    case 6:
      return 'Juli'
    case 7:
      return 'Augustus'
    case 8:
      return 'September'
    case 9:
      return 'Oktober'
    case 10:
      return 'November'
    case 11:
      return 'December'
    default:
      return ''
  }
}

export const getShortMonthByNumber = (number: number): string => {
  switch (number) {
    case 0:
      return 'Jan'
    case 1:
      return 'Feb'
    case 2:
      return 'Maa'
    case 3:
      return 'Apr'
    case 4:
      return 'Mei'
    case 5:
      return 'Jun'
    case 6:
      return 'Jul'
    case 7:
      return 'Aug'
    case 8:
      return 'Sep'
    case 9:
      return 'Okt'
    case 10:
      return 'Nov'
    case 11:
      return 'Dec'
    default:
      return ''
  }
}

export const getDayByNumber = (number: number): string => {
  switch (number) {
    case 0:
      return 'Zondag'
    case 1:
      return 'Maandag'
    case 2:
      return 'Dinsdag'
    case 3:
      return 'Woensdag'
    case 4:
      return 'Donderdag'
    case 5:
      return 'Vrijdag'
    case 6:
      return 'Zaterdag'
    default:
      return ''
  }
}

export const getShortDayByNumber = (number: number): string => {
  switch (number) {
    case 0:
      return 'Zon'
    case 1:
      return 'Maa'
    case 2:
      return 'Din'
    case 3:
      return 'Woe'
    case 4:
      return 'Don'
    case 5:
      return 'Vrij'
    case 6:
      return 'Zat'
    default:
      return ''
  }
}

export const getDayByString = (string: string): number => {
  switch (string.toLowerCase()) {
    case 'sunday':
      return 0
    case 'monday':
      return 1
    case 'tuesday':
      return 2
    case 'wednesday':
      return 3
    case 'thursday':
      return 4
    case 'friday':
      return 5
    case 'saturday':
      return 6
    default:
      return 0
  }
}
