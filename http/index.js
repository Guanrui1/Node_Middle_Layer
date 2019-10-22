let config = require('./config.js').config
let post = require('./http.js').post

module.exports =  {
    async getAllWorkCenter() {
        return await post(config.baseUrl + config.getAllWorkCenter)
    },
    async getMachineGantt(workCenterCode, startTime, endTime, machineSearch) {
        return await post(config.baseUrl + config.getMachineGantt, {
            workCenterCode,
            startTime,
            endTime,
            machineSearch
        })
    },
    async getOrderGantt(startTime, endTime, orderSearch) {
        return await post(config.baseUrl + config.getOrderGantt, {
            startTime,
            endTime,
            orderSearch
        })
    }
}
