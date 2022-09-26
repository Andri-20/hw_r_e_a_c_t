import joi from "joi";

let userValidators = joi.object({
    id:joi.number().min(11).max(1000).integer().required(),
    name:joi.string().regex(/^[a-zA-ZА-яёЁіІїЇҐґєЄ]{3,20}$/).required().messages({
        'string.pattern.base':'Тільки букви мінімум 3 символи,максимум 20 символів'
    }),
    username:joi.string().regex(/^[a-zA-ZА-яёЁіІїЇҐґєЄ]{3,20}$/).required().messages({
        'string.pattern.base':'Тільки букви мінімум 3 символи,максимум 20 символів'
    }),
    phone:joi.alternatives([joi.string(),joi.number()])
})
export {userValidators}