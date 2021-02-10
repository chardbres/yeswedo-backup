import { getDate } from './getDate'

export const parseBillHours = billsArray => {
    let compArr = billsArray
    let firstObj = {
        date: compArr[0].date,
        [`${compArr[0].activity}`]: compArr[0].duration,
        activity: compArr[0].activity
    }
    let returnArr : any[] = [{firstObj}]

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

export const parseBillSources = billsArray => {
    const returnArr : any[] = []
  
    billsArray.forEach(item => {
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

export const parseBillables = (billsArray, custArray, jobsArray) => {
    const returnArr : any[] = []

    billsArray.forEach(bill => {
        let billableObj = {}

        let rate = parseFloat(bill.Rate)
        let duration = parseFloat(bill.Time)
        let date = getDate(bill.TimeStamp)
        let customer = bill.Customer

        billableObj['PostingDate'] = date
        billableObj['Activity'] = bill.ActivityType
        billableObj['PostedBy'] = 'Unknown'
        billableObj['HourlyRate'] = rate
        billableObj['Hours'] = duration
        billableObj['TotalCharge'] = rate * duration

        let jobIndex = jobsArray.findIndex(job => job['Job Name'] === bill.Job)

        billableObj['JobAddress'] = jobsArray[jobIndex]['Job Address']
        
        let custIndex = custArray.findIndex(cust => cust.hasOwnProperty(customer))
        let custObj = custArray[custIndex]
        let custName = custObj[customer]['Customer Name']

        billableObj['CustName'] = custName


        returnArr.push(billableObj)
    
    })

    return returnArr
}