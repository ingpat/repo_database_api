const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        console.log('unable to connect to mongo db server');
    }
    console.log('connected');
    
    //insertion de donnees
    db.collection('Todos').insertOne({
        text: 'haiti perle des antilles',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert todo', err);
        }
else{
        return console.log(JSON.stringify(result.ops, undefined, 2));
        console.log('one ligne  inserted');
    }
    });
    
    db.close();
});
