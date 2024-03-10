const {dbusername,password,dbname} = process.env


export const connectionStr=`mongodb+srv://${dbusername}:${password}@cluster0.xgsctrf.mongodb.net/${dbname}?retryWrites=true&w=majority&appName=Cluster0`