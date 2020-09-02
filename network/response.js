const statusMessage = {
  '200': 'Done',
  '201': 'Created',
  '400': 'Invalid format',
  '500': 'Internal erro',
}

//por terminar status

exports.success = function (req, res, message, status) {
  res.status(status || 200).send({
    error: '',
    body: message})
}

exports.error = function (req, res, message, status, details) {
  console.error('[response error]' + details)

  res.status(status || 500).send({
    error: message,
    body: ''
  });
}
