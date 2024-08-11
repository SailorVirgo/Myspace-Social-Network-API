const mongoose = require('mongoose');
const { User, Thought } = require('./models');

// Sample users
const users = [
  {
    username: 'sample123',
    email: 'sample123@example.com',
    friends: [],
    thoughts: []
  },
  {
    username: 'ericC',
    email: 'ericC@example.com',
    friends: [],
    thoughts: []
  },
  {
    username: 'spinarak',
    email: 'spinarak@example.com',
    friends: [],
    thoughts: []
  }
];

// Sample thoughts
const thoughts = [
  {
    thoughtText: 'This is my first thought!',
    username: 'spinarak',
    reactions: []
  },
  {
    thoughtText: 'Loving this social network!',
    username: 'ericC',
    reactions: []
  },
  {
    thoughtText: 'Just posting a thought here.',
    username: 'sample123',
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
