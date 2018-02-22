const basicController = {};

basicController.get = (req, res) => {
  res.json({
    message: 'welcome to the api',
  });
};

export default basicController;