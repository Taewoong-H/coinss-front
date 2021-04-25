import * as request from 'supertest'

const inchOfRain = () => {
  return 1
}

test('did it be rain', () => {
  expect(inchOfRain()).toBe(1);
})