On a local machine here are the setup steps to run:
1. Navigate to your mongodb/bin folder

1a. If MongoDB is not already setup to run as a service begin it as a service with the command:
'mongod --directoryperdb --dbpath <Path to db ex: C:\mongodb\data\db> --logpath <Path to log file ex: C:\mongodb\log\mongo.log> --logappend --install'
  
1b. Once your MongoDB service is setup, begin it with: 'net start MongoDB'

2. Start the mongodb database with the command 'mongo'.

3. Navigate to the directory containing this git repo and begin with 'nodemon'.
