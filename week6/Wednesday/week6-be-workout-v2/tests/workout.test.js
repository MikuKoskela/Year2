const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const User = require("../models/userModel");
const Workout = require("../models/workoutModel");
const workouts = require("./data/workouts.js");

let token = null;

beforeAll(async () => {
  await User.deleteMany({});
  const result = await api
    .post("/api/user/signup")
    .send({ email: "mattiv@matti.fi", password: "R3g5T7#gh" });
  token = result.body.token;
});

describe("when there is initially some workouts saved", () => {
  beforeEach(async () => {
    await Workout.deleteMany({});
    await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(workouts[0])
      .send(workouts[1]);
  });

  it("Workouts are returned as json", async () => {
    await api
      .get("/api/workouts")
      .set("Authorization", "bearer " + token)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  it("New workout added successfully", async () => {
    const newWorkout = {
      title: "testworkout",
      reps: 10,
      load: 100,
    };  

    await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(newWorkout)
      .expect(201);

  });

it("Workout can be deleted", async () => {
  
  const newWorkout = {
    title: "Workout to delete",
    reps: 12,
    load: 80,
  };
  
  const response = await api
    .post("/api/workouts")
    .set("Authorization", "bearer " + token)
    .send(newWorkout)
    .expect(201)
  
  const workoutId = response.body._id; 

   await api
      .delete(`/api/workouts/${workoutId}`)
      .set("Authorization", "bearer " + token)
      .expect(200)
      .expect("Content-Type", /application\/json/);

});

  it("Can read a single workout by ID", async () => {
  // First, create a workout
  const newWorkout = {
    title: "Single workout",
    reps: 15,
    load: 90,
  };

  const response = await api
    .post("/api/workouts")
    .set("Authorization", "bearer " + token)
    .send(newWorkout)
    .expect(201);

  const workoutId = response.body._id;

  // Now fetch that workout by ID
  const singleWorkout = await api
    .get(`/api/workouts/${workoutId}`)
    .set("Authorization", "bearer " + token)
    .expect(200)
    .expect("Content-Type", /application\/json/);

  expect(singleWorkout.body.title).toBe("Single workout");
});

it("Can update a workout by ID", async () => {
  // First, create a workout
  const newWorkout = {
    title: "Workout to update",
    reps: 8,
    load: 70,
  };

  const response = await api
    .post("/api/workouts")
    .set("Authorization", "bearer " + token)
    .send(newWorkout)
    .expect(201);

  const workoutId = response.body._id;

  // Define updated data
  const updatedWorkout = {
    title: "Updated workout",
    reps: 10,
    load: 75,
  };
  
  console.log("Workout ID:", workoutId);
console.log("Is valid ObjectId:", mongoose.Types.ObjectId.isValid(workoutId));

  // Send update request
  const updateResponse = await api
    .patch(`/api/workouts/${workoutId}`)
    .set("Authorization", "bearer " + token)
    .send(updatedWorkout)
    .expect(200)

  expect(updateResponse.body.title).toBe("Updated workout");
  expect(updateResponse.body.reps).toBe(10);
});

});
    
afterAll(() => {
  mongoose.connection.close();
});
