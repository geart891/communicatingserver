import { Request, Response } from "express";
import { SurveyModel, ClientSurveyModel } from "../models/Survey";
import { Types } from "mongoose";
import { UserModel } from "../models/User";
export default class SurveyController {
  static async clearDB(req: Request, res: Response) {
    try {
      await SurveyModel.remove({});
      res.status(200).send({
        code: 0,
        message: "success",
      });
    } catch (e) {
      res.status(500).send({
        code: -4,
        message: e.data,
      });
    }
  }
  static async createUser(rq: Request, rs: Response) {
    try {
      const newUser = {
        username: "danieltest123",
        password: "danieltest123",
        email: "abc@123.com",
        phone: "0909090909",
      };
      const oldUser = await UserModel.findOne({ username: newUser.username });
      if (oldUser) return rs.send(oldUser);
      const user = await UserModel.create(newUser);
      rs.status(200).send({
        code: 0,
        message: "Successful Create New User",
        data: user,
      });
    } catch (e) {
      rs.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }
  static async authenticateUser(rq: Request, rs: Response) {
    try {
      const foundUser: any = await UserModel.findOne({
        username: rq.body.username,
      });
      if (!foundUser) {
        return rs.status(200).send({
          code: 0,
          message: "Authentication Failed",
          data: "LOGIN_FAILED",
        });
      }
      if (foundUser.password !== rq.body.password) {
        return rs.status(200).send({
          code: 0,
          message: "Wrong password",
          data: "LOGIN_FAILED",
        });
      }
      const user = {
        id: foundUser._id,
        username: foundUser.username,
      };
      rs.status(200).send({
        user,
        code: 0,
        message: "Successfully Logged In",
        data: "LOGIN_SUCCESS",
      });
    } catch (e) {
      rs.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }

  static async getAllRecentForms(rq: Request, rs: Response) {
    try {
      const forms = await SurveyModel.find({});
      const strippedRecentForms = forms
        .filter(e => !e.isDeleted)
        .map((e: any) => ({
          title: e.title,
          id: e._id,
          completed: e.completed,
          author: e.author.username,
          description: e.description,
          createdDate: e._id.getTimestamp(),
        }));
      rs.status(200).send({
        code: 0,
        message: "Successfully Fetched Recent Forms",
        data: strippedRecentForms,
      });
    } catch (e) {
      rs.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }

  static async removeFormById(rq: Request, rs: Response) {
    try {
      const doc: any = await SurveyModel.findByIdAndUpdate(rq.params.formId, {
        isDeleted: true,
      });
      if (!doc) throw new Error("Form not Found");
      rs.status(200).send({
        code: 0,
        message: `Successfully Remove Form ${doc._id}`,
      });
    } catch (e) {
      rs.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }

  static async getAllSurveyForms(req: Request, res: Response) {
    try {
      const surveyForms = await SurveyModel.find({});
      res.status(200).send({
        code: 0,
        data: surveyForms,
      });
    } catch (e) {
      res.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }

  static async createSurveyForm(req: Request, res: Response) {
    try {
      const resSurvey = await SurveyModel.create(req.body);
      res.status(200).send({
        code: 0,
        message: "Successful Create New Survey",
        data: resSurvey._id,
      });
    } catch (e) {
      res.status(500).send({
        code: 1,
        message: e.message,
      });
    }
  }

  static async getSurveyFormById(req: Request, res: Response) {
    try {
      const check = Types.ObjectId.isValid(req.params.formId);
      if (!check) {
        return res.status(200).send({
          code: 0,
          message: "Please Create A New Form",
          data: null,
        });
      }
      const form = await SurveyModel.findById(req.params.formId);
      if (!form) {
        res.status(200).send({
          code: -1,
          message: "Survey not found",
        });
      } else {
        res.status(200).send({
          code: 0,
          message: "Successfully Fetched Survey Form",
          data: form,
        });
      }
    } catch (e) {
      res.status(500).send({
        code: -4,
        message: e.data,
      });
    }
  }

  static async updateSurveyForm(req: Request, res: Response) {
    try {
      await SurveyModel.findByIdAndUpdate(req.params.formId, {
        ...req.body,
        lastUpdated: new Date().toISOString(),
      });
      res.status(200).send({
        code: 0,
        message: "Update Survey Form Success",
        data: req.params.formId,
      });
    } catch (e) {
      res.status(200).send({
        code: -1,
        message: e.message,
      });
    }
  }

  // TEST
  static async getAllSubmittedClientSurveyForms(req: Request, res: Response) {
    try {
      const surveys = await ClientSurveyModel.find({});
      res.status(200).send({
        code: 0,
        data: surveys,
      });
    } catch (e) {
      res.status(500).send({
        code: -1,
        data: e.message,
      });
    }
  }

  static async clearAllClientForms(req: Request, res: Response) {
    try {
      await ClientSurveyModel.remove({});
      res.status(200).send({
        code: 0,
        message: "Success",
      });
    } catch (e) {
      res.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }
  // END OF TEST
  static async submitClientSurvey(req: Request, res: Response) {
    try {
      if (req.method === "POST") {
        console.log(req.body)
        const newClientSurvey = await ClientSurveyModel.create(req.body);
        // if (!newClientSurvey) throw new Error("Cannot create new Survey");
        return res.status(200).send({
          code: 0,
          message: "Successfully Created Client Survey",
          data: newClientSurvey,
        });
      }
      if (req.method === "PUT") {
        const { clientId, clientSurvey } = req.body;
        console.log(req.body)
        const updatedClientSurvey = await ClientSurveyModel.findByIdAndUpdate(
          clientId,
          clientSurvey,
          { new: true, upsert: true },
        );
        // if (!updatedClientSurvey) throw new Error("Cannot edit Survey");
        return res.status(200).send({
          code: 0,
          message: "Successfully Edited Client Survey",
          data: updatedClientSurvey,
        });
      }
      res.send("Yo, nice find!");
    } catch (e) {
      res.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }
  static async getClientSurveyFormById(req: Request, res: Response) {
    try {
      const foundClientSurvey = await ClientSurveyModel.findOne({
        _id: req.params.clientId,
      });
      if (!foundClientSurvey) return;
      res.status(200).send({
        code: 0,
        message: "Successfully found client survey.",
        data: foundClientSurvey,
      });
    } catch (e) {
      res.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }
}
