// HEALTH CHECK ENDPOINT
// ======================

module.exports = async (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    service: 'Telnyx AI Agent Webhook',
    timestamp: new Date().toISOString()
  });
};
