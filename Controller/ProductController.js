const mg = require('mongodb');
const mongodb = mg.MongoClient;
const ObjectId = mg.ObjectID;
exports.create = (req,res) => {
    mongodb.connect(process.env.URI, function(err, db) {
        if (err) throw err;
        var client = db.db("ToyStorii");
        client.collection("product").insertOne(req.body, function(err, data) {
          if (err) res.status(500).json({'error':'server error: ' + err});
          res.status(200).json({'message':'Good'});
          db.close();
        });
      });
}

exports.edit = (req,res) => {
    mongodb.connect(process.env.URI, function(err,db){
        console.log(req.body);
        let client = db.db('ToyStorii');
        client.collection('product').updateOne({'_id': ObjectId(req.body.id)},{$set:req.body},function(err, data){
            if(err) res.status(500).json({'error':err});
            res.status(200).json({'message':'update successfully'});
            db.close();
        });
    });
}

exports.delete = (req,res) =>{
    mongodb.connect(process.env.URI, function(err, db){
        console.log(req.body.id);
        let client = db.db('ToyStorii');
        client.collection('product').deleteOne({'_id': ObjectId(req.body.id)},function(err,data){
            if(err) res.status(500).json({'errer':err});
            res.status(200).json({'message':'successfully'});
            db.close();
        });
    });
}

exports.read = (req,res) => {
    mongodb.connect(process.env.URI,function(err,db){
        let client = db.db('ToyStorii');
        let result = client.collection('product').find().toArray(function(err,data){
            res.status(200).json({'data':data});
        });
        
    });
}

exports.show = (req,res) => {
    let id = req.params.id;
    //console.log(id);
    mongodb.connect(process.env.URI,function(err,db){
        let client = db.db('ToyStorii');
        client.collection('product').find({
            '_id': ObjectId(id)
        }).toArray(function(err,data){
            if(err) res.status(500).json({'error': err});
            res.status(200).json({'data':data});
        })
    });
}