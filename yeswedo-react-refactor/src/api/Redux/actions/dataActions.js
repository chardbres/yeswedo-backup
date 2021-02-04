export const addBillsCount = count => ({
    type: 'ADD_BILLS_COUNT',
    payload: count
})

export const addBillsData = data => ({
    type: 'ADD_BILLS_DATA',
    payload: data
})

export const addCustomerCount = count => ({
    type: 'ADD_CUSTOMER_COUNT',
    payload: count
})

export const addCustomerData = data => ({
    type: 'ADD_CUSTOMER_DATA',
    payload: data
})

export default {
    addBillsCount,
    addBillsData,
    addCustomerCount,
    addCustomerData
}