On a local machine here are the setup steps to run:
1. Navigate to your mongodb/bin folder (if this is not already setup to run as a service begin it as a service with the command:
  'mongod --directoryperdb --dbpath <Path to db ex: C:\mongodb\data\db> --logpath <Path to log file ex: C:\mongodb\log\mongo.log> --logappend --install'
  'net start MongoDB'

2. Once this is setup as a service, start it with the command 'mongo'.

3. Navigate to the directory containing this git repo and begin with 'nodemon'.
