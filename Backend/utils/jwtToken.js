export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  const cookieExpireDays = parseInt(process.env.COOKIE_EXPIRE) || 5;

const options = {
  expires: new Date(Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000),
  httpOnly: true,
};


  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};