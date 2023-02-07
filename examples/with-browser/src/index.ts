import 'reflect-metadata'
import { el } from '@zero-dependency/dom'
import { User } from './entities.js'
import { storage } from './storage.js'

const app = document.querySelector('#app')!

const userIdInput = el('input', {
  type: 'number',
  name: 'id',
  disabled: true
})

const usernameInput = el('input', {
  type: 'text',
  name: 'username',
  placeholder: 'Username'
})

const submitButton = el(
  'button',
  {
    type: 'submit'
  },
  'Submit'
)

const resetButton = el(
  'button',
  {
    onclick: () => {
      storage.reset()
      render()
    }
  },
  'Reset'
)

const form = el(
  'form',
  {
    onsubmit: (event: Event) => {
      event.preventDefault()
      const formData = new FormData(form)
      const username = formData.get('username')?.toString()
      if (!username) {
        usernameInput.focus()
        return
      }
      storage.data!.addUser(
        new User(storage.data!.getLastUserId() + 1, username)
      )
      storage.write()
      render()
    }
  },
  userIdInput,
  usernameInput,
  submitButton,
  resetButton
)

const storagePreview = el('pre')

function render() {
  form.reset()
  usernameInput.focus()
  userIdInput.value = storage.data!.getLastUserId().toString()
  storagePreview.textContent = JSON.stringify(storage.data, null, 2)
}

render()
app.append(form, storagePreview)
