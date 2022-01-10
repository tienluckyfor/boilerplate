import UserResolver from './UserResolver'
import _ from 'lodash'

const resolvers = _.merge({}, UserResolver)

module.exports = { resolvers }
