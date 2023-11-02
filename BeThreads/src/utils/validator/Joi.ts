// import { strict } from "assert"
import * as joi from "joi"

export const CreateThreadSchema = joi.object({
    content: joi.string(),
    image: joi.string(),
    users: joi.number()
})

export const UpdateThreadSchema = joi.object({
    content: joi.string(),
    image: joi.string(),
    users: joi.string()
})

export const createUserSchema = joi.object({
    userName: joi.string().required(),
    fullName: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
    profile_picture: joi.string().required(),
    profile_desc: joi.string().required()
})

export const updateUserSchema = joi.object({
    userName: joi.string().required(),
    fullName: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
    profile_picture: joi.string().required(),
    profile_desc: joi.string().required()
})

export const createReplySchema = joi.object({
    user: joi.number().required(),
    thread: joi.number().required(),
    image: joi.string().required(),
    content: joi.string().required(),
})


export const likesSchema = joi.object({
    users: joi.number().required(),
    threads: joi.number().required()
})

export const followerSchema = joi.object({
    usersFollowing: joi.number()
})

export const followingSchema = joi.object({
    usersFollower: joi.number()
})

import * as Joi from "joi";

export const registerSchema = Joi.object({
    userName: joi.string().required(),
    fullName: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
    profile_picture: joi.string(),
    profile_desc: joi.string()
});

export const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});