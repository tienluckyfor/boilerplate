'use strict';
const {Model} = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const env = require("config/env")

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }

        async generateAuthToken() {
            const user = this
            const token = jwt.sign({user: user.toJSON()}, env.JWT_SECRET)
            user.token = token
            await user.save()
            return token
        }

        static async findByCredentials(phone, password) {
            const user = await User.findOne({where: {phone: phone}})
            if (!user) {
                throw new Error('User does not exist')
            }
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                throw new Error('Username and password mismatch!')
            }
            return user
        }
    }

    User.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        password: DataTypes.STRING,
        token: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'User',
    });

    User.prototype.toJSON = function () {
        let values = Object.assign({}, this.get());
        delete values.password;
        return values;
    }
    return User;
};