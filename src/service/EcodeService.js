import { axiosPrivate } from "../api/axios";

export class EcodeService {
  async getAll() {
    const res = await axiosPrivate.get("educator-code/all");
    return res.data;
  }
  async create(tag) {
    const res = await axiosPrivate.post("educator-code/create", tag);
    return res.data;
  }
  async update(tag) {
    const res = await axiosPrivate.post("educator-code/update", tag);
    return res.data;
  }
  async search(name) {
    const res = await axiosPrivate.get("educator-code/get/" + name);
    return res.data;
  }
  async delete(ecode) {
    const res = await axiosPrivate.delete("educator-code/delete", ecode);
    return res.data;
  }
}
