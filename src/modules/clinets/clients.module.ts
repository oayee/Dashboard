import {Module, RequestMethod} from "@nestjs/common"
import {DatabaseModule} from "../database/database.module"
import {ClientsController} from "./clients.controller"
import {ClientsSevice} from "./clients.sevice"
import {clientProviders} from "./clients.providers"
import {MiddlewaresConsumer} from "@nestjs/common/interfaces/middlewares"

const routes: any[] = [
  {path: '/clients', method: RequestMethod.ALL},
];

@Module({
  modules: [DatabaseModule],
  controllers: [ClientsController],
  components: [
    ClientsSevice,
    ...clientProviders,
  ],
})

export class ClientsModule {
  configure(consumer: MiddlewaresConsumer):void {

  }
}
