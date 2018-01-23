import {Module, RequestMethod} from "@nestjs/common"
import {DatabaseModule} from "../database/database.module"
import {PrototypesController} from "./prototype.controller"
import {PrototypesSevice} from "./prototype.sevice"
import {prototypeProviders} from "./prototype.providers"
import {MiddlewaresConsumer} from "@nestjs/common/interfaces/middlewares"

const routes: any[] = [
  {path: '/prototypes', method: RequestMethod.ALL},
];

@Module({
  modules: [DatabaseModule],
  controllers: [PrototypesController],
  components: [
    PrototypesSevice,
    ...prototypeProviders,
  ],
})

export class PrototypesModule {
  configure(consumer: MiddlewaresConsumer):void {

  }
}
