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
}
