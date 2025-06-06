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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProductPublicService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListProductPublicService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ categoryName }) {
            const category = yield prisma_1.default.category.findFirst({
                where: {
                    name: {
                        equals: categoryName,
                        mode: "insensitive"
                    }
                }
            });
            if (!category) {
                throw new Error("Categoria não encontrada");
            }
            const products = yield prisma_1.default.product.findMany({
                where: {
                    category_id: category.id
                },
                orderBy: {
                    created_at: "desc"
                }
            });
            return products;
        });
    }
}
exports.ListProductPublicService = ListProductPublicService;
