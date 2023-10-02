const fs = require('fs');

const userMDL = function (req, res, next) {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  
    
    const apiKey = req.query.apiKey;
    const user = users.find(u => u.apiKey === apiKey);
  
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
  
    
    const index = users.findIndex(u => u.username === user.username);
    if (index !== -1) {
      if (req.url.includes('/student')) {
        statistics[index].student++;
      } else if (req.url.includes('/teacher')) {
        statistics[index].teacher++;
      } else if (req.url.includes('/subject')) {
        statistics[index].subject++;
      }
    }
  
    next(); 
};

module.exports = userMDL;