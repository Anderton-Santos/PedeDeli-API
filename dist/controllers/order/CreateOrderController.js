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
exports.CreateOrderController = void 0;
const CreateOrderService_1 = require("../../services/order/CreateOrderService");
class CreateOrderController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, delivery_type, delivery_date, observation, items } = req.body;
            const createOrderController = new CreateOrderService_1.CreateOrderService();
            const order = yield createOrderController.execute({
                name,
                delivery_type,
                delivery_date,
                observation,
                items
            });
            res.json(order);
        });
    }
}
exports.CreateOrderController = CreateOrderController;
