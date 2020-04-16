const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


// GET ALL THE POSTS
router.get('/', async (req,res) => {
 //   res.send("We are on post");
    try{
      const posts = await Post.find();
      res.json(posts);
    }catch(err){
      res.json({ message: err });
    }
 });
// GET ONE POST
 router.get('/:postId', async (req,res) => {
 //   res.send("We are on especifico post");
 //  console.log(req.params.postId);
 try{
   const posts = await Post.findById(req.params.postId);
   res.json(posts);
 }catch(err){
   res.json({ message: err });
 }
 });

 // DELETE A POST
 router.delete('/:postId', async (req,res) => {
   try{
     const removedPost = await Post.deleteOne({_id: req.params.postId});
     res.json(removedPost);
   }catch(err){
     res.json({ message: err });
   }
   });

//UPDATE A POST title
router.patch('/:postId', async (req,res) => {
   try{
     const updatedPost = await Post.updateOne(
      {_id: req.params.postId}, 
      { $set: { title: req.body.title, 
        link: req.body.link, 
        description: req.body.description, 
        image: req.body.image } },

      );
     res.json(updatedPost);
   }catch(err){
     res.json({ message: err });
   }
   });


 // SUBMIT A POST
router.post('/', async (req,res) => {
 //   console.log(req.body);
 const post = new Post({
    title: req.body.title,
    link: req.body.link,
    description: req.body.description,
    image: req.body.image
 });

try{
 const savedPost = await post.save()
 res.json(savePost);
//    .then(data => {
//     res.json(data);   
//    })
//    .catch(err => {
//    res.json({message: err});   
//    });
} catch (err) {
   res.json({ message: err });
}
});

module.exports = router;