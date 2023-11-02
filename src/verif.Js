const express = require('express');
const app = express();
const port = 3001;
const mongoose=require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.URL,{useNewUrlParser:true,useUnifiedTopology:true,});
const db=mongoose.connection;
db.on('error',console.error.bind(console, 'Erreur de connexion à la base de données :'));
db.once('open',()=>{console.log('Connecté à la base de données');});
const VotreModele=mongoose.model(
    'cdsave', 
    new mongoose.Schema({
        carte: Number,
        noms: String,
        dates: String,
        crs: String
    })
);

const dbcheck=(dbdata,cardnumber,nom,date,cs)=>{
    let state1=false,state2=false,state3=false,state4=false;
    for(let index=0;index<dbdata.length;index++){
        const dbs=dbdata[index];
        if(Number(dbs.carte)==Number(cardnumber)){state1=true;}
        if(String(dbs.noms)==String(nom)){state2=true;}
        if(String(dbs.date)==String(date)){state3=true;}
        if(String(dbs.crs)==String(cs)){state4=true;}
    }
    let ttl=(state1+state2+state3+state4)==4;
    return {state1,state2,state3,state4,ttl};
}

const checkCreditCard = cardnumber => {
    const validateCardNumber = number => {
        const regex = new RegExp("^[0-9]{13,19}$");
        if (!regex.test(number)){return false;}
        let checksum=0,j=1,val=number;
        for(let i=val.length-1;i>=0;i--){
            let calc=Number(val.charAt(i))*j;
            if(calc>9){checksum=checksum+1;calc=calc-10;}
            checksum=checksum+calc;
            j=(j==1)?(2):(1);
        }
        return (checksum%10)==0;
    }
    const ccErrors = [
        "Unknown card type",
        "No card number provided",
        "Credit card number is in invalid format",
        "Credit card number is invalid",
        "Credit card number has an inappropriate number of digits",
        "Warning! This credit card number is associated with a scam attempt"
    ];
    const response=(success,message=null,type=null)=>({message,success,type});
    const cards = [
        {name: "Visa",length: "13,16", prefixes: "4",checkdigit: true},
        {name: "MasterCard", length: "16", prefixes: "51,52,53,54,55",checkdigit: true},
        {name: "DinersClub", length: "14,16", prefixes: "36,38,54,55",checkdigit: true},
        {name: "CarteBlanche", length: "14", prefixes: "300,301,302,303,304,305",checkdigit: true},
        {name: "AmEx", length: "15", prefixes: "34,37",checkdigit: true},
        {name: "Discover", length: "16", prefixes: "6011,622,64,65",checkdigit: true},
        {name: "JCB", length: "16", prefixes: "35",checkdigit: true},
        {name: "enRoute", length: "15", prefixes: "2014,2149",checkdigit: true},
        {name: "Solo", length: "16,18,19", prefixes: "6334,6767", checkdigit: true},
        {name: "Switch", length: "16,18,19", prefixes: "4903,4905,4911,4936,564182,633110,6333,6759",checkdigit: true},
        {name: "Maestro",length: "12,13,14,15,16,18,19", prefixes: "5018,5020,5038,6304,6759,6761,6762,6763",checkdigit: true},
        {name: "VisaElectron",length: "16", prefixes: "4026,417500,4508,4844,4913,4917",checkdigit: true},
        {name: "LaserCard",length: "16,17,18,19",prefixes: "6304,6706,6771,6709",checkdigit: true}
    ];
    if(cardnumber.length==0) {return response(false,ccErrors[1]);}
    cardnumber=cardnumber.replace(/\s/g,"");
    if(!validateCardNumber(cardnumber)){return response(false,ccErrors[2]);}
    if(cardnumber=='5490997771092064'){return response(false,ccErrors[5]);}
    let lengthValid=false,prefixValid=false,cardCompany="";
    for(let i=0;i<cards.length;i++){
      const prefix=cards[i].prefixes.split(",");
      for(let j=0;j<prefix.length;j++){const exp=new RegExp("^"+prefix[j]);if(exp.test(cardnumber)){prefixValid=true;}}
      if(prefixValid){const lengths=cards[i].length.split(",");for(let j=0;j<lengths.length;j++){if(cardnumber.length==lengths[j]){lengthValid=true;}}}
      if(lengthValid&&prefixValid){cardCompany=cards[i].name;return response(true,null,cardCompany);}  
    }
    if (!prefixValid) {return response(false,ccErrors[3]);}
    if (!lengthValid) {return response(false,ccErrors[4]);} 
    return response(true,null,cardCompany);
}

app.use(express.json());app.get('/api/check',(req,res)=>{
    const data=[];
    VotreModele.find({}).then((documents)=>{

        documents.map((dt,index)=>{data[index]={carte:dt.carte,noms:dt.noms,date:dt.dates,crs:dt.crs};})
        data.map((dt,index)=>{console.log(index,':', dt);})

        const {param1,param2,param3,param4}=req.query;
        const {state1,state2,state3,state4,ttl}=dbcheck(data,param1,param2,param3,param4);
        const CCC=checkCreditCard(param1);
        const out=(ttl && CCC.success)?('payement valide'):('payement refuser');

        res.json({status:{type:CCC.type,out}});
    });
});

app.listen(port, () => {console.log(`Example app listening on port ${port}`)})