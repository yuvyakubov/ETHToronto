import { ok } from "assert";
import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Patch,
  Delete,
  Query,
  Route,
  SuccessResponse,
  Request
} from "tsoa";

@Route("route")
export class FarmController extends Controller {
  @Get("{id}")
  @SuccessResponse('200, OK')
  public async getTesst(@Path() id: number): Promise<string> {
    console.log(id)
    return "got ya"
  }

  @Post()
  @SuccessResponse('200, OK')
  // post endpoint that takes form data as request body, passes it to smart contract method.
  public async updateOnChainArray(@Body() requestBody: FormData) {
      // extract form data, for example..
      // name: String = requestBody.get("name");
      // age: number = requestBody.get("age);

      // pass data to smart contract method to update the chain, like..
      // contract.methods.updateOnChainArray(name, age).call();
  }
}
