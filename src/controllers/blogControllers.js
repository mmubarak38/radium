const BlogsModel = require("../models/blogModel")
const AuthorModel = require("../models/authorModel")
const mongoose = require("mongoose")


//2nd api to create blogs with the author id ref.
const createBlogs = async function (req, res) {
    try {
        let data = req.body
        let authorId = req.body.authorId;

        let Author = await AuthorModel.findById(data.authorId)
        if (!Author) {
            res.status(400).send({ status: false, message: "Author_Id not found" })
        }
        else {
            let createdBlog = await BlogsModel.create(data)
            res.status(201).send({ status: true, data: createdBlog })
        }
    } catch (error) {
        res.status(500).send({ status: false, mag: error });
    }
}



// (3rd api)that is my third api to get all blogs data and the some codition base data
const getBlogs = async function (req, res) {
    try {
      let data = await BlogsModel.find({ isDeleted: false, isPublished: true });
      let authorId = req.query.authorId;
      let category = req.query.category;
      let tag = req.query.tag;
      let subcategory = req.query.subcategory;
      if (data) {
        let check = await BlogsModel.find({ $or: [{ authorId: authorId }, { tags: [tag] }, { category: category }, { subcategory: [subcategory] }] });
        res.status(200).send({ status: true, data: check })
      }
      else {
        res.status(200).send({ status: true, data: data })
      }
    }
    catch (error) {
      res.status(404).send({ msg: "error-response-status" })
    }
  }


  // that is 4th api to update a blog details which is given in the req body
const updateBlogs = async function (req, res) {
    try {
      let blogId = req.params.blogId
      let newTitle = req.body.title
      let newBody = req.body.body
      let newTags = req.body.tags
      let newSubCategory = req.body.subCategory
      let today = Date();
      let data = await BlogsModel.find({ _id: blogId })
      if (data) {
        let data = await BlogsModel.findOneAndUpdate({ _id: blogId }, { title: newTitle, body: newBody, tags: newTags, subCategory: newSubCategory, isPublishedAt: today, isPublished: true }, { new: true })
        res.status(200).send({ msg: "successfully updated", data: data })
      }
      else {
        res.status(404).send({ msg: "data not found" })
  
      }
    }
    catch (error) {
      res.send(404).status({ status: false, msg: "error-response-status" })
    }
  }


  
//(5th api) that is my fifth api to delete a data which blog id is given
const deleteBlogByid = async function (req, res) {
    const blogId = req.params.blogId
    let currentDate = Date().toLocaleString();
    try {
      let check = await BlogsModel.findOne({ _id: blogId, isDeleted: false });
      if (check) {
        await BlogsModel.findOneAndUpdate({ _id: blogId }, { isDeleted: true, deletedAt: currentDate });
  
        res.status(200).send({ status: true, msg: "sucessfully deleted" });
      } else {
        res.status(404).send({ status: false, msg: "blog dosnt exist" });
      }
  
    } catch (error) {
      res.status(400).send({ status: false, msg: error });
    }
  }

module.exports.createBlogs = createBlogs;
module.exports.getBlogs = getBlogs;
module.exports.updateBlogs= updateBlogs;
module.exports.deleteBlogByid= deleteBlogByid;