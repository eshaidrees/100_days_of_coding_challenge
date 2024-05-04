function getSeason(month: number): string {
    let season: string;
    switch (month) {
        case 12:
        case 1:
        case 2:
            season = "Winter";
            break;
        case 3:
        case 4:
        case 5:
            season = "Spring";
            break;
        case 6:
        case 7:
        case 8:
            season = "Summer";
            break;
        case 9:
        case 10:
        case 11:
            season = "Autumn";
            break;
        default:
            season = "Invalid month";
            break;
    }
    return season;
}
console.log(getSeason(1));  // Output: Winter
console.log(getSeason(9));  // Output: Autumn
console.log(getSeason(13)); // Output: Invalid month