const Programe = require("../models/Programe");

exports.programeApplyService = async (applyInfo) => {
    const applyData = await Programe.create(applyInfo);
    const applicationNumber = await Programe.countDocuments();
    applyData.applicationNumber = applicationNumber; // Add applicationNumber to the document

    return applyData;
};


// exports.getAllProgrameService = async (page, query, size) => {

//     const programs = await Programe
//         .find(query)
//         .skip(page * size)
//         .limit(size)
//         .toArray();
//     const count = await Programe.countDocuments(query);

//     return { programs, count };
// };


exports.getAllProgrameService = async () => {
    const programs = await Programe.find();
    const totalCount = programs.length;

    return { programs, totalCount };
};
