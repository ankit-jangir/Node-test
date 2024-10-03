const monsooge = require('mongoose')
const url = 'mongodb://localhost:27017/SiviProject2'

const mongodb = ()=>{
    monsooge.connect(url)
    .then(()=>{
        console.log("mongoodb is conneted .....");
        
    })
    .catch((error)=>{
        console.log(error);
        
    })
    
}
mongodb()
module.exports  = {mongodb}
// module.exports  = m