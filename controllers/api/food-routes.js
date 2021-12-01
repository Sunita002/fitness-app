const router = require('express').Router();
const sequelize = require('../../config/connection')

const {Food} = require('../../models');

router.post('/', (req,res)=>{
    console.log(req.body)
    Food.create({
        food_name: req.body.foodName,
        calories: req.body.calories
    })

    res.send('route is working')
})

//updateroute
//router.put//
router.put('/', (req, res) => {
    Food.update({
        food_name: req.body.foodName,
        calories: req.body.calories
    })

      res.send('route is updating')
      })


module.exports=router