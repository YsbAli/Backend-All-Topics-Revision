const post = (model) => async (req, res) => {
  try {
    const item = await model.create(req.body);

    return res.status(201).send(item);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const getAll = (model) => async (req, res) => {
  try {
    const items = await model.find().lean().exec();

    return res.send(items);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const getOne = (model) => async (req, res) => {
  try {
    const item = await model.findById(req.params.id).lean().exec();

    return res.send(item);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const updateOne = (model) => async (req, res) => {
  try {
    const item = await model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.send(item);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const deleteOne = (model) => async (req, res) => {
  try {
    const item = await model.findByIdAndDelete(req.params.id);

    return res.send(item);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = (model) => {
  return {
    post: post(model),
    getAll: getAll(model),
    getOne: getOne(model),
    updateOne: updateOne(model),
    deleteOne: deleteOne(model),
  };
};
