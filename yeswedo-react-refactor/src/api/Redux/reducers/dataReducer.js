const initialState = []

export default function dataReducer (state = initialState, action) {
    switch (action.type) {
        case 'ADD_ACTIVITY_DATA': 
            return {
                ...state,
                activityData: { data: action.payload }
            }
        case 'ADD_BILLS_DATA':
            return {
                ...state,
                billsData: { data: action.payload }
            }
        case 'ADD_CUSTOMER_DATA':
            return {
                ...state,
                customerData: { data: action.payload }
            }
        case 'ADD_JOBS_DATA': 
            return {
                ...state,
                jobsData: { data: action.payload }
            }
        case 'ADD_WORKER_DATA': 
            return {
                ...state,
                workerData: { data: action.payload }
            }
        default:
            return state
    }
}
