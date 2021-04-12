const dbConfig = {
    user: 'SCADA',
    password: 'SCADA',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'enarparc1mw',
    driver: "msnodesqlv8",
    port: 1433,
    options: {
      trustedConnection: true,
      enbleArithAort: true,
      instanceName: 'SQLEXPRESS'
    }
  }

  module.export = dbConfig;