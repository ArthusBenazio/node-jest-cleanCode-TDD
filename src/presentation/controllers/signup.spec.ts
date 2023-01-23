import { SignUpController } from './signup'

describe('Signup Controller', () => { 
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponde = sut.handle(httpRequest)
    expect(httpResponde.statusCode).toBe(400)
  })
 })