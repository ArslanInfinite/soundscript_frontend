endPoint = 'http://localhost:3000/api/v1/users'

document.addEventListener('DOMContentLoaded', () => {
 getUsers();
})

function getUsers() {fetch(endPoint)
  .then(response => response.json())
  .then(users => {
    users.data.forEach(user => {
      const appendUser = `
      <div data-id=${user.id}>
        <h3>${user.attributes.name}</h3>
      </div>
      `
      console.log(user)
      document.querySelector('#users-container').innerHTML += appendUser
    });
  })
}