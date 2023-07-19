class DateUtils {
  private currentDate: Date = new Date()

  setCurrentDate() {
    this.currentDate = new Date()
  }

  private getYearAndMonth = () => {
    return [this.getFullYear(), this.getMonth()]
  }

  private getMonth() {
    return this.currentDate.getMonth()
  }

  private getFullYear() {
    return this.currentDate.getFullYear()
  }

  private formatDateToBr(date: Date): string {
    return date.toLocaleDateString('pt-br')
  }

  public getThisMonth() {
    this.setCurrentDate()

    const [year, month] = this.getYearAndMonth()

    return {
      start: this.formatDateToBr(new Date(year, month, 1)),
      end: this.formatDateToBr(this.currentDate)
    }
  }

  public getLastDays(days: number) {
    this.setCurrentDate()

    const { currentDate } = this

    return {
      end: this.formatDateToBr(currentDate),
      start: this.formatDateToBr(
        new Date(currentDate.setDate(currentDate.getDate() - days))
      )
    }
  }
}

export const dateUtils = new DateUtils()
