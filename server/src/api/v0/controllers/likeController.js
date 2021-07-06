const logger = require('../../../config/logger');
const Post = require('../models/Post');
const User = require('../models/User');
const Like = require('../models/Like');

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

const unLikePost = async (req) => {
  try {
    const unLike = {
      user_id: req.user.id,
      post_id: req.body.postId,
    };

    const like = await Like.destroy({ where: unLike });

    logger.debug(JSON.stringify(like));
    logger.info('Like removed');
  } catch (err) {
    logger.error(`Error removing Like: ${err}`);
  }
};

const checkIfUserLikedPost = async (req, res) => {
  const userId = req.user.id;
  const { postId } = req.params;

  const like = await Like.findOne({
    where: { user_id: userId, post_id: postId },
  });

  if (like === null) {
    res.json({ liked: false });
  } else {
    res.json({ liked: true });
  }
};

const readLikesByCreatorId = async (req, res) => {
  try {
    const { creatorId } = req.params;

    const likes = await Like.findAll({
      where: { user_id: creatorId },
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
      ],
    });

    res.json(likes);

    logger.debug(JSON.stringify(likes));
    logger.info('Likes read');
  } catch (err) {
    logger.error(`Error reading likes: ${err}`);
  }
};

module.exports = {
  likePost,
  unLikePost,
  checkIfUserLikedPost,
  readLikesByCreatorId,
};
