import { axiosPrivate } from "../api/axios";

export class TagService {
  async getAll() {
    const res = await axiosPrivate.get("tag/all");
    return res.data;
  }
  async create(tag) {
    const res = await axiosPrivate.post("tag/create", tag);
    return res.data;
  }
  async search(name) {
    const res = await axiosPrivate.post("tag/search/"+name);
    return res.data;
  }
}