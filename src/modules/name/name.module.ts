import {Module} from "@nestjs/common";
import {DatabaseModule} from "../database/database.module";
import {NameController} from "./name.controller";
import {NameService} from "./name.service";
import {nameProviders} from "./name.provider";

@Module({
  modules: [DatabaseModule],
  controllers: [NameController],
  components: [
    NameService,
    ...nameProviders,
  ],
})
export class NameModule {}
