***PrimeiroAPI_FatecMogi2023_1*** <br>

***Configurações de BD no arquivo ormconfig.json: *** <br>
  "type": "postgres",
   "host": "localhost",
   "port": 5432,
   "username": "postgres",
   "password": "123Fatec",
   "database": "newApp",

***Configurando CLI e testando a Conexão com o BD:*** <br>
 "typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"

***Criando Migrations*** <br>
yarn typeorm migration:create -n  ‘Nome da Migration’

***Executando  Migrations:*** <br>
yarn typeorm migrations:run

***Executando  Aplicação:*** <br>
yarn dev

