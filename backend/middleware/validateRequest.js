const {param,body,validationResult} = require('express-validator')
 
 const checkErrors=(req,res,next)=>{
    const errors=validationResult(req);
    const errorList = errors.array().map(err=> err.msg)
    return (errors.isEmpty()) ? next() : next(errorList)
 }

 const checkId = [param('id').isMongoId().withMessage('Is not a valid Mongo ID'),
 checkErrors]
 const checkAddDuck = [
    body('name', ' No Name was sent')
    .trim()
    .isAlpha()
    .withMessage('Name must contain only characters')
    .isLength({max: 20})
    .withMessage('Name must be max 20 char long'),
    body('imageUrl', 'No image url was send' )
    .isURL()
    .withMessage('Image must be a valud URL'),

    body('quote')
    .optional({falsy: true})
    .isLength({min: 15, max: 50})
    .withMessage('Qutes must be min 15 and max 50 char long'),

    body('owner')
    .isAlpha()
    .withMessage('Owner must contain only characters')
]

 const checkUpdateDuck = [
    body('name', ' No Name was sent')
    .optional({values: 'falsy'})
    .trim()
    .isAlpha()
    .withMessage('Name must contain only characters')
    .isLength({max: 20})
    .withMessage('Name must be max 20 char long'),

    body('imageUrl', 'No image url was send' )
    .optional({values: 'falsy'})
    .isURL()
    .withMessage('Image must be a valud URL'),

    body('quote')
    .optional({values: 'falsy'})
    .isLength({min: 15, max: 50})
    .withMessage('Qutes must be min 15 and max 50 char long'),

    body('owner',)
    .optional({values: 'falsy'})
    .isAlpha()
    .withMessage('Owner must contain only characters')
]
 module.exports = {checkId, checkAddDuck, checkUpdateDuck}