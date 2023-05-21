const { programeApplyService } = require("../services/programe.service");
const { generateToken } = require("../utils/token");

exports.programeApply = async (req, res) => {
    try {
        const user = await programeApplyService(req.body);
       // const token = user.generateConfirmationToken();
        await user.save({
            validateBeforeSave: false
        })
        console.log(user)
        res.status(201).json({
            status: "success",
            message: "Successfully Application Submitted"
        })
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error
        })
    }
}