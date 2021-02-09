export const parseBillHours = array => {
    let compArr = array
    let compObj = {
        date: compArr[0].date,
        [`${compArr[0].activity}`]: compArr[0].duration,
        activity: compArr[0].activity
    }
    let returnArr : any[] = [{compObj}]

    compArr.forEach(bill => {
        let matchIndex = returnArr.findIndex(element => element.date === bill.date)

        if (matchIndex < 0) {
            returnArr.push(bill)
        } else {
            returnArr[matchIndex].duration+= bill.duration
        }
    })

    return returnArr
}

export const parseBillSources = array => {
    const returnArr : any[] = []
  
    array.forEach(item => {
        const activity = item.ActivityType
        let tempObj = {
            'id': '',
            'label': '',
            'value': 0
        }

        if (returnArr.length === 0 ) {
            tempObj.id = String(activity)
            tempObj.label = String(activity)
            tempObj.value = 1
            returnArr.push(tempObj)
        } else {
            const index = returnArr.findIndex(item => item.id === String(activity))
            
            if (index === -1) {
                tempObj.id = String(activity)
                tempObj.label = String(activity)
                tempObj.value = 1
                returnArr.push(tempObj)
            } else {
                returnArr[index]['value']++
            }
            
        }
    })
    
    return returnArr
}