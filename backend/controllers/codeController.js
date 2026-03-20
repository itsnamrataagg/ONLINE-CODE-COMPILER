const axios = require("axios");
const Program = require("../models/Program");

exports.runCode = async (req, res) => {

  const { code, language, input } = req.body;

  try {

    const response = await axios.post(
      "https://ce.judge0.com/submissions?base64_encoded=false&wait=true",
      {
        source_code: code,
        language_id: language,
        stdin: input
      }
    );

    let result = "";

    if (response.data.stdout) result = response.data.stdout;
    else if (response.data.stderr) result = response.data.stderr;
    else if (response.data.compile_output) result = response.data.compile_output;
    else result = "No output";

    res.json({ output: result });

  } catch (error) {

    res.json({ output: "Error running code" });

  }

};
//const Program = require("../models/Program");

exports.saveProgram = async (req, res) => {

  try {

    const { title, code, language, input, output } = req.body;

    const program = new Program({
      title,
      code,
      language,
      input,
      output
    });

    await program.save();

    res.json({
      message: "Program saved successfully"
    });

  } catch (error) {

    res.json({
      message: "Error saving program"
    });

  }

};

exports.getPrograms = async (req, res) => {

  try {

    const programs = await Program.find().sort({ createdAt: -1 });

    res.json(programs);

  } catch (error) {

    res.json({
      message: "Error fetching programs"
    });

  }

};
exports.deleteProgram = async (req, res) => {

  try {

    const { id } = req.params;

    await Program.findByIdAndDelete(id);

    res.json({
      message: "Program deleted"
    });

  } catch (error) {

    res.json({
      message: "Error deleting program"
    });

  }

};