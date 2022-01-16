# setup express
npm install express

# middleware
npm install cors
// src/index.js
```
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    req.me = users[1];
    const date = Date.parse(req.body.date);
    const count = Number(req.body.count);
    next();
});

app.post('/messages', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.me.id,
  };
  messages[id] = message;
  return res.send(message);
});
```

curl -X POST -H "Content-Type:application/json" http://localhost:3000/messages -d '{"text":"Hi again, World"}'
curl http://localhost:3000/messages

# models
mkdir models; cd models; vi index.js
// src/models/index.js
```
let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
};
export default {
  users,
};
```
// src/index.js
```
import models from './models';
app.use((req, res, next) => {
    req.context = {
        models,
        me: models.users[1],
    };
    next();
});
app.get('/session', (req, res) => {
    return res.send(req.context.models.users[req.context.me.id]);
});
```

# routes
mkdir routes; cd routes; touch index.js session.js  user.js message.js
// src/routes/index.js
```
import session from './session';
export default {
    session,
};
```
// src/routes/session.js
```
import { Router } from 'express';
const router = Router();
router.get('/', (req, res) => {
    return res.send(req.context.models.users[req.context.me.id]);
});
export default router;
```

