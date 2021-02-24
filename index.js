endPoint = 'http://localhost:3000/api/v1/users'


document.addEventListener('DOMContentLoaded', () => {

  const createUserForm = document.querySelector(".create-user-form")

  createUserForm.addEventListener("submit", (event => {
    event.preventDefault();
    console.log(event)
    createFormHandler(event)
    }))

  function createFormHandler(event) {
    event.preventDefault();
    const nameInput = document.querySelector('#input-name').value 
    
  }

  const c = new Audio("./assets/sounds/grand_piano/c.mp3")
  const cSharp = new Audio("./assets/sounds/grand_piano/cSharp.mp3")
  const d = new Audio("./assets/sounds/grand_piano/d.mp3")
  const dSharp = new Audio("./assets/sounds/grand_piano/dSharp.mp3")
  const e = new Audio("./assets/sounds/grand_piano/e.mp3")
  const f = new Audio("./assets/sounds/grand_piano/f.mp3")
  const fSharp = new Audio("./assets/sounds/grand_piano/fSharp.mp3")
  const g = new Audio("./assets/sounds/grand_piano/g.mp3")
  const gSharp = new Audio("./assets/sounds/grand_piano/gSharp.mp3")
  const a = new Audio("./assets/sounds/grand_piano/a.mp3")
  const aSharp = new Audio("./assets/sounds/grand_piano/aSharp.mp3")
  const b = new Audio("./assets/sounds/grand_piano/b.mp3")

  const piano = document.querySelector(".piano")

  piano.addEventListener("click", (event) => {
    const { id } = event.target
    console.log(id)
    switch (id) {
      case "c":
        c.play()
        break;
      case "cSharp":
        cSharp.play()
        break
      case "d":
        d.play()
        break;
      case "dSharp":
        dSharp.play()
        break;
      case "e":
        e.play()
        break;
      case "f":
        f.play()
        break;
      case "fSharp":
        fSharp.play()
        break;
      case "g":
        g.play()
        break;
      case "gSharp":
        gSharp.play()
        break;
      case "a":
        a.play()
        break;
      case "aSharp":
        aSharp.play()
        break;
      case "b":
        b.play()
        break;

      default:
        null
    }
    })
})
  // function getUsers() {
  //   fetch(endPoint)
  //   .then(response => response.json())
  //   .then(users => {
  //     users.data.forEach(user => {
  //       const appendUser = `
  //     <div data-id=${user.id}>
  //       <h3>${user.attributes.name}</h3>
  //       <h3>${user.relationships.keyboard.data.type}</h3>
  //     </div>
  //     `
  //       document.querySelector('#users-container').innerHTML += appendUser
  //     });
  //   })
  // }