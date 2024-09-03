// Array of Indian boys' names
const indianBoysNames = ['Aarav','Ayush','Dev', 'Vivaan', 'Advik', 'Vihaan', 'Reyansh', 'Arjun', 'Dhruv', 'Kabir', 'Mohammed', 'Ranveer','Aakash','Priyanshu','Abhijeet','Prakash','Shubham','Daivik','Sachin','Piyush','Aditya','Sohan','Anshu','Lucky','Sujal','Prakash','Raj','Satyam','Yash','Rony','Elvish','Saurav','Sahil','Ajay',];

document.getElementById('nameForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let name = document.getElementById('name').value;
  // Convert the entered name to lowercase for case-insensitive comparison
  name = name.toLowerCase();
  // Check if the entered name is Priya
  if (name === 'suman') {
    localStorage.setItem('name1', 'Sandeep');
  } else {
    // If not Priya, select a random name from the Indian boys' names array
    const randomIndex = Math.floor(Math.random() * indianBoysNames.length);
    localStorage.setItem('name1', indianBoysNames[randomIndex]);
  }
  localStorage.setItem('name2', name);
  window.location.href = 'heart.html';
});
