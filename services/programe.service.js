const Programe = require("../models/Programe");

exports.programeApplyService = async (applyInfo) => {
    const applyData = await Programe.create(applyInfo);
    return applyData;
}


exports.findUserByEmail = async (email) => {
    return await Programe.findOne({email});
}


exports.findUserByToken = async (token) => {
    return await Programe.findOne({confirmationToken: token});
}