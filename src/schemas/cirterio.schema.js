const joi = require("joi");
const descriterio = joi.string().min(3).max(50);
const criterioSchema = joi.object({ descriterio: descriterio.required() });
module.exports = { criterioSchema };
