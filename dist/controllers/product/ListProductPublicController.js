"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProductPublicController = void 0;
const ListProductPublicService_1 = require("../../services/product/ListProductPublicService");
class ListProductPublicController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { categoryName } = req.params;
            const listProductPublicService = new ListProductPublicService_1.ListProductPublicService();
            try {
                const list = yield listProductPublicService.execute({ categoryName });
                return res.json(list);
            }
            catch (error) {
                return res.status(400).json({ error: error.message });
            }
        });
    }
}
exports.ListProductPublicController = ListProductPublicController;
