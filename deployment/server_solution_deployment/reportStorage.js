const knex = require("knex")(require("./connectionPool"));

const getReports = async () => {
  const result = await knex.select("*").from("reports");
  // console.log(result)
  return result
};

const getSpecificReport = async (req) => {
  const result = await knex.select("*").from("reports").where("dqr_id", req.query.id);
  return result
};

module.exports = {
  getReports,
  getSpecificReport
};
