# set profile
db.getProfilingStatus()
db.setProfilingLevel(1)

# get log
db.adminCommand( { getLog: "*" } )
db.adminCommand( { getLog : "global" } )
db.adminCommand( { getLog : "startupWarnings" } )