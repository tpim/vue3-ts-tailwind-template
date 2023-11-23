import { post } from "../common/http/request"

export default class Config {
  static async appbase(data: any) {
    const res = await post("/config/appbase", data)
    return res
  }
}
