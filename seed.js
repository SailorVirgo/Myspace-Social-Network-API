const mongoose = require('mongoose');
const { User, Thought } = require('./models');

// Sample users
const users = [
  {
    username: 'johnDoe',
    email: 'johndoe@example.com',
    friends: [],
    thoughts: []
  },
  {
    username: 'janeDoe',
    email: 'janedoe@example.com',
    friends: [],
    thoughts: []
  },
  {
    username: 'coolUser123',
    email: 'cooluser123@example.com',
    friends: [],
    thoughts: []
  }
];

// Sample thoughts
const thoughts = [
  {
    thoughtText: 'This is my first thought!',
    username: 'johnDoe',
    reactions: []
  },
  {
    thoughtText: 'Loving this social network!',
    username: 'janeDoe',
    reactions: []
  },
  {
    thoughtText: 'Just posting a thought here.',
    username: 'coolUser123',
    reactions: []
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/socialnetwork', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Insert users
    const createdUsers = await User.insertMany(users);

    // Insert thoughts and associate them with users
    for (let i = 0; i < thoughts.length; i++) {
      const thought = await Thought.create(thoughts[i]);
      await User.findOneAndUpdate(
        { username: thought.username },
        { $push: { thoughts: thought._id } }
      );
    }

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
