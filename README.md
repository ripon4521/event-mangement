<div>
 <h1>This Website Feauters</h1>
 </div>

- Event Listings: A social events website should have a well-organized and searchable event listing page. Users should be able to browse and filter events by date, location, category, and more. Each event listing should include essential information such as date, time, venue, and a brief description.
- User Profiles and RSVPs: Users should have the option to create profiles on the website, which can make it easier to RSVP for events, track attendance history, and receive personalized event recommendations. RSVP functionality is crucial for event organizers to gauge expected attendance.
- Event Reviews and Ratings: Allow attendees to leave reviews and ratings for events they've attended. This feature helps future attendees make informed decisions and provides valuable feedback to event organizers for improvement.
- Event Recommendations: Implement a recommendation system that suggests events to users based on their past event attendance, interests, and user behavior. Personalized event suggestions can enhance user engagement and discovery.
- Event Analytics and Reporting: Provide event organizers with detailed analytics and reporting tools to track event performance, including attendance, ticket sales, user engagement, and more. These insights can help organizers make data-driven decisions for future events.


<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>A variable  is declared, but it is never assigned a value. So, Answar is "A"</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The second parameter passed to sum is a string "2", not a numeric value. Frist pramater pased is a number, So result is  "12"</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>This reassignment only affects the info object, and it doesn't modify the food array. when I console.log(food), it prints the original food array</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>When I call sayHi() without providing a name argument, the name variable inside the function is undefined</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i> Checks each element, and if it's a truthy value (i.e., not equal to 0), it increments the count variable by 1. Since there are three truthy values (1, 2, and 3) in the nums array, the count variable becomes 3, and that's what gets logged to the console.</i>

</p>
</details>