"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const post_1 = __importDefault(require("../controller/post"));
const router = express_1.default.Router();
router.get('/posts', post_1.default.getPosts);
router.get('/posts/:id', post_1.default.getPost);
router.put('/posts/:id', post_1.default.updatePost);
router.delete('/posts/:id', post_1.default.deletePost);
router.post('/posts', post_1.default.addPost);
module.exports = router;
