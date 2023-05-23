const { query } = require("express");
const Programe = require("../models/Programe");

exports.programeApplyService = async (applyInfo) => {
    const applyData = await Programe.create(applyInfo);
    const applicationNumber = await Programe.countDocuments();
    applyData.applicationNumber = applicationNumber;
    
    return applyData;
};


exports.getAllProgramService = async (page, size) => {
    const dataCount = await Programe.find().countDocuments();
    const programs = await Programe.find().skip(page * size).limit(size)
    const count = await Programe.countDocuments();

    return { programs, count, dataCount };
};































// exports.getAllProgramServic = async (page, size, query, search) => {
//     try {
//         let programsQuery = ""

//         if (search) {
//             programsQuery = programsQuery.find({ applicant_mobile: { $regex: search, $options: "i" } });
//         }

//         const programs = await programsQuery.skip(page * size).limit(size);
//         const count = await Programe.countDocuments(query);

//         return { programs, count };
//     } catch (error) {
//         throw error;
//     }
// };
