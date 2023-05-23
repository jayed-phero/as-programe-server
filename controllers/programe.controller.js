const Programe = require("../models/Programe");
const { programeApplyService, allApplicationService, getAllProgrameService, getAllProgramService } = require("../services/programe.service");
const { generateToken } = require("../utils/token");

exports.programeApply = async (req, res) => {
  try {
    const programeData = await programeApplyService(req.body);
    await programeData.save({ validateBeforeSave: false });
    const { _id, applicationNumber } = programeData;

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
    const { page, size, district, subDistrict, search } = req.query;
    // let query = {};

    // if (district) {
    //   query.district = district;
    // }

    // const { programs, count } = await getAllProgramService(Number(page), Number(size), query, search);

    const { programs, count, dataCount } = await getAllProgramService(Number(page), Number(size));

    res.status(200).send({
      status: "success",
      data: programs,
      count: count,
      dataCount: dataCount
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};













































// exports.getAllPrograms = async (req, res) => {
//   try {
//     const { page, size, district, subDistrict, search } = req.query;


//     console.log(size, page, district, subDistrict, search)

//     let query = {};
//     // if (district) {
//     //   filter.district = district;
//     // }
//     // if (subDistrict) {
//     //   filter.subDistrict = subDistrict;
//     // }
//     // if (search && search.length) {
//     //   filter.applicant_mobile = { $regex: search, $options: "m" };
//     // }

//     // if (search && search.length) {
//     //   query = {
//     //     $text: {
//     //       $search: search
//     //     }
//     //   }
//     // }

//     const { programs, count } = await getAllProgramService(Number(page), Number(size), query);

//     res.status(200).send({
//       status: "success",
//       data: programs,
//       count: count
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: "fail",
//       error,
//     });
//   }
// };
