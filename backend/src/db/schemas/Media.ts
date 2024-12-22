// THe idea for storing metadata is using a S3 bucket. To store by industry standard
// I am going to follow this structure
// {
//     "_id": "64f6d5e8c2a839001c3a49c8",
//     "name": "profile-picture.jpg",
//     "url": "https://my-bucket.s3.amazonaws.com/uploads/profile-picture.jpg",
//     "contentType": "image/jpeg",
//     "size": 1048576,
//     "createdAt": "2024-12-15T10:00:00.000Z",
//     "userId": "123456789",
//     "tags": ["profile", "user"]
// }

import mongoose from "mongoose";

const MediaSchema = new mongoose.Schema({});

const Media = new mongoose.Model("Media", MediaSchema);

export default Media;
