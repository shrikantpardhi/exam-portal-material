import { axiosPrivate } from "../api/axios";

export class ExamService {
  async getAll() {
    const res = await axiosPrivate.get("exam/all");
    return res.data;
  }
  async getById(id) {
    const res = await axiosPrivate.get("exam/" + id);
    return res.data;
  }
  async getByCode(code) {
    const res = await axiosPrivate.get("exam/code/" + code);
    return res.data;
  }
  async getAllByCodes(codes) {
    //array of codes
    const res = await axiosPrivate.get("exam/codes");
    return res.data;
  }
  async getAllByTag(name) {
    const res = await axiosPrivate.get("exam/tag/" + name);
    return res.data;
  }
  async getAllByUserId(userId) {
    const res = await axiosPrivate.get("exam/user/" + userId);
    return res.data;
  }
  async getAllByUserIdAndCode(userId, codes) {
    const res = await axiosPrivate.get("exam/user/" + userId + "/codes");
    return res.data;
  }
  async create(exam) {
    const res = await axiosPrivate.post("exam/create", exam);
    return res.data;
  }
  async update(exam) {
    const res = await axiosPrivate.put("exam/update", exam);
    return res.data;
  }
  async delete(id) {
    const res = await axiosPrivate.delete("exam/"+id);
    return res.data;
  }
}
