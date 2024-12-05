const getPaginationParams = query => {
  const page = parseInt(query.page, 10) || 1;
  const limit = parseInt(query.limit, 10) || 10;
  const offset = (page - 1) * limit;
  const orderBy = query.orderBy || 'DESC';
  const sortBy = query.sortBy || 'creation_date';
  return { page, limit, offset, orderBy, sortBy };
};

module.exports = getPaginationParams;
