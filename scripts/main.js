const myH1 = document.querySelector('h1');
console.log(myH1);

const myImg = document.querySelector('img');
console.log(myImg);
console.log(prev);

prev.onclick = () => {
  console.log('prev clicked');
  myImg.setAttribute('src', './images/google1.png');
};

next.onclick = () => {
  myImg.setAttribute('src', './images/google2.png');
  console.log('next clicked');
};

//setting user
const user = document.querySelector('h2');
const changeUser = document.querySelector('.change_user');

console.log(user);

// localStorage.clear();

const initUser = () => {
  console.log(localStorage.getItem('user'));
  if (!localStorage.getItem('user')) {
    user.textContent = `Hello, unknown user`;
  } else {
    user.textContent = `Hello, ${localStorage.getItem('user')}`;
  }
};
initUser();

const setUser = () => {
  const newUser = prompt('Enter new user name');
  localStorage.setItem('user', newUser);
  user.textContent = `Hello, ${localStorage.getItem('user')}`;
};
changeUser.onclick = setUser;
