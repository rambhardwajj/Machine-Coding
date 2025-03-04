async function registerUser(){
    await colletData()
    validateUserEmail()

    await insertInDb()
    sendEmail()
    sendPushNotification()
}

registerUser()
 .then(()=> console.log('done'))
 .catch(()=> console.log('err'))