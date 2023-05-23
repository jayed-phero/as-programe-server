const { query } = require("express");
const Program = require("../models/Program");

exports.programeApplyService = async (applyInfo) => {
    const applyData = await Program.create(applyInfo);
    const applicationNumber = await Program.countDocuments();
    applyData.applicationNumber = applicationNumber;
    
    return applyData;
};


exports.getAllProgramService = async (page, size) => {
    const dataCount = await Program.find().countDocuments();
    const programs = await Program.find().skip(page * size).limit(size)
    const count = await Program.countDocuments();

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
