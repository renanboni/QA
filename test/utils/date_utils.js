class DateUtils {

    static months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    static getYesterday() {
        var today = new Date();
        var yesterday = this.ordinal(today.getDate() - 1);
        var month = this.months[today.getMonth()];
        var year = today.getFullYear();
        return month + " " + yesterday + ", " + year;
    }    

    static ordinal(number) {
        switch (number) {
          case 1:
          case 21:
            return number + 'st';
          case 2:
          case 22:
            return number + 'nd';
          case 3:
          case 23:
            return number + 'rd';
          default:
            return number + 'th';
        }
    }
}

export default DateUtils;