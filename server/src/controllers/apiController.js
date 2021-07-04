const logger = require('../config/logger');
const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');
const Like = require('../models/Like');

const createPost = async (req) => {
  try {
    const newPost = {
      message: req.body.message,
      author_id: req.user.id,
    };

    const post = await Post.create(newPost);

    logger.debug(JSON.stringify(post));
    logger.info('Post created');
  } catch (err) {
    logger.error(`Error creating post: ${err}`);
  }
};

const readPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          required: true,
        },
      ],
      order: [['createdAt', 'DESC']],
    });

    logger.debug(JSON.stringify(posts));
    res.json(posts);
    logger.info('Posts read');
  } catch (err) {
    logger.error(`Error reading posts: ${err}`);
  }
};

const sendCurrentUser = (req, res) => {
  const { user } = req;

  logger.debug(JSON.stringify(user));
  res.json(user);
};

const createComment = async (req) => {
  try {
    const newComment = {
      body: req.body.body,
      post_id: req.body.postId,
      creator_id: req.user.id,
    };

    const comment = await Comment.create(newComment);

    logger.debug(JSON.stringify(comment));
    logger.info('Comment created');
  } catch (err) {
    logger.error(`Error creating comment: ${err}`);
  }
};

const readPostById = async (req, res) => {
  try {
    const postId = Number(req.params.postId);

    const post = await Post.findByPk(postId, {
      include: [
        {
          model: User,
          required: true,
        },
        {
          model: Comment,
          required: false,
          include: [
            {
              model: User,
              required: true,
            },
          ],
        },
      ],
    });

    res.json(post);

    logger.debug(JSON.stringify(post));
    logger.info('Post read');
  } catch (err) {
    logger.error(`Error reading post: ${err}`);
  }
};

const readUserByUsername = async (req, res) => {
  try {
    const { searchedUsername } = req.params;

    const user = await User.findOne({ where: { username: searchedUsername } });

    logger.debug(JSON.stringify(user));

    if (user === null) {
      res.status(404).json({ message: 'User not found' });

      logger.info('User not found');
    } else {
      res.json(user);

      logger.info('User found');
    }
  } catch (err) {
    logger.error(`Error finding user: ${err}`);
  }
};

const readPostsByAuthorId = async (req, res) => {
  try {
    const { authorId } = req.params;

    const posts = await Post.findAll({
      where: { author_id: authorId },
      include: [
        {
          model: User,
          required: true,
        },
      ],
      order: [['createdAt', 'DESC']],
    });

    res.json(posts);

    logger.debug(JSON.stringify(posts));
    logger.info('Posts read');
  } catch (err) {
    logger.error(`Error reading posts: ${err}`);
  }
};

const findUserIdFromUsername = async (req, res) => {
  const { username } = req.params;

  const user = await User.findOne({
    where: { username },
  });

  res.json({ authorId: user.id });
};

const readCommentsByCreatorId = async (req, res) => {
  try {
    const { creatorId } = req.params;

    const comments = await Comment.findAll({
      where: { creator_id: creatorId },
      include: [
        {
          model: Post,
          required: true,
          include: [
            {
              model: User,
              required: true,
            },
          ],
        },
        {
          model: User,
          required: true,
        },
      ],
      order: [['createdAt', 'DESC']],
    });

    res.json(comments);

    logger.debug(JSON.stringify(comments));
    logger.info('Comments read');
  } catch (err) {
    logger.error(`Error reading comments: ${err}`);
  }
};

const editUserSettings = async (req) => {
  try {
    await User.update(
      { display_name: req.body.displayName, bio: req.body.bio },
      { where: { id: req.user.id } }
    );

    logger.info('Settings updated');
  } catch (err) {
    logger.error(`Error updating settings: ${err}`);
  }
};

const likePost = async (req) => {
  try {
    const newLike = {
      user_id: req.user.id,
      post_id: req.body.postId,
    };

    const like = await Like.create(newLike);

    logger.debug(JSON.stringify(like));
    logger.info('Like created');
  } catch (err) {
    logger.error(`Error creating Like: ${err}`);
  }
};

module.exports = {
  createPost,
  readPosts,
  sendCurrentUser,
  createComment,
  readPostById,
  readUserByUsername,
  readPostsByAuthorId,
  findUserIdFromUsername,
  readCommentsByCreatorId,
  editUserSettings,
  likePost,
};
