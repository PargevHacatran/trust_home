export function useFormatPrice (count:number, hasPrefix?:boolean) {
    if (count < 1000) {
        return count;
    }

    const formatedCountValue = Intl.NumberFormat("de-DE").format(count)

    return hasPrefix ? "₽" + formatedCountValue : formatedCountValue;
}