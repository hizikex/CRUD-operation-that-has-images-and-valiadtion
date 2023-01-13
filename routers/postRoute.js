const express = require( 'express' );
const router = express.Router();
const { newPost, allPost, removePost, singlePost, updatePost } = require( '../controllers/postController' );
const imageUpload = require( '../helpers/multer' );

// router.post( '/posts', imageUpload, newPost );
router.route( '/posts' )
.post(imageUpload, newPost)
.get(allPost)

// routes requiring id
router.route( '/posts/:id' )
.delete(removePost)
    .get( singlePost )
.patch(imageUpload, updatePost)

module.exports = router;