export const getDate = timestamp => {
    const d = new Date(parseInt(timestamp))
    const year = d.getFullYear()
    const month = d.getMonth() + 1
    const day = d.getDate()

    return `${year}/${month}/${day}`
}