import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  // Required fields
  title: { type: String, required: true, trim: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  team: [{
    id: String,
    name: String,
    email: String,
    avatar: String
  }],
  progress: { type: Number, default: 0 },
  color: { type: String, required: true },
  daysRemaining: { type: Number, default: 7 },
  categoryId: { type: String, default: 'default' },
  
  // Optional fields
  description: { type: String, trim: true, default: '' },
  completedAt: { type: Date },
  
  // For scheduled tasks
  scheduled: { type: Boolean, default: false },
  hasCall: { type: Boolean },
  time: { type: String },
  // Reference to user
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

export const Task = mongoose.model('Task', taskSchema);
