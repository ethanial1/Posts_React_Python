import { Router } from "express";
import { getAllPosts } from "../request/request";

const route = Router()


// listar todos los post
route.get('/', getAllPosts)