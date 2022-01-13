"use strict";
exports.__esModule = true;
exports.generateRequestBody = void 0;
var constants_1 = require("commons/constants");
var uuid_1 = require("uuid");
exports.generateRequestBody = function () {
    return {
        request: {
            requestId: uuid_1.v4(),
            requestTime: "",
            partnerId: constants_1.PARTNER_ID,
            signature: constants_1.SIGNATURE
        }
    };
};
