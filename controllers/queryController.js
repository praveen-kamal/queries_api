import Query from "../models/queryModel.js";

// @desc Get queries
// @route GET /api/queries/
// @access Private
const getQueries = async (req, res) => {
    try {
        const queries = await Query.find();
        res.status(200).json(queries);
    } catch (err) {
        res.status(401).json({
            message: "Error fetching queries",
            error: `Error: ${err.message}`,
        });
    }
};

// @desc Post query
// @route POST /api/queries/
// @access Public
const postQuery = async (req, res) => {
    try {
        const newQuery = new Query({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        });
        await newQuery.save();
        res.status(200).json({ message: "Query posted", success: true });
    } catch (err) {
        res.status(401).json({
            message: "Error posting query",
            success: false,
            error: `Error: ${err.message}`,
        });
    }
};

// @desc Delete query
// @route DELETE /api/queries/:id
// @access Private
const deleteQuery = async (req, res) => {
    try {
        const query = await Query.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Query deleted", success: true });
    } catch (err) {
        res.status(401).json({
            message: "Error deleting query",
            success: false,
            error: `Error: ${err.message}`,
        });
    }
};

export { deleteQuery, getQueries, postQuery };
