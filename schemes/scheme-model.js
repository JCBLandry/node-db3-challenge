const db = require('../data/db-config.js');

module.exports ={
    find, 
    findById,
    findSteps,
    add,
    update,
    remove
};

function find(){
   return db('schemes'); 
}

function findById(id){
   return db('schemes').where({ id }).first()

}

function findSteps(id){
return  db("schemes")
    .join('steps', 'schemes.id', 'steps.scheme_id')
    .select('steps.id', 'steps.step_number', 'steps.instructions', 'schemes.id')
    .orderBy('steps.step_number')
    .where({ scheme_id: id})
}

function add(scheme){
    return db('newScheme').insert(userData)
    .then(ids=>{
        return findByID(ids[0])
    })
}

function update(changes, id){
  return  db('users').where({ id }).update(changes)
  .then(count=>{
      return findByID(id);
  })  
}

function remove(id){
  return db('schemes').where({ id }).del()  
}