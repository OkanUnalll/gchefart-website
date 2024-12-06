const MonthFormat = (month: string | number) => {
    let value;

    switch(month) {
        case 0:
            value = 'January'
            break;
        case 1:
            value = 'February'
            break;
        case 2:
            value = 'March'
            break;
        case 3:
            value = 'April'
            break;
        case 4:
            value = 'May'
            break;
        case 5:
            value = 'June'
            break;
        case 6:
            value = 'July'
            break;
        case 7:
            value = 'August'
            break;
        case 8:
            value = 'September'
            break;
        case 9:
            value = 'October'
            break;
        case 10:
            value = 'November'
            break;
        default:
            value = 'December'
    }

    return value
}

export default MonthFormat