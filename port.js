const bio =
  "Hello! My name is Michelle McCauley, a front end web developer with a passion for creating exceptional user experiences. As a recent online graduate with experience in HTML, CSS, JavaScript, React, and GitHub, I am excited to begin my career in web development. During my studies, I have worked on a variety of projects that have given me a solid      foundation in front end web development. I am a fast learner and eager to      continue expanding my skills and knowledge. I am constantly learning about      the latest trends and best practices in front end web development, and I      am always looking for ways to improve my skills. One of my strengths is my      ability to work collaboratively with clients and colleagues. I am a strong      communicator and understand the importance of keeping stakeholders      informed throughout the development process. I am committed to delivering      projects on time and to the highest quality standards. In addition to my      technical skills, I have a solid understanding of user experience (UX) and      user interface (UI) design principles. When it comes to problem-solving, I      am a natural troubleshooter and can identify issues quickly and find      creative solutions to overcome them. I understand the importance of being      adaptable and am comfortable working in fast-paced environments. If you      are looking for a front end web developer who is passionate about creating      exceptional user experiences, I would be delighted to discuss how I can      contribute to your company's success.";

// Split the bio into an array of words
const words = bio.split(" ");

// Map through the array and add a class to every fifth word
const highlightedWords = words.map((word, index) => {
  if ((index + 1) % 5 === 0) {
    return `<span class="highlight">${word}</span>`;
  }
  return word;
});

// Join the words back together into a string
const highlightedBio = highlightedWords.join(" ");

// Set the innerHTML of the #bio element to the highlighted bio string
document.getElementById("bio").innerHTML = highlightedBio;
