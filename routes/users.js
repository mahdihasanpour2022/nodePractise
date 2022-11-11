
const router = require("express").Router();
const { default: axios } = require("axios");
const res =  require("express/lib/response");
const { userModel } = require("../models/user");

router.get("/", async (req, res, next) => {
  try {
    const users = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.data);
    return res.json(users);
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const users = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.data);
    const user = users.find((item) => item.id == id);
    if (!user) throw { status: 404, message: "user not found" };
    return res.json(user);
  } catch (error) {
    next(error);
  }
});

router.post('/create' , async (req ,res, next)=>{
  try{
      const {firstName , lastName , age , email} = req.body;
      const userCreateResult = await userModel.create({firstName , lastName , age , email});
      if(userCreateResult){
         return res.json(userCreateResult);
      }
      throw {status : 404 , message : 'users not found'};
  }catch(error){
      next(error);
  }
})

module.exports = router;
