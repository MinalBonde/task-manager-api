const mongoose = require('mongoose')
//mongoose.set('useNewUrlParser', true)


mongoose.connect(process.env.MONGODB_URL,{
    useUnifiedTopology: true,
    useNewUrlParser : true
})

// const Schema = mongoose.Schema
// const Task = new Schema({
//     description : String,
//     completed: Boolean
// })

// const MyModel2 = mongoose.model('Task',Task);
// const task = new MyModel2({
//     description: 'Learn the mongoose library',
//     completed : false
// }) 
// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log('Error!',error)
// })
