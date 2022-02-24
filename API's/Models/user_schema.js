import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const userSchema = mongoose.Schema({
    user_name: String,
    user_email: String,
    user_location: String,
    user_type: String
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');
const user = mongoose.model('user', userSchema);
export default user;
