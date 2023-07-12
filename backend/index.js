const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');


mongoose
  .connect('mongodb://127.0.0.1:27017/Studentsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const port = 4000;

const Products = require('./models/Items');

const cors = require('cors');
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());


app.get('/',async (req,res)=>{
    const items=await Products.find()
    res.json(items)

})


app.post('/delete/:id',async (req,res)=>{
  const {id}=req.params;
  try{
    const deletionResult=await Products.deleteMany({_id:id})
    if (deletionResult.deletedCount > 0) {
      console.log("Deleted");
      res.json({success:true})
  } 
    else {
      console.log("No matching documents found for deletion");
  }
  }
  catch(error){
     console.log("Error")
  }
})

app.post('/edit/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Products.updateOne({ _id: id }, req.body);
    console.log("received"+id+JSON.stringify(req.body));
    res.json({ success: true});
  } catch (error) {
    console.error(error);
  }
});

app.post('/Newadd', async (req, res) => {
  try {
    await Products.insertMany( req.body);
    res.json({ success: true});
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log('Server running at port: ' + port);
});
