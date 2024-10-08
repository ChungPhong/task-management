const mongoose = require("mongoose");
const customer = new mongoose.Schema(
  {
    email: String,
    otp: String,
    expireAt: {
      type: Date,
      expires: 0,
    },
  },
  {
    timestamps: true,
  }
);
const ForgotPassword = mongoose.model(
  "ForgotPassword",
  customer,
  "forgot-password"
);

module.exports = ForgotPassword;
