import * as joi from "joi"

export const CreateThreadSchema = joi.object({
    content: joi.string(),
    image: joi.string(),
    user: joi.string()
})

export const UpdateThreadSchema = joi.object({
    content: joi.string(),
    image: joi.string(),
    user: joi.string()
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