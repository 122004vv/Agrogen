const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const User=require('./models/User.js');
const Place=require('./models/Place.js');
const Booking=require('./models/Booking.js');
const jwt=require('jsonwebtoken');
const CookieParser=require('cookie-parser');
const imageDownloader=require('image-downloader');
const multer=require('multer');
const  mime=require('mime-types');
const fs = require('fs');
const Stripe = require('stripe')('sk_test_51OdlCuSFfBij0ekrEl6R5SjqmI9pTER7Fy0KhVRhyyNDkzWwzb51kQvHJ56skJJokZ2VQal4h6cMm4g5jzq0l1Cl00qG2dVDAL');


const {S3Client, PutObjectCommand} = require('@aws-sdk/client-s3');

const jwtSecret="Navi"

dotenv.config();

app.use(cors({
  credentials: true,
  origin: ['http://localhost:8000'],

}));


// app.use(cors());

app.use(express.json());
app.use(CookieParser());
app.use('/uploads', express.static(__dirname+'/uploads'));
app.use(bodyParser.urlencoded({extended:true}));

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://navisenthilnadhan:8jKe12GfnJvmT4yh@cluster0.8bh2wxa.mongodb.net/',{useNewUrlParser:true})
.then(()=>{
    console.log('MongoDB Connected');
}).catch((err)=>{
    console.log(err);

})

function getUserDataFromReq(req) {
  return new Promise((resolve, reject) => {
    jwt.verify(req.cookies.token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      resolve(userData);
    });
  });
}
app.get('/test',(req,res)=>{
    res.send('Hello World');
})


// KbgnFcE4O3U5S371
app.post('/register',(req,res)=>{
console.log(req.body); 
    console.log(req.body);
    console.log(req.body.name);
    const {name,email,password}=req.body;
    

    console.log(name);
    
   
    const user=new User({
        name:name,
        email:email,
        password:password,
        
    })
    res.json(user)
    user.save();
    // console.log(user);
    console.log("User Saved")
})

app.post('/login',async (req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email:email});
    if(user){
        if(user.password===password){
            jwt.sign({
                email:user.email,
                id:user._id
              }, jwtSecret, {}, (err,token) => {
                if (err) throw err;
                res.cookie('token', token).json(user);
                console.log("Cookie Set");
              });
            } else {
              res.status(422).json('pass not ok');
            }
        }
        
        else{
            res.json({error:'Password is incorrect'});
            console.log('Password is incorrect');
        }
    }
  

)

app.post('/login', async (req,res) => {
    mongoose.connect(process.env.MONGO_URL);
    const {email,password} = req.body;
    const userDoc = await User.findOne({email});
    if (userDoc) {
      const passOk = bcrypt.compareSync(password, userDoc.password);
      if (passOk) {
        jwt.sign({
          email:userDoc.email,
          id:userDoc._id,
          name:userDoc.name
        }, jwtSecret, {}, (err,token) => {
          if (err) throw err;
          res.cookie('token', token).json(userDoc);
        });
      } else {
        res.status(422).json('pass not ok');
      }
    } else {
      res.json('not found');
    }
  });
  

  app.get('/profile',async (req,res)=>{
    const {token}=req.cookies;
    if (token) {
      jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) throw err;
        const user = await User.findById(userData.id);
        res.json(user)
      });
    } else {
      res.json('not found');
    }
  });


  app.post('/logout',(req,res)=>{
    res.cookie('token','').json(true);
  })

  app.post('/upload-by-link', async (req,res) => {
    const {link} = req.body;
    console.log("Image Downloaded")
    console.log(link);
    const newName = 'photo' + Date.now() + '.jpg';
    await imageDownloader.image({
      url: link,
      dest: __dirname + '/uploads/' + newName,
    });
    res.json(newName);
  });

  const photosMiddleware = multer({dest:'uploads/'});
app.post('/upload', photosMiddleware.array('photos', 100), async (req,res) => {
  const uploadedFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    const {path,originalname,mimetype} = req.files[i];
    const parts=originalname.split('.');
    const ext=parts[parts.length-1];
    console.log(ext);
    console.log(path);
    console.log(parts);
    const newPath=path+'.'+ext;
    fs.renameSync(path,newPath);
    console.log(newPath);
    console.log(path);
    console.log(newPath.replace('uploads/',""));
     uploadedFiles.push(newPath.replace('uploads/',""));
  }
  res.json(uploadedFiles);
});

app.post('/places', (req,res) => {
  mongoose.connect(process.env.MONGO_URL);
  console.log(req.body);
  const {token} = req.cookies;
  const {
    title,address,addedPhotos,description,price,
    perks,extraInfo,checkIn,checkOut,maxGuests,
  } = req.body;
  if(token){
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const placeDoc = await Place.create({
      owner:userData.id,price,
      title,address,photos:addedPhotos,description,
      perks,extraInfo,checkIn,checkOut,maxGuests,
    });
    console.log("Place Created")
    res.json(placeDoc);
  });
}
});

app.get('/user-places', (req,res) => {
  mongoose.connect(process.env.MONGO_URL);
  const {token} = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    const {id} = userData;
    res.json( await Place.find({owner:id}) );
  });
});

app.get('/places/:id', async (req,res) => {
  mongoose.connect(process.env.MONGO_URL);
  const {id} = req.params;
  res.json(await Place.findById(id));
});

app.put('/places', async (req,res) => {
  mongoose.connect(process.env.MONGO_URL);
  const {token} = req.cookies;
  const {
    id, title,address,addedPhotos,description,
    perks,extraInfo,checkIn,checkOut,maxGuests,price,
  } = req.body;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const placeDoc = await Place.findById(id);
    if (userData.id === placeDoc.owner.toString()) {
      placeDoc.set({
        title,address,photos:addedPhotos,description,
        perks,extraInfo,checkIn,checkOut,maxGuests,price,
      });
      await placeDoc.save();
      res.json('ok');
    }
  });
});

app.get('/places', async (req,res) => {
  mongoose.connect(process.env.MONGO_URL);
  res.json( await Place.find() );
});

app.post('/bookings', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const userData = await getUserDataFromReq(req);
  const {
    place,checkIn,checkOut,numberOfGuests,name,phone,price,
  } = req.body;
  Booking.create({
    place,checkIn,checkOut,numberOfGuests,name,phone,price,
    user:userData.id,
  }).then((doc) => {
    res.json(doc);
  }).catch((err) => {
    throw err;
  });
});



app.get('/bookings', async (req,res) => {
  mongoose.connect(process.env.MONGO_URL);
  const userData = await getUserDataFromReq(req);
  res.json( await Booking.find({user:userData.id}).populate('place') );
});

app.post('/payment', async (req, res) => {
  let status, error;
  const { token, amount } = req.body;
  const a=100;

  try {
    const source = await Stripe.sources.create({
      type: 'card',
      token: token.id,
    });

    const paymentIntent = await Stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'inr',
      source: source.id,
    });         

    console.log('Payment successful');
    status = 'success';
  } catch (error) {
    console.log(error);   
    status = 'Failure';   
  }

  res.json({ error, status });
});

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})