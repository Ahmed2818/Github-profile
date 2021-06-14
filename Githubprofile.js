var APIURL = 'https://api.github.com/users/'

getUser('bradraversy')

function getUser(username){
   try{
    var {data} = axios(APIURL + username)
    console.log(data)
   }
   catch(err){
       console.log(err)
   }
}