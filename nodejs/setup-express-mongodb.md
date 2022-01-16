# setup setup-mongodb-express
npm install mongoose --save

// src/models/user.js
```
import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
        },
    },
    { timestamps: true },
);
userSchema.statics.findByLogin = async function (login) {
    let user = await this.findOne({
        username: login,
    });
    if (!user) {
        user = await this.findOne({ email: login });
    }
    return user;
};
userSchema.pre('remove', function (next) {
    this.model('Message').deleteMany({ user: this._id }, next);
});
const User = mongoose.model('User', userSchema);
export default User;
```

// src/models/message.js
```
import mongoose from 'mongoose';
const messageSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true,
        },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
    { timestamps: true },
);
const Message = mongoose.model('Message', messageSchema);
export default Message;
```

// src/models/index.js
```
import mongoose from 'mongoose';
import User from './user';
import Message from './message';
const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};
const models = { User, Message };
export { connectDb };
export default models;
```

// .env
DATABASE_URL=mongodb://localhost:27017/node-express-mongodb-server

// src/index.js
```
import models, { connectDb } from './models';

const eraseDatabaseOnSync = true;
connectDb().then(async () => {
    if (eraseDatabaseOnSync) {
        await Promise.all([
            models.User.deleteMany({}),
            models.Message.deleteMany({}),
        ]);
        createUsersWithMessages();
    }
    app.listen(process.env.PORT, () =>
        console.log(`Example app listening on port ${process.env.PORT}!`),
    );
});

const createUsersWithMessages = async () => {
    const user1 = new models.User({
        username: 'rwieruch1',
    });
    const user2 = new models.User({
        username: 'ddavids',
    });
    const message1 = new models.Message({
        text: 'Published the Road to learn React',
        user: user1.id,
    });
    const message2 = new models.Message({
        text: 'Happy to release ...',
        user: user2.id,
    });
    const message3 = new models.Message({
        text: 'Published a complete ...',
        user: user2.id,
    });
    await message1.save();
    await message2.save();
    await message3.save();
    await user1.save();
    await user2.save();
};
```