const { programeApplyService, allApplicationService, getAllProgrameService } = require("../services/programe.service");
const { generateToken } = require("../utils/token");

exports.programeApply = async (req, res) => {
    try {
      const programeData = await programeApplyService(req.body);
      await programeData.save({ validateBeforeSave: false });
      const { _id, applicationNumber } = programeData; // Extract _id and applicationNumber
  
      res.status(201).json({
        status: "success",
        message: "Successfully Application Submitted",
        applicationNumber,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        error,
      });
    }
  };
  


exports.getAllPrograms = async (req, res) => {
    try {
      const { page, limit } = req.query;
      const { programs, totalCount } = await getAllProgrameService(Number(page), Number(limit));

      res.status(200).json({
        status: "success",
        data: programs,
        totalCount,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        error,
      });
    }
  };


// exports.getAllPrograms = async (req, res) => {
//     try {
//         const page = parseInt(req.query.page);
//         const size = parseInt(req.query.size);
//         const search = req.query.search;
//         const from = req.query.from ? parseInt(req.query.from) : null;
//         const till = req.query.till ? parseInt(req.query.till) : null;
//         let query = {};

//         if (search && search.length) {
//             query = {
//                 $text: {
//                     $search: search
//                 }
//             }
//         }

//         const { programs, count } = await getAllProgrameService(size, page, query);

//         res.status(200).json({
//             status: "success",
//             data: programs,
//             count,
//         });
//     } catch (error) {
//         res.status(500).json({
//             status: "fail",
//             error,
//         });
//     }
// };