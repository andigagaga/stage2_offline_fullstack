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