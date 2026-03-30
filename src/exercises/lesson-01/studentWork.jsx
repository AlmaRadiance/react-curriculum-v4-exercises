//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const myName = 'Alma';
  const age = 31;
  const hobbies = ['Drawing', 'Traveling', 'Reading'];

  return (
    <div>
      {/* add JSX here */}
      <h1>About me</h1>
      <p>
        {' '}
        Hi! I am {myName} and I am {age} years old. I am currently learning
        React and really enjoying it. I already have experience with HTML, CSS,
        and JavaScript and I am excited to add React to my skill set. I am
        looking forward to growing as a developer!{' '}
      </p>
      <p>My hobbies are:</p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
