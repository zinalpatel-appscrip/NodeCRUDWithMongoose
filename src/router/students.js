const express = require('express')
const StudentData = require('../models/students')
const router = new express.Router()


//Create
router.post('/students',async (req, res) => {
    try{
        //  console.log(req.body)
        const user = new StudentData(req.body)
        //  console.log(user)
        const createUser = await user.save()
        res.status(201).send("Data Inserted!!")
    }
    catch(e){
        res.status(400).send(e)
    }
    //  res.send("Hello World")
})

//Read
router.get("/students", async (req, res) => {
    try{
        const studentData = await StudentData.find()
        res.send(studentData)
    }catch(e){
        res.send(e)
    }
})

//Read Specific Data
router.get("/students/:name", async (req, res) => {
    try{
        // const _id = req.params.id
        const studentData = await StudentData.findOne({name: req.params.name})
        // console.log(studentData)

        if(!studentData){
            return res.status(404).send()
        }else{
            res.status(500).send(studentData)
        }
        
    }catch(e){
        res.send(e)
    }
})

//Update
router.patch("/students/:id", async (req, res) => {
    try{
        const _id = req.params.id
        const updateData = await StudentData.findByIdAndUpdate(_id,req.body,{
            new:true
        })
        res.send(updateData)
    }catch(e){
        res.status(404).send(e)
    }
})

//Delete
router.delete("/students/:id", async (req, res) => {
    try{
        // const _id = req.params.id
        const deleteData = await StudentData.findByIdAndDelete(req.params.id)

        if(!req.params.id){
            return res.status(400).send()
        }
        res.send(deleteData)
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router