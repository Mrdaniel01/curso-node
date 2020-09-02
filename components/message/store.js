const Model = require('./model');
const { populate } = require('./model');

function addMessage(message){
  //list.push(message);
  const myMessage = new Model(message);
  myMessage.save()
}

function getMessage(filterUser) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterUser !== null){
      filter = {user: filterUser}
    }
    Model.find(filter)
      .populate('user')
      .exec((error, populated) => {
        if(error){
          reject(error);
          return false;
        }
        resolve(populated)
      })
      
  })

}

function removeMessage(id){
  return Model.deleteOne({
    _id: id
  })
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id
  });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage
}

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText: updateText,
  remove: removeMessage,
  //get:
  //update:
  //delete:
}